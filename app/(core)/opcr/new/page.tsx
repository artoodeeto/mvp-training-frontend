"use client";

import React, {useEffect, useState} from "react";
import OPCRForm from "../components/OPCRForm";
import {IOPCR} from "@/app/interface/opcr";
import {User} from "@/app/interface/user";
import {getAllUser} from "@/app/backendAPIRoutes/User";
import {createOPCR} from "@/app/backendAPIRoutes/Opcr";
import {Formik, FormikHelpers} from "formik";
import * as Yup from "yup";
import {handleError} from "@/app/utils/error/handleError";
import {useRouter} from "next/navigation";

const currentDate = new Date().toLocaleString("en-CA", {
  year: "numeric",
  month: "numeric",
  day: "numeric",
});

var date = new Date();
date.setDate(date.getDate() - 1); // yesterdays date

const validationSchema = Yup.object().shape({
  owned_by: Yup.string().required("Required"),
  evaluated_by: Yup.string().required("Required"),
  opcr_reviewed_by: Yup.string().required("Required"),
  opcr_approved_by: Yup.string().required("Required"),
  recommending_approval_by: Yup.string().required("Required"),

  evaluated_by_date: Yup.date(),
  reviewed_by_date: Yup.date(),
  recommending_approval_date: Yup.date(),
  approved_date: Yup.date(),

  total: Yup.number()
    .required("Required")
    .positive("Incorrect value")
    .integer(),
  comments_by_evaluator: Yup.string().required("Required"),
  overall_rating: Yup.number()
    .required("Required")
    .positive("Incorrect value")
    .integer(),
  numerical_rating: Yup.number()
    .required("Required")
    .positive("Incorrect value")
    .integer(),
  adjectival_rating: Yup.number()
    .required("Required")
    .positive("Incorrect value")
    .max(100, "No more than 100")
    .integer(),
  mfo: Yup.array().of(
    Yup.object().shape({
      title: Yup.string().required("Required"),
      ppa: Yup.array().of(
        Yup.object().shape({
          title: Yup.string().required("Required"),
          successIndicators: Yup.array().of(
            Yup.object().shape({
              title: Yup.string().required("Required"),
              target_measure: Yup.string().required("Required"),
              weight: Yup.number()
                .required("Required")
                .positive("Incorrect value")
                .max(100, "No more than 100")
                .integer(),
              appropriation: Yup.string().required("Required"),
              divisions: Yup.string().required("Required"),
              physical: Yup.string(),
              financial: Yup.number()
                .positive("Incorrect value")
                .integer("Must be a number"),
              q: Yup.number()
                .required("Required")
                .positive("Incorrect value")
                .max(100, "No more than 100")
                .integer("Must be a number"),
              e: Yup.number()
                .required("Required")
                .positive("Incorrect value")
                .max(100, "No more than 100")
                .integer("Must be a number"),
              t: Yup.number()
                .required("Required")
                .positive("Incorrect value")
                .max(100, "No more than 100")
                .integer(),
              a: Yup.number()
                .required("Required")
                .positive("Incorrect value")
                .max(100, "No more than 100")
                .integer("Must be a number"),
              eps: Yup.number()
                .required("Required")
                .positive("Incorrect value")
                .max(100, "No more than 100")
                .integer("Must be a number"),
              remarks: Yup.string().required("Required"),
            })
          ),
        })
      ),
    })
  ),
});

const initValue: IOPCR = {
  owned_by: "",
  evaluated_by: "",
  opcr_reviewed_by: "",
  opcr_approved_by: "",
  recommending_approval_by: "",

  evaluated_by_date: currentDate,
  reviewed_by_date: currentDate,
  recommending_approval_date: currentDate,
  approved_date: currentDate,

  total: 0,
  comments_by_evaluator: "",
  overall_rating: 0,
  numerical_rating: 0,
  adjectival_rating: 0,

  mfo: [
    {
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
  ],
};

const NewOPCR = () => {
  const [users, setUsers] = useState<User[]>([]);
  const router = useRouter();

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await getAllUser();
        setUsers(res.users);
      } catch (error) {
        console.log(error);
      }
    };
    getUsers();
  }, []);

  return (
    <div>
      <div className="flex justify-center">
        <Formik
          initialValues={initValue}
          validationSchema={validationSchema}
          onSubmit={async (
            values,
            {setSubmitting, validateField, setErrors}: FormikHelpers<IOPCR>
          ) => {
            try {
              const res = await createOPCR(values);
              if (!res?.isOk) setErrors(res.errorMsg);
              router.push("/opcr");
            } catch (err: unknown) {
              console.log("hahahah", err);
              handleError(err);
            } finally {
              setSubmitting(false);
            }
          }}
        >
          {({isSubmitting, values, validateField, setErrors}) => (
            <OPCRForm users={users} isSubmitting={isSubmitting} />
          )}
        </Formik>
      </div>
    </div>
  );
};

export default NewOPCR;
