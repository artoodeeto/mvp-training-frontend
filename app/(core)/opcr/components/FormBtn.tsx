import React from "react";

interface IFormBtn {
  push: () => void;
  pop: () => void;
  index: number;
  name: string;
  length: number;
}

const FormBtn = ({push, pop, index, name, length}: IFormBtn) => {
  if (index === 0 && length === 1)
    return (
      <button
        type="button"
        className="btn btn-xs btn-outline btn-primary mb-2 ml-2"
        onClick={push}
      >
        Add {name}
      </button>
    );

  if (index === 0 && length > 1)
    return (
      <div className="flex gap-2 w-44 flex-row">
        <button
          type="button"
          className="btn btn-xs btn-outline btn-primary mb-2 ml-2"
          onClick={push}
        >
          Add {name}
        </button>
        <button
          type="button"
          className="btn btn-xs btn-outline btn-error mb-2"
          onClick={pop}
        >
          Delete {name}
        </button>
      </div>
    );
};

export default FormBtn;
