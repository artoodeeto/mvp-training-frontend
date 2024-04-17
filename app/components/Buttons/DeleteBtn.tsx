import React from "react";
import {useFormStatus} from "react-dom";

const DeleteBtn = ({handleClick}: {handleClick: any}) => {
  const {pending} = useFormStatus();
  return (
    <button
      onClick={handleClick}
      type="submit"
      aria-disabled={pending}
      className="py-2 px-4  bg-red-600 hover:bg-red-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
    >
      Delete
    </button>
  );
};

export default DeleteBtn;
