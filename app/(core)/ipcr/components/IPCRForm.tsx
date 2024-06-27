"use client";

import SubmitBtn from "@/app/components/Buttons/SubmitBtn";
import LabeledTextArea from "@/app/components/LabeledTextArea";
import React, {useEffect, useRef, useState} from "react";
import NameDate from "./NameDate";
import SuccessIndicatorList from "./SuccessIndicatorList";
import {User} from "@/app/interface/user";
import {CreateIPCR, IIPCR} from "@/app/interface/ipcr";
import {ICompleteIPCR} from "@/app/interface/success_indicator";
import {IPSA} from "@/app/interface/performance_standard";
import {
  Formik,
  Form,
  Field,
  ErrorMessage,
  FieldArray,
  ArrayHelpers,
} from "formik";
import * as Yup from "yup";
import {getAllUser} from "@/app/backendAPIRoutes/User";
import FormLayout from "../../opcr/components/FormLayout";
import Options from "@/app/components/Options";
import {useUserContext} from "@/app/context/user";
import {getAllMfo} from "@/app/backendAPIRoutes/mfo";
import MfoIpcrForm from "./mfo_ipcr_form";
import {IMfo, MfoWithId} from "@/app/interface/mfo";

interface IPCRFormProps {
  user: User;
  users: any;
  formAction: any;
  formState: any;
  ipcr?: IIPCR;
  completeSuccessIndicator: IPSA[];
}

const currentDate = new Date().toLocaleString("en-CA", {
  year: "numeric",
  month: "numeric",
  day: "numeric",
});

const validationSchema = Yup.object().shape({
  final_average_rating: Yup.number()
    .required("Required")
    .positive("Incorrect value")
    .integer(),

  OPCR_efficiency_rating: Yup.number()
    .required("Required")
    .positive("Incorrect value")
    .integer(),

  comments: Yup.string().required("Required"),

  ratee_date: Yup.date(),
  reviewed_by_date: Yup.date(),
  approved_by_date: Yup.date(),
  discussed_with_date: Yup.date(),
  assessed_by_date: Yup.date(),
  final_rating_by_date: Yup.date(),

  ratee: Yup.string().required("Required"),
  reviewed_by: Yup.string().required("Required"),
  approved_by: Yup.string().required("Required"),
  discussed_with: Yup.string().required("Required"),
  assessed_by: Yup.string().required("Required"),
  final_rating_by: Yup.string().required("Required"),

  // mfo: Yup.array().of(
  //   Yup.object().shape({
  //     title: Yup.string().required("Required"),
  //     ppa: Yup.array().of(
  //       Yup.object().shape({
  //         title: Yup.string().required("Required"),
  //         successIndicators: Yup.array().of(
  //           Yup.object().shape({
  //             title: Yup.string().required("Required"),
  //             target_measure: Yup.string().required("Required"),
  //             weight: Yup.number()
  //               .required("Required")
  //               .positive("Incorrect value")
  //               .max(100, "No more than 100")
  //               .integer(),
  //             appropriation: Yup.string().required("Required"),
  //             divisions: Yup.string().required("Required"),
  //             physical: Yup.string(),
  //             financial: Yup.number()
  //               .positive("Incorrect value")
  //               .integer("Must be a number"),
  //             q: Yup.number()
  //               .required("Required")
  //               .positive("Incorrect value")
  //               .max(100, "No more than 100")
  //               .integer("Must be a number"),
  //             e: Yup.number()
  //               .required("Required")
  //               .positive("Incorrect value")
  //               .max(100, "No more than 100")
  //               .integer("Must be a number"),
  //             t: Yup.number()
  //               .required("Required")
  //               .positive("Incorrect value")
  //               .max(100, "No more than 100")
  //               .integer(),
  //             a: Yup.number()
  //               .required("Required")
  //               .positive("Incorrect value")
  //               .max(100, "No more than 100")
  //               .integer("Must be a number"),
  //             eps: Yup.number()
  //               .required("Required")
  //               .positive("Incorrect value")
  //               .max(100, "No more than 100")
  //               .integer("Must be a number"),
  //             remarks: Yup.string().required("Required"),
  //           })
  //         ),
  //       })
  //     ),
  //   })
  // ),
});

