"use client";
import { ModalCategory } from "@/features/ModalCategory";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { categoriesElevate } from "@/shared/slices/modalview";

// Переключение состояния модального окна с созданием категории
export const AddCategory = () => {
  const dispatch = useDispatch();

  const handleModal = () => {
    dispatch(categoriesElevate());
  };

  return (
    <div>
      <ModalCategory />
      <button
        onClick={handleModal}
        className="text-xl font-semibold cursor-pointer"
      >
        Add Category
      </button>
    </div>
  );
};
