"use client";
import { useState } from "react";
import { Copy } from "./UI/Copy";
import { Delete } from "./UI/Delete";
import { Edit } from "./UI/Edit";

// Сущность продукта
export const Product = (props) => {
  const data = {
    disabled: props.product.disabled,
    formalId: props.product.formalId,
    title: props.product.title,
    dateTo: props.product.dateTo,
    dateBe: props.product.dateBe,
    quantity: props.product.quantity,
    category: props.product.category,
    gramm: props.product.gramm,
  };

  const [handleMenu, StateHandleMenu] = useState(false);

  // всплывающее меню продукта если сроки впорядке
  const handleClick = (e) => {
    if (data.disabled) {
      return;
    }
    StateHandleMenu(!handleMenu);
  };

  return (
    <div
      className={`${
        data.disabled ? "bg-red-200" : "bg-transparent"
      } shadow-md px-2 py-1 rounded-lg relative overflow-hidden `}
    >
      <div
        className={`${
          handleMenu ? "absolute" : "hidden"
        } bg-white h-full w-3/5 top-0 right-0 flex items-center justify-center gap-6 shadow-md rounded-l-lg`}
      >
        <Edit />
        <Copy />
        <Delete formalId={data.formalId} category={data.category} />
      </div>
      <div
        className={`${
          data.disabled ? "opacity-50" : "opacity-100"
        } flex justify-between `}
        onClick={handleClick}
      >
        <span className="flex gap-2 items-center ">
          <span className="flex text-sm flex-col">
            <span>{data.title}</span>
            <span className="text-xs">
              {data.dateTo} - {data.dateBe}
            </span>{" "}
          </span>
        </span>
        <span className="text-sm">
          {data.quantity} {data.gramm}
        </span>
      </div>
    </div>
  );
};
