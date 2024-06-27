import React from "react";

interface IFormLayout {
  errNode1: React.ReactNode;
  child1: React.ReactNode;
}

const FormLayout = ({child1, errNode1}: IFormLayout) => {
  return (
    <div>
      <div>{child1}</div>
      {errNode1}
    </div>
  );
};

export default FormLayout;
