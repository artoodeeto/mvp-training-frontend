import SubmitBtn from "@/app/components/Buttons/SubmitBtn";
import LabeledTextArea from "@/app/components/LabeledTextArea";
import React from "react";
import NameDate from "./NameDate";
import SuccessIndicatorList from "./SuccessIndicatorList";
import {User} from "@/app/interface/user";
import {IIPCR} from "@/app/interface/ipcr";
import {ICompleteIPCR} from "@/app/interface/success_indicator";
import {IPSA} from "@/app/interface/performance_standard";

interface IPCRFormProps {
  user: User;
  users: any;
  formAction: any;
  formState: any;
  ipcr?: IIPCR;
  completeSuccessIndicator: IPSA[];
}

export const IPCRForm = ({
  user,
  users,
  formAction,
  formState,
  ipcr,
  completeSuccessIndicator,
}: IPCRFormProps) => {
  return (
    <form
      action={formAction}
      className="flex flex-col justify-around border p-2"
    >
      <div className="mb-4 flex flex-row justify-between">
        <div className="basis-1/2">
          <p>
            I, {user.firstName} {user.lastName}, Admin Aide IV of the Learning
            and Development and Performance Management Division of Human
            Resource Management and Development Office, commit to deliver and
            agree to be rated on the attainment of the following targets in
            accordance with the indicated measures for the period July 1 to
            December 31, 2023.
          </p>
        </div>
        <div>
          <label
            htmlFor="ratee"
            className="input input-bordered input-sm  flex items-center gap-2"
          >
            Ratee:
            <input
              id="ratee"
              name="ratee"
              type="hidden"
              className="grow"
              value={user.id}
            />
            <input
              type="text"
              className="grow"
              value={`${user.firstName} ${user.lastName}`}
              disabled
            />
          </label>
          <label htmlFor="ratee_date" className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Ratee Date:</span>
            </div>
            <input
              name="ratee_date"
              id="ratee_date"
              defaultValue={ipcr?.ratee_date}
              type="date"
              className="input input-bordered input-sm w-full max-w-xs"
              required
            />
          </label>
        </div>
      </div>

      <SuccessIndicatorList successIndicators={completeSuccessIndicator} />

      <div className="mt-3 w-7/12">
        <label htmlFor="final_average_rating" className="form-control">
          <div className="label">
            <span className="label-text">Final Average Rating:</span>
          </div>
          <input
            type="number"
            id="final_average_rating"
            name="final_average_rating"
            min="0"
            max="100"
            className="input input-bordered w-full max-w-xs"
            defaultValue={ipcr?.final_average_rating}
          />
        </label>

        <label htmlFor="OPCR_efficiency_rating" className="form-control">
          <div className="label">
            <span className="label-text">OPCR (Efficiency Rating):</span>
          </div>
          <input
            type="number"
            id="OPCR_efficiency_rating"
            name="OPCR_efficiency_rating"
            min="0"
            max="100"
            className="input input-bordered w-full max-w-xs"
            defaultValue={ipcr?.OPCR_efficiency_rating}
          />
        </label>

        <LabeledTextArea
          htmlFor="comments"
          id="comments"
          name="comments"
          label="Comments"
          defaultValue={ipcr?.comments}
        />
      </div>

      <div className="flex flex-row justify-between mt-4">
        <NameDate
          data={users}
          htmlFor="reviewed_by"
          id="reviewed_by"
          name="reviewed_by"
          label="Reviewed By"
          dateLabel="Reviewed date"
          dateHtmlFor="reviewed_by_date"
          dateName="reviewed_by_date"
          dateId="reviewed_by_date"
          defaultValueOption={ipcr?.reviewed_by.id}
          defaultValueInput={ipcr?.reviewed_by_date}
        />

        <NameDate
          data={users}
          htmlFor="approved_by"
          id="approved_by"
          name="approved_by"
          label="Approved By"
          dateLabel="Approved date"
          dateHtmlFor="approved_by_date"
          dateName="approved_by_date"
          dateId="approved_by_date"
          defaultValueOption={ipcr?.approved_by.id}
          defaultValueInput={ipcr?.approved_by_date}
        />

        <NameDate
          data={users}
          htmlFor="discussed_with"
          id="discussed_with"
          name="discussed_with"
          label="Discussed with By"
          dateLabel="Discussed date"
          dateHtmlFor="discussed_with_date"
          dateName="discussed_with_date"
          dateId="discussed_with_date"
          defaultValueOption={ipcr?.discussed_with.id}
          defaultValueInput={ipcr?.discussed_with_date}
        />

        <NameDate
          data={users}
          htmlFor="assessed_by"
          id="assessed_by"
          name="assessed_by"
          label="Assessed with By"
          dateLabel="Assessed date"
          dateHtmlFor="assessed_by_date"
          dateName="assessed_by_date"
          dateId="assessed_by_date"
          defaultValueOption={ipcr?.assessed_by.id}
          defaultValueInput={ipcr?.assessed_by_date}
        />

        <NameDate
          data={users}
          htmlFor="final_rating_by"
          id="final_rating_by"
          name="final_rating_by"
          label="Final Rating with By"
          dateLabel="Final Rating date"
          dateHtmlFor="final_rating_by_date"
          dateName="final_rating_by_date"
          dateId="final_rating_by_date"
          defaultValueOption={ipcr?.final_rating_by.id}
          defaultValueInput={ipcr?.final_rating_by_date}
        />
      </div>

      <div className="w-36 mt-4 m-auto">
        <p role="status">{formState?.message}</p>
        <SubmitBtn />
      </div>
    </form>
  );
};
