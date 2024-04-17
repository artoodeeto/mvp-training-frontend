"use client";

import {useState, useEffect} from "react";
import {useFormState} from "react-dom";
import SubmitBtn from "@/app/components/Buttons/SubmitBtn";
import AspectForm from "../AspectForm/AspectForm";
import {AspectRowForm} from "@/app/interface/aspects";
import DeleteBtn from "@/app/components/Buttons/DeleteBtn";
import {
  deleteAspect,
  getAspect,
  updateAspect,
} from "@/app/backendAPIRoutes/aspect";

const initState = {
  message: "",
};

const AspectEdit = ({params}: {params: {id: string}}) => {
  const id = params.id;

  const [inputRows, setInputRows] = useState<AspectRowForm[]>([]);

  useEffect(() => {
    const getSIWithID = async () => {
      try {
        const res = await getAspect(id);
        setInputRows([
          {
            si: res.successIndicator,
            mov: res.mov,
            aow: res.aspects_of_work,
          },
        ]);
      } catch (error) {
        console.log(error);
      }
    };
    getSIWithID();
  }, [id]);

  const [state, formAction] = useFormState(updateAspect, initState);
  const handleClick = (event: any) => {
    event.preventDefault();
    deleteAspect(id);
  };
  return (
    <div className="max-w-max px-4 py-8 bg-white rounded-lg shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10 m-auto mt-20 text-white">
      <form action={formAction} className="flex flex-col w-full justify-around">
        <div className="relative">
          <input type="hidden" name="id" value={id} />
          <div className="flex flex-col justify-between">
            <AspectForm inputRows={inputRows} />
          </div>
          <div className="flex justify-between">
            <SubmitBtn />
            <DeleteBtn handleClick={handleClick} />
          </div>
        </div>
        <p role="status">{state?.message}</p>
      </form>
    </div>
  );
};

export default AspectEdit;
