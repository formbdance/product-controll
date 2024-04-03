import { useDispatch, useSelector } from "react-redux";
import { categoriesElevate } from "@/shared/slices/modalview";
import { useState } from "react";
import { saveCategory } from "@/shared/slices/categories";

export const ModalCategory = (props) => {
  const dispatch = useDispatch();
  const modalState = useSelector((state) => state.modalStates);
  const [titleText, setTitleText] = useState("");

  const handleModal = () => {
    dispatch(categoriesElevate());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleModal();
    dispatch(saveCategory({ data: { category: titleText } }));
    setTitleText("");
  };

  return (
    <section
      className={`${
        modalState.categories ? "absolute" : "hidden"
      } w-screen h-screen top-0 left-0 flex items-center justify-center`}
    >
      <div
        onClick={handleModal}
        className="absolute w-full h-full bg-black opacity-40"
      />
      <form
        onSubmit={handleSubmit}
        className="bg-white text-xs rounded-xl fixed px-3 py-2 text-sm w-5/6 flex flex-col gap-4"
      >
        <p className="border-b">Создание новой категории</p>

        <div className="">
          <input
            onChange={(e) => setTitleText(e.target.value)}
            value={titleText}
            className="font-light w-full border rounded-md px-2 py-1 outline-none"
            placeholder="Введите название категории"
          />
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
