"use client";
import { ProductCell } from "../ProductCell";
import { getClient } from "@/shared/slices/client";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

export const CellContent = () => {
  const dispatch = useDispatch();
  const clientState = useSelector((state) => state.clientState);
  const categoriesState = useSelector((state) => state.categoriesState);

  useEffect(() => {
    dispatch(getClient({ uuid: "admin" }));
  }, [dispatch, categoriesState.categoryStatus]);

  return (
    <>
      {!Array.isArray(clientState.clientCategories)
        ? console.log("not is array")
        : clientState.clientCategories.map((item, index) => {
            return (
              <ProductCell
                title={item.title}
                products={item.products}
                key={index}
              />
            );
          })}
    </>
  );
};
