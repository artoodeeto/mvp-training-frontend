import Select from "@/app/components/Select";
import React from "react";

interface NameDateProps {
  data: any;

  htmlFor: string;
  id: string;
  name: string;
  label: string;

  dateLabel: string;
  dateHtmlFor: string;
  dateName: string;
  dateId: string;
  defaultValueOption?: number;
  defaultValueInput?: string;
}

const NameDate = ({
  data,
  htmlFor,
  id,
  name,
  label,
  dateLabel,
  dateHtmlFor,
  dateName,
  dateId,
  defaultValueInput,
  defaultValueOption = 0,
}: NameDateProps) => {
  return (
    <div>
      <label htmlFor={htmlFor} className="flex flex-row form-control max-w-xs">
        <div className="label">
          <span className="label-text">{label}:</span>
        </div>
        <Select
          data={data}
          name={name}
          id={id}
          display1="firstName"
          display2="lastName"
          klass="select select-bordered select-sm"
          setDefaultValue={defaultValueOption}
        />
      </label>

      <label htmlFor={dateHtmlFor} className="form-control max-w-xs">
        <div className="label">
          <span className="label-text">{dateLabel}:</span>
        </div>
        <input
          name={dateName}
          id={dateId}
          type="date"
          placeholder="Type here"
          className="input input-bordered w-full input-sm  max-w-xs"
          defaultValue={defaultValueInput}
        />
      </label>
    </div>
  );
};

export default NameDate;
