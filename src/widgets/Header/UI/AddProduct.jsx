"use client";
import { useDispatch } from "react-redux";
import { productsElevate } from "@/shared/slices/modalview";

// Переключение состояния модального окна с созданием категории
export const AddProduct = () => {
  const dispatch = useDispatch();

  const handleModal = () => {
    dispatch(productsElevate());
  };

  return (
    <button onClick={handleModal} className=" bg-blue-100 w-6 h-6 rounded-full">
      +
    </button>
  );
};