const initValue: CreateIPCR = {
  final_average_rating: "",
  OPCR_efficiency_rating: "",
  comments: "",
  ratee: "",
  reviewed_by: "",
  approved_by: "",
  final_rating_by: "",
  assessed_by: "",
  discussed_with: "",
  ratee_date: currentDate,
  reviewed_by_date: currentDate,
  approved_by_date: currentDate,
  final_rating_by_date: currentDate,
  assessed_by_date: currentDate,
  discussed_with_date: currentDate,
  mfo: [
    {
      id: "",
      title: "",
      ppa: [
        {
          title: "",
          successIndicators: [
            {
              title: "",
              target_measure: "",
              weight: 0,
              appropriation: "",
              divisions: "",
              physical: "",
              financial: "",
              q: 0,
              e: 0,
              t: 0,
              a: 0,
              eps: 0,
              remarks: "",
            },
          ],
        },
      ],
    },
    // {
    //   id: "",
    //   title: "",
    //   ppa: [
    //     {
    //       title: "",
    //       successIndicators: [
    //         {
    //           title: "",
    //           target_measure: "",
    //           weight: 0,
    //           appropriation: "",
    //           divisions: "",
    //           physical: "",
    //           financial: "",
    //           q: 0,
    //           e: 0,
    //           t: 0,
    //           a: 0,
    //           eps: 0,
    //           remarks: "",
    //         },
    //       ],
    //     },
    //   ],
    // },
  ],
};

