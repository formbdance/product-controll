import Image from "next/image";
import { useDispatch } from "react-redux";
import { deleteProduct } from "@/shared/slices/products";

export const Delete = (props) => {
  const data = {
    formalId: props.formalId,
    category: props.category,
  };

  const dispatch = useDispatch();

  return (
    <button
      onClick={() =>
        dispatch(
          deleteProduct({
            data: { category: data.category, formalId: data.formalId },
          })
        )
      }
    >
      <Image
        src={require("../img/delete_8390703.png")}
        width={32}
        height={32}
        className="shadow-md rounded-full p-1"
        alt=""
      />
    </button>
  );
};
