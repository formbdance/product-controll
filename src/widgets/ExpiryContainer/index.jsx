import { ProductCell } from "@/features/ProductCell";

export const ExpiryContainer = () => {
  return (
    <section className="mt-4 px-2 flex flex-col gap-3">
      <ProductCell />

      <div className="flex items-center gap-1">
        <p className="w-4 h-4 bg-green-600 opacity-60 font-bold text-white rounded-full flex items-center justify-center">
          +
        </p>
        <h4 className="text-xl font-semibold cursor-pointer">Add Category</h4>
      </div>
    </section>
  );
};
