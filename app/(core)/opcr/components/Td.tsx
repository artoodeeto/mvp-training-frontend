import React from "react";
import {Field, ErrorMessage} from "formik";

interface ITd {
  mfoIndex: number;
  ppaIndex: number;
  index: number;
  name: string;
  type?: string;
  as?: string | undefined;
  children?: React.ReactNode;
}

const Td = ({
  mfoIndex,
  ppaIndex,
  index,
  name,
  as,
  children,
  type = "text",
}: ITd) => {
  const compName = `mfo[${mfoIndex}].ppa[${ppaIndex}].successIndicators[${index}].${name}`;

  if (children) {
    return (
      <td>
        <Field
          name={compName}
          id={compName}
          as="select"
          className="input input-bordered input-xs w-full max-w-xs"
        >
          {children}
        </Field>
      </td>
    );
  }

  return (
    <td className="text-slate-500 text-center">
      <Field
        type={type}
        as={as}
        name={compName}
        id={compName}
        className="input input-bordered input-xs w-full max-w-xs"
      />
      <ErrorMessage className="text-red-600" name={compName} component="div" />
    </td>
  );
};

export default Td;
