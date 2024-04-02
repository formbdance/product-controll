"use client";
import { useState } from "react";
import { Copy } from "./UI/Copy";
import { Delete } from "./UI/Delete";
import { Edit } from "./UI/Edit";

export const Product = (props) => {
  const date = {
    disabled: props.disabled,
    title: props.title,
    todate: props.todate,
    bedate: props.bedate,
    quantity: props.quantity,
  };

  const [handleMenu, StateHandleMenu] = useState(false);

  const handleClick = (e) => {
    if (props.disabled) {
      return;
    }
    StateHandleMenu(!handleMenu);
  };

  return (
    <div
      className={`${
        date.disabled ? "bg-red-200" : "bg-transparent"
      } shadow-md px-2 py-1 rounded-lg relative overflow-hidden `}
    >
      <div
        className={`${
          handleMenu ? "absolute" : "hidden"
        } bg-white h-full w-3/5 top-0 right-0 flex items-center justify-center gap-6 shadow-md rounded-l-lg`}
      >
        <Edit />
        <Copy />
        <Delete />
      </div>
      <div
        className={`${
          date.disabled ? "opacity-50" : "opacity-100"
        } flex justify-between `}
        onClick={handleClick}
      >
        <span className="flex gap-2 items-center ">
          <span className="flex text-sm flex-col">
            <span>{date.title}</span>
            <span className="text-xs">
              {date.todate} - {date.bedate}
            </span>{" "}
          </span>
        </span>
        <span className="text-sm">{date.quantity} п</span>
      </div>
    </div>
  );
};
