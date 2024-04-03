"use client";
import { ModalCategory } from "@/features/ModalCategory";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { productsElevate } from "@/shared/slices/modalview";

// Переключение состояния модального окна с созданием категории
export const AddProduct = () => {
  const dispatch = useDispatch();

  const handleModal = () => {
    dispatch(productsElevate());
  };

  return (
    <button onClick={handleModal} className="w-fit">
      +
    </button>
  );
};
