"use client";
import { useDispatch, useSelector } from "react-redux";
import { productsElevate } from "@/shared/slices/modalview";
import { useEffect, useState } from "react";

export const ModalProduct = (props) => {
  const dispatch = useDispatch();
  const modalState = useSelector((state) => state.modalStates);

  const [formData, stateFormData] = useState({
    title: "",
    dateTo: "",
    dateBe: "",
    quantity: 0,
    gramm: "",
  });

  const clearFormData = () => {
    stateFormData({
      title: "",
      dateTo: "",
      dateBe: "",
      quantity: 0,
      gramm: "",
    });
  };

  useEffect(() => {
    clearFormData();
  }, []);

  const handleModal = (e) => {
    dispatch(productsElevate());
  };

  const handleSumbit = (e) => {
    e.preventDefault();
    clearFormData();
    handleModal();
  };

  return (
    <section
      className={`${
        modalState.products ? "absolute" : "hidden"
      } w-screen h-screen top-0 left-0 flex items-center justify-center z-20`}
    >
      <div
        onClick={handleModal}
        className="absolute w-full h-full bg-black opacity-40"
      />
      <form
        onSubmit={handleSumbit}
        className="bg-white text-xs rounded-xl fixed px-3 py-2 text-sm w-5/6 flex flex-col gap-4"
      >
        <p className="border-b">Создание нового продукта</p>

        <div className="flex flex-col gap-2">
          <input
            onChange={(e) =>
              stateFormData({ ...formData, title: e.target.value })
            }
            value={formData.title}
            onClick={() => console.log(formData)}
            className="font-light w-full border rounded-md px-2 py-1 outline-none"
            placeholder="Название продукта"
          />
          <div className="flex gap-2">
            <input
              onChange={(e) =>
                stateFormData({ ...formData, dateTo: e.target.value })
              }
              value={formData.dateTo}
              type="date"
              className="font-light w-full border rounded-md px-2 py-1 outline-none"
            />
            <input
              onChange={(e) =>
                stateFormData({ ...formData, dateBe: e.target.value })
              }
              value={formData.dateBe}
              type="date"
              className="font-light w-full border rounded-md px-2 py-1 outline-none"
            />
          </div>
          <div className="flex gap-2">
            <input
              onChange={(e) =>
                stateFormData({ ...formData, quantity: e.target.value })
              }
              value={formData.quantity}
              type="number"
              className="font-light w-full border rounded-md px-2 py-1 outline-none"
              placeholder="Количество"
            />
            <select
              onChange={(e) =>
                stateFormData({ ...formData, gramm: e.target.value })
              }
              value={formData.gramm}
              className="font-light w-full border rounded-md px-2 py-1 outline-none"
            >
              <option value={null}>Грамовка</option>
              <option value={"гр"}>Гр.</option>
              <option value={"мл"}>Мл.</option>
              <option value={"шт"}>Шт.</option>
              <option value={"п"}>П.</option>
            </select>
          </div>
        </div>

        <div className="border-t flex justify-end pt-1">
          <button
            type="submit"
            className="font-light bg-green-400 bg-opacity-80 rounded-md px-2 py-1 text-white"
          >
            Сохранить
          </button>
        </div>
      </form>
    </section>
  );
};
