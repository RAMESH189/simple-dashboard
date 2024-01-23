import React from "react";
import { IoIosCheckmarkCircle } from "react-icons/io";

export default function Plans({ Icon, type, amount }) {
  return (
    <div className="flex items-center md:items-start flex-col border border-gray-300 shadow-md h-fit min-h-[200px] w-full md:w-[300px] my-2 p-2 hover:bg-gray-200 rounded-md cursor-pointer">
      <div className="flex gap-2 items-center">
        <Icon
          size={35}
          className="rounded-full border bg-gray-300 border-gray-400 p-1"
        />
        <div className="flex flex-col">
          <p className="font-semibold">{type}</p>
          <p>
            <span className="font-bold">{amount}</span>/month
          </p>
        </div>
      </div>
      <div className="flex flex-col p-1">
        <p className="flex gap-1 items-center">
          <IoIosCheckmarkCircle color="lightgreen" size={20} />
          Lorem ipsum dolor sit amet elit.
        </p>
        <p className="flex gap-1 items-center">
          <IoIosCheckmarkCircle color="lightgreen" size={20} />
          Lorem ipsum dolor sit amet elit.
        </p>
        <p className="flex gap-1 items-center">
          <IoIosCheckmarkCircle color="lightgreen" size={20} />
          Lorem ipsum dolor sit amet elit.
        </p>
        <p className="flex gap-1 items-center">
          <IoIosCheckmarkCircle color="lightgreen" size={20} />
          Lorem ipsum dolor sit amet elit.
        </p>
      </div>
    </div>
  );
}
