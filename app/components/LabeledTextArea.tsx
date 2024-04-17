import React from "react";

interface LabeledTextAreaProps {
  htmlFor: string;
  id: string;
  name: string;
  label: string;
  defaultValue?: string;
}

const LabeledTextArea = ({
  htmlFor,
  id,
  name,
  label,
  defaultValue,
}: LabeledTextAreaProps) => {
  return (
    <label htmlFor={htmlFor} className="form-control">
      <div className="label">
        <span className="label-text">{label}:</span>
      </div>
      <textarea
        id={id}
        name={name}
        className="textarea textarea-bordered h-24"
        required
        defaultValue={defaultValue}
      ></textarea>
    </label>
  );
};

export default LabeledTextArea;
