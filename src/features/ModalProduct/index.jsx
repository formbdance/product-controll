"use client";
import { useDispatch, useSelector } from "react-redux";
import { productsElevate } from "@/shared/slices/modalview";

export const ModalProduct = (props) => {
  const dispatch = useDispatch();
  const modalState = useSelector((state) => state.modalStates);

  const handleModal = () => {
    dispatch(productsElevate());
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
      <div className="bg-white text-xs rounded-xl fixed px-3 py-2 text-sm w-5/6 flex flex-col gap-4">
        <p className="border-b">Создание нового продукта</p>

        <div className="flex flex-col gap-2">
          <input
            className="font-light w-full border rounded-md px-2 py-1 outline-none"
            placeholder="Название продукта"
          />
          <div className="flex gap-2">
            <input
              type="date"
              className="font-light w-full border rounded-md px-2 py-1 outline-none"
            />
            <input
              type="date"
              className="font-light w-full border rounded-md px-2 py-1 outline-none"
            />
          </div>
          <div className="flex gap-2">
            <input
              type="text"
              className="font-light w-full border rounded-md px-2 py-1 outline-none"
              placeholder="Количество"
            />
            <select
              type="date"
              className="font-light w-full border rounded-md px-2 py-1 outline-none"
            >
              <option value={null}>Грамовка</option>
              <option value={null}>Гр.</option>
              <option value={null}>Мл.</option>
              <option value={null}>Шт.</option>
              <option value={null}>П.</option>
            </select>
          </div>
        </div>

        <div className="border-t flex justify-end pt-1">
          <button
            onClick={handleModal}
            className="font-light bg-green-400 bg-opacity-80 rounded-md px-2 py-1 text-white"
          >
            Сохранить
          </button>
        </div>
      </div>
    </section>
  );
};
