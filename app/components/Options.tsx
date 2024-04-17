"use client";

import React from "react";

interface OptionProps {
  // children?: ReactNode;
  data: any;
  name: string;
  id: string;
  display1: string;
  display2: string;
  setDefaultValue?: number;
  isRequired?: boolean;
  isDisabled?: boolean;
  klass?: string;
}

const Options = ({
  data,
  name,
  id,
  display1,
  display2,
  setDefaultValue = 0,
  isRequired = true,
  isDisabled = false,
  klass = "",
}: OptionProps) => {
  return (
    <select
      className={klass}
      name={name}
      id={id}
      defaultValue={setDefaultValue}
      required={isRequired}
      disabled={isDisabled}
    >
      {<option value={0}>Select list...</option>}
      {data?.map((elem: any) => (
        <option value={elem.id} key={elem.id}>
          {elem[display1]} - {elem[display2]}
        </option>
      ))}
    </select>
  );
};

export default Options;
