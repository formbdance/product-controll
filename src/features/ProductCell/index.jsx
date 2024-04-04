import { Product } from "@/entity/Product";
import { ModalProduct } from "../ModalProduct";

// Ячейка (категория) продукта
export const ProductCell = (props) => {
  return (
    <div className="flex flex-col gap-2">
      <ModalProduct title={props.category} />
      <div className="">
        <h4 className="text-xl font-semibold">{props.title}:</h4>
      </div>
      <div className="flex flex-col gap-2 px-1">
        {Array.isArray(props.products) && props.products.length < 0
          ? console.log("bad Arrat cell")
          : props.products.map((item, index) => {
              return <Product disabled={false} product={item} key={index} />;
            })}
      </div>
    </div>
  );
};
