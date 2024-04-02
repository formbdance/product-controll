import { Product } from "@/entity/Product";
import { AddProduct } from "./UI/AddProduct";

export const ProductCell = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="">
        <h4 className="text-xl font-semibold">Шкаф:</h4>
      </div>
      <div className="flex flex-col gap-2 px-1">
        <Product
          disabled={false}
          title="Макароны"
          todate="01.04.24"
          bedate="01.04.25"
          quantity={1}
        />
        <Product
          disabled={true}
          title="Рис"
          todate="01.04.23"
          bedate="01.04.25"
          quantity={1}
        />
        <div className="flex items-center justify-center">
          <AddProduct />
        </div>
      </div>
    </div>
  );
};
