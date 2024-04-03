import { AddCategory } from "./UI/AddCategory";
import { CellContent } from "@/features/CellContent";

export const ExpiryContainer = () => {
  return (
    <section className="mt-4 px-2 flex flex-col gap-3">
      <CellContent />

      <div className="flex items-center gap-1">
        <p className="w-4 h-4 bg-green-600 opacity-60 font-bold text-white rounded-full flex items-center justify-center">
          +
        </p>
        <AddCategory />
      </div>
    </section>
  );
};
