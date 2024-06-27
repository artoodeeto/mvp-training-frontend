import React from "react";
import {Form, Field, ErrorMessage, FieldArray} from "formik";
import FormLayout from "./FormLayout";
import MfoForm from "./MfoForm";
import {IOPCR} from "@/app/interface/opcr";
import {User} from "@/app/interface/user";
import Options from "@/app/components/Options";

interface OPCRFormProps {
  users: User[];
  isSubmitting: boolean;
}

const OPCRForm = ({users, isSubmitting}: OPCRFormProps) => {
  return (
    <Form className="gap-4 w-5/6 h-full flex flex-col">
      <div className="flex justify-start">
        <FormLayout
          child1={
            <>
              <label className="whitespace-nowrap" htmlFor="owned_by">
                Owned By:
                <Field
                  as="select"
                  name="owned_by"
                  id="owned_by"
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
              name="owned_by"
              component="div"
            />
          }
        />
      </div>

      <div className="flex justify-between">
        <FormLayout
          child1={
            <>
              <label
                className="whitespace-nowrap"
                htmlFor="recommending_approval_by"
              >
                Recommending Approval By:
                <Field
                  as="select"
                  name="recommending_approval_by"
                  id="recommending_approval_by"
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
              name="recommending_approval_by"
              component="div"
            />
          }
        />

        <FormLayout
          child1={
            <>
              <label
                className="whitespace-nowrap"
                htmlFor="recommending_approval_date"
              >
                Recommending Approval Date:
                <Field
                  type="date"
                  name="recommending_approval_date"
                  id="recommending_approval_date"
                  className="input input-bordered input-sm ml-2 w-80"
                />
              </label>
            </>
          }
          errNode1={
            <ErrorMessage
              className="text-red-600 flex"
              name="recommending_approval_date"
              component="div"
            />
          }
        />
      </div>

      <div className="flex justify-between">
        <FormLayout
          child1={
            <>
              <label className="whitespace-nowrap" htmlFor="opcr_approved_by">
                Approved By:
                <Field
                  as="select"
                  name="opcr_approved_by"
                  id="opcr_approved_by"
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
              name="opcr_approved_by"
              component="div"
            />
          }
        />

        <FormLayout
          child1={
            <>
              <label className="whitespace-nowrap" htmlFor="approved_date">
                Approved Date:
                <Field
                  type="date"
                  name="approved_date"
                  id="approved_date"
                  className="input input-bordered input-sm ml-2 w-80"
                />
              </label>
            </>
          }
          errNode1={
            <ErrorMessage
              className="text-red-600"
              name="approved_date"
              component="div"
            />
          }
        />
      </div>

      <div className="flex justify-between">
        <FormLayout
          child1={
            <>
              <label className="whitespace-nowrap" htmlFor="evaluated_by">
                Evaluated By:
              </label>
              <Field
                as="select"
                name="evaluated_by"
                id="evaluated_by"
                className="input input-bordered input-sm ml-2 w-80"
              >
                <Options display="firstName" keyName="lastName" items={users} />
              </Field>
            </>
          }
          errNode1={
            <ErrorMessage
              className="text-red-600 flex"
              name="evaluated_by"
              component="div"
            />
          }
        />

        <FormLayout
          child1={
            <>
              <label className="whitespace-nowrap" htmlFor="evaluated_by_date">
                Evaluated Date:
                <Field
                  type="date"
                  name="evaluated_by_date"
                  id="evaluated_by_date"
                  className="input input-bordered input-sm ml-2 w-80"
                />
              </label>
            </>
          }
          errNode1={
            <ErrorMessage
              className="text-red-600 flex"
              name="evaluated_by_date"
              component="div"
            />
          }
        />
      </div>

      <div className="flex justify-between">
        <FormLayout
          child1={
            <>
              <label className="whitespace-nowrap" htmlFor="opcr_reviewed_by">
                Reviewed By:
                <Field
                  as="select"
                  name="opcr_reviewed_by"
                  id="opcr_reviewed_by"
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
              className="text-red-600 flex"
              name="opcr_reviewed_by"
              component="div"
            />
          }
        />

        <FormLayout
          child1={
            <>
              <label className="whitespace-nowrap" htmlFor="reviewed_by_date">
                Reviewed Date:
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

      <div className="flex justify-center">
        <FieldArray name="mfo" component={MfoForm} />
      </div>

      <div className="flex justify-between">
        <FormLayout
          child1={
            <>
              <label className="whitespace-nowrap" htmlFor="total">
                Total:
                <Field
                  type="number"
                  name="total"
                  id="total"
                  className="input input-bordered input-sm ml-2 w-80"
                />
              </label>
            </>
          }
          errNode1={
            <ErrorMessage
              className="text-red-600"
              name="total"
              component="div"
            />
          }
        />

        <FormLayout
          child1={
            <>
              <label className="whitespace-nowrap" htmlFor="adjectival_rating">
                Adjectival Rating:
                <Field
                  type="number"
                  name="adjectival_rating"
                  id="adjectival_rating"
                  className="input input-bordered input-sm ml-2 w-80"
                />
              </label>
            </>
          }
          errNode1={
            <ErrorMessage
              className="text-red-600"
              name="adjectival_rating"
              component="div"
            />
          }
        />
      </div>

      <div className="flex justify-between">
        <FormLayout
          child1={
            <>
              <label className="whitespace-nowrap" htmlFor="overall_rating">
                Overall Rating:
                <Field
                  type="number"
                  name="overall_rating"
                  id="overall_rating"
                  className="input input-bordered input-sm ml-2 w-80"
                />
              </label>
            </>
          }
          errNode1={
            <ErrorMessage
              className="text-red-600"
              name="overall_rating"
              component="div"
            />
          }
        />

        <FormLayout
          child1={
            <>
              <label className="whitespace-nowrap" htmlFor="numerical_rating">
                Numerical Rating:
                <Field
                  type="number"
                  name="numerical_rating"
                  id="numerical_rating"
                  className="input input-bordered input-sm ml-2 w-80"
                />
              </label>
            </>
          }
          errNode1={
            <ErrorMessage
              className="text-red-600"
              name="numerical_rating"
              component="div"
            />
          }
        />
      </div>

      <div className="flex justify-start">
        <label htmlFor="comments_by_evaluator">
          Comments By Evaluator:
          <Field
            as="textarea"
            name="comments_by_evaluator"
            id="comments_by_evaluator"
            className="input input-bordered input-xs w-full max-w-md min-h-48"
          />
          <ErrorMessage
            className="text-red-600"
            name="comments_by_evaluator"
            component="div"
          />
        </label>
      </div>

      <div className="flex justify-center">
        <button
          className="btn btn-primary"
          type="submit"
          disabled={isSubmitting}
        >
          Submit
        </button>
      </div>
    </Form>
  );
};

export default OPCRForm;