export const IPCRForm = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [user, setUser] = useState<User>();
  const [mfo, setMfo] = useState<MfoWithId[]>([]);
  const userCon = useUserContext();

  useEffect(() => {
    const request = async () => {
      setUser(userCon?.user);
      console.log(userCon?.user);
      try {
        const userRes = await getAllUser();
        const mfoRes = await getAllMfo();
        setUsers(userRes.users);
        setMfo(mfoRes.mfo);
        console.log(mfoRes);
      } catch (error) {
        console.log(error);
      }
    };
    request();
  }, []);

  return (
    <Formik
      // validationSchema={validationSchema}
      initialValues={initValue}
      onSubmit={async (values) => {
        // await new Promise((r) => setTimeout(r, 500));
        // alert(JSON.stringify(values, null, 2));
        console.log("bal:", values);
      }}
    >
      <Form className="gap-4 w-5/6 h-full flex flex-col">
        <div className="flex justify-between">
          <FormLayout
            child1={
              <>
                <label className="whitespace-nowrap" htmlFor="ratee">
                  Ratee:
                  <Field
                    as="select"
                    name="ratee"
                    id="ratee"
                    className="input input-bordered input-sm ml-2 w-80"
                  >
                    <Options
                      display="firstName"
                      keyName="lastName"
                      items={users}
                    />
                  </Field>
                </label>
              </>
            }
            errNode1={
              <ErrorMessage
                className="text-red-600"
                name="ratee"
                component="div"
              />
            }
          />

          <FormLayout
            child1={
              <>
                <label className="whitespace-nowrap" htmlFor="ratee_date">
                  Ratee Date:
                  <Field
                    type="date"
                    name="ratee_date"
                    id="ratee_date"
                    className="input input-bordered input-sm ml-2 w-80"
                  />
                </label>
              </>
            }
            errNode1={
              <ErrorMessage
                className="text-red-600 flex"
                name="ratee_date"
                component="div"
              />
            }
          />
        </div>

        <div className="flex justify-between">
          <FormLayout
            child1={
              <>
                <label className="whitespace-nowrap" htmlFor="reviewed_by">
                  Reviewed By:
                  <Field
                    as="select"
                    name="reviewed_by"
                    id="reviewed_by"
                    className="input input-bordered input-sm ml-2 w-80"
                  >
                    <Options
                      display="firstName"
                      keyName="lastName"
                      items={users}
                    />
                  </Field>
                </label>
              </>
            }
            errNode1={
              <ErrorMessage
                className="text-red-600"
                name="reviewed_by"
                component="div"
              />
            }
          />

          <FormLayout
            child1={
              <>
                <label className="whitespace-nowrap" htmlFor="reviewed_by_date">
                  Reviewed By Date:
                  <Field
                    type="date"
                    name="reviewed_by_date"
                    id="reviewed_by_date"
                    className="input input-bordered input-sm ml-2 w-80"
                  />
                </label>
              </>
            }
            errNode1={
              <ErrorMessage
                className="text-red-600 flex"
                name="reviewed_by_date"
                component="div"
              />
            }
          />
        </div>

        <div className="flex justify-between">
          <FormLayout
            child1={
              <>
                <label className="whitespace-nowrap" htmlFor="approved_by">
                  Approved By:
                  <Field
                    as="select"
                    name="approved_by"
                    id="approved_by"
                    className="input input-bordered input-sm ml-2 w-80"
                  >
                    <Options
                      display="firstName"
                      keyName="lastName"
                      items={users}
                    />
                  </Field>
                </label>
              </>
            }
            errNode1={
              <ErrorMessage
                className="text-red-600"
                name="approved_by"
                component="div"
              />
            }
          />

          <FormLayout
            child1={
              <>
                <label className="whitespace-nowrap" htmlFor="approved_by_date">
                  Approved By Date:
                  <Field
                    type="date"
                    name="approved_by_date"
                    id="approved_by_date"
                    className="input input-bordered input-sm ml-2 w-80"
                  />
                </label>
              </>
            }
            errNode1={
              <ErrorMessage
                className="text-red-600 flex"
                name="approved_by_date"
                component="div"
              />
            }
          />
        </div>

        <div className="flex justify-between">
          <FormLayout
            child1={
              <>
                <label className="whitespace-nowrap" htmlFor="final_rating_by">
                  Final Rating By:
                  <Field
                    as="select"
                    name="final_rating_by"
                    id="final_rating_by"
                    className="input input-bordered input-sm ml-2 w-80"
                  >
                    <Options
                      display="firstName"
                      keyName="lastName"
                      items={users}
                    />
                  </Field>
                </label>
              </>
            }
            errNode1={
              <ErrorMessage
                className="text-red-600"
                name="final_rating_by"
                component="div"
              />
            }
          />

          <FormLayout
            child1={
              <>
                <label
                  className="whitespace-nowrap"
                  htmlFor="final_rating_by_date"
                >
                  Final Rating By Date:
                  <Field
                    type="date"
                    name="final_rating_by_date"
                    id="final_rating_by_date"
                    className="input input-bordered input-sm ml-2 w-80"
                  />
                </label>
              </>
            }
            errNode1={
              <ErrorMessage
                className="text-red-600 flex"
                name="final_rating_by_date"
                component="div"
              />
            }
          />
        </div>

        <div className="flex justify-between">
          <FormLayout
            child1={
              <>
                <label className="whitespace-nowrap" htmlFor="assessed_by">
                  Assessed By:
                  <Field
                    as="select"
                    name="assessed_by"
                    id="assessed_by"
                    className="input input-bordered input-sm ml-2 w-80"
                  >
                    <Options
                      display="firstName"
                      keyName="lastName"
                      items={users}
                    />
                  </Field>
                </label>
              </>
            }
            errNode1={
              <ErrorMessage
                className="text-red-600"
                name="assessed_by"
                component="div"
              />
            }
          />

          <FormLayout
            child1={
              <>
                <label className="whitespace-nowrap" htmlFor="assessed_by_date">
                  Assessed By Date:
                  <Field
                    type="date"
                    name="assessed_by_date"
                    id="assessed_by_date"
                    className="input input-bordered input-sm ml-2 w-80"
                  />
                </label>
              </>
            }
            errNode1={
              <ErrorMessage
                className="text-red-600 flex"
                name="assessed_by_date"
                component="div"
              />
            }
          />
        </div>

        <div className="flex justify-between">
          <FormLayout
            child1={
              <>
                <label className="whitespace-nowrap" htmlFor="discussed_with">
                  Discussed With:
                  <Field
                    as="select"
                    name="discussed_with"
                    id="discussed_with"
                    className="input input-bordered input-sm ml-2 w-80"
                  >
                    <Options
                      display="firstName"
                      keyName="lastName"
                      items={users}
                    />
                  </Field>
                </label>
              </>
            }
            errNode1={
              <ErrorMessage
                className="text-red-600"
                name="discussed_with"
                component="div"
              />
            }
          />

          <FormLayout
            child1={
              <>
                <label
                  className="whitespace-nowrap"
                  htmlFor="discussed_with_date"
                >
                  Discussed with Date:
                  <Field
                    type="date"
                    name="discussed_with_date"
                    id="discussed_with_date"
                    className="input input-bordered input-sm ml-2 w-80"
                  />
                </label>
              </>
            }
            errNode1={
              <ErrorMessage
                className="text-red-600 flex"
                name="discussed_with_date"
                component="div"
              />
            }
          />
        </div>

        <div>
          <FieldArray name="mfo">
            {(PpaArrayHelpers: ArrayHelpers) => (
              <MfoIpcrForm arrayHelpers={PpaArrayHelpers} mfo={mfo} />
            )}
          </FieldArray>
        </div>

        <div className="flex flex-col justify-between gap-4">
          <FormLayout
            child1={
              <>
                <label
                  className="whitespace-nowrap"
                  htmlFor="final_average_rating"
                >
                  Final Average Rating:
                  <Field
                    type="number"
                    name="final_average_rating"
                    id="final_average_rating"
                    className="input input-bordered input-sm ml-2 w-80"
                  />
                </label>
              </>
            }
            errNode1={
              <ErrorMessage
                className="text-red-600"
                name="final_average_rating"
                component="div"
              />
            }
          />

          <FormLayout
            child1={
              <>
                <label
                  className="whitespace-nowrap"
                  htmlFor="OPCR_efficiency_rating"
                >
                  OPCR Efficiency Rating:
                  <Field
                    type="number"
                    name="OPCR_efficiency_rating"
                    id="OPCR_efficiency_rating"
                    className="input input-bordered input-sm ml-2 w-80"
                  />
                </label>
              </>
            }
            errNode1={
              <ErrorMessage
                className="text-red-600"
                name="OPCR_efficiency_rating"
                component="div"
              />
            }
          />
        </div>

        <div className="flex justify-start">
          <label htmlFor="comments">
            Comments and Recommendations:
            <Field
              as="textarea"
              name="comments"
              id="comments"
              className="input input-bordered input-xs w-full max-w-md min-h-48"
            />
            <ErrorMessage
              className="text-red-600"
              name="comments"
              component="div"
            />
          </label>
        </div>

        <button type="submit">Submit</button>
      </Form>
    </Formik>

    // <form
    //   action={formAction}
    //   className="flex flex-col justify-around border p-2"
    // >
    //   {ipcr ? (
    //     <input
    //       id="ipcrId"
    //       name="ipcrId"
    //       type="hidden"
    //       className="grow"
    //       value={ipcr?.id}
    //     />
    //   ) : (
    //     ""
    //   )}
    //   <div className="mb-4 flex flex-row justify-between">
    //     <div className="basis-1/2">
    //       <p>
    //         I, {user.firstName} {user.lastName}, Admin Aide IV of the Learning
    //         and Development and Performance Management Division of Human
    //         userResource Management and Development Office, commit to deliver and
    //         agree to be rated on the attainment of the following targets in
    //         accordance with the indicated measuuserRes for the period July 1 to
    //         December 31, 2023.
    //       </p>
    //     </div>
    //     <div>
    //       <label
    //         htmlFor="ratee"
    //         className="input input-bordered input-sm  flex items-center gap-2"
    //       >
    //         Ratee:
    //         <input
    //           id="ratee"
    //           name="ratee"
    //           type="hidden"
    //           className="grow"
    //           value={user.id}
    //         />
    //         <input
    //           type="text"
    //           className="grow"
    //           value={`${user.firstName} ${user.lastName}`}
    //           disabled
    //         />
    //       </label>
    //       <label htmlFor="ratee_date" className="form-control w-full max-w-xs">
    //         <div className="label">
    //           <span className="label-text">Ratee Date:</span>
    //         </div>
    //         <input
    //           name="ratee_date"
    //           id="ratee_date"
    //           defaultValue={ipcr?.ratee_date}
    //           type="date"
    //           className="input input-bordered input-sm w-full max-w-xs"
    //           required
    //         />
    //       </label>
    //     </div>
    //   </div>

    //   <SuccessIndicatorList successIndicators={completeSuccessIndicator} />

    //   <div className="mt-3 w-7/12">
    //     <label htmlFor="final_average_rating" className="form-control">
    //       <div className="label">
    //         <span className="label-text">Final Average Rating:</span>
    //       </div>
    //       <input
    //         type="number"
    //         id="final_average_rating"
    //         name="final_average_rating"
    //         min="0"
    //         max="100"
    //         className="input input-bordered w-full max-w-xs"
    //         defaultValue={ipcr?.final_average_rating}
    //       />
    //     </label>

    //     <label htmlFor="OPCR_efficiency_rating" className="form-control">
    //       <div className="label">
    //         <span className="label-text">OPCR (Efficiency Rating):</span>
    //       </div>
    //       <input
    //         type="number"
    //         id="OPCR_efficiency_rating"
    //         name="OPCR_efficiency_rating"
    //         min="0"
    //         max="100"
    //         className="input input-bordered w-full max-w-xs"
    //         defaultValue={ipcr?.OPCR_efficiency_rating}
    //       />
    //     </label>

    //     <LabeledTextArea
    //       htmlFor="comments"
    //       id="comments"
    //       name="comments"
    //       label="Comments"
    //       defaultValue={ipcr?.comments}
    //     />
    //   </div>

    //   <div className="flex flex-row justify-between mt-4">
    //     <NameDate
    //       data={users}
    //       htmlFor="reviewed_by"
    //       id="reviewed_by"
    //       name="reviewed_by"
    //       label="Reviewed By"
    //       dateLabel="Reviewed date"
    //       dateHtmlFor="reviewed_by_date"
    //       dateName="reviewed_by_date"
    //       dateId="reviewed_by_date"
    //       defaultValueOption={ipcr?.reviewed_by.id}
    //       defaultValueInput={ipcr?.reviewed_by_date}
    //     />

    //     <NameDate
    //       data={users}
    //       htmlFor="approved_by"
    //       id="approved_by"
    //       name="approved_by"
    //       label="Approved By"
    //       dateLabel="Approved date"
    //       dateHtmlFor="approved_by_date"
    //       dateName="approved_by_date"
    //       dateId="approved_by_date"
    //       defaultValueOption={ipcr?.approved_by.id}
    //       defaultValueInput={ipcr?.approved_by_date}
    //     />

    //     <NameDate
    //       data={users}
    //       htmlFor="discussed_with"
    //       id="discussed_with"
    //       name="discussed_with"
    //       label="Discussed with By"
    //       dateLabel="Discussed date"
    //       dateHtmlFor="discussed_with_date"
    //       dateName="discussed_with_date"
    //       dateId="discussed_with_date"
    //       defaultValueOption={ipcr?.discussed_with.id}
    //       defaultValueInput={ipcr?.discussed_with_date}
    //     />

    //     <NameDate
    //       data={users}
    //       htmlFor="assessed_by"
    //       id="assessed_by"
    //       name="assessed_by"
    //       label="Assessed with By"
    //       dateLabel="Assessed date"
    //       dateHtmlFor="assessed_by_date"
    //       dateName="assessed_by_date"
    //       dateId="assessed_by_date"
    //       defaultValueOption={ipcr?.assessed_by.id}
    //       defaultValueInput={ipcr?.assessed_by_date}
    //     />

    //     <NameDate
    //       data={users}
    //       htmlFor="final_rating_by"
    //       id="final_rating_by"
    //       name="final_rating_by"
    //       label="Final Rating with By"
    //       dateLabel="Final Rating date"
    //       dateHtmlFor="final_rating_by_date"
    //       dateName="final_rating_by_date"
    //       dateId="final_rating_by_date"
    //       defaultValueOption={ipcr?.final_rating_by.id}
    //       defaultValueInput={ipcr?.final_rating_by_date}
    //     />
    //   </div>

    //   <div className="w-36 mt-4 m-auto">
    //     <p role="status">{formState?.message}</p>
    //     <SubmitBtn />
    //   </div>
    // </form>
  );
};
