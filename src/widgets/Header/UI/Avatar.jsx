"use client";
import { UseDispatch, useDispatch } from "react-redux";
import { createClient, deleteClient } from "@/shared/slices/client";

export const Avatar = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <button
        onClick={() =>
          dispatch(createClient({ data: { uuid: "admin", categories: [] } }))
        }
        className="w-6 h-6 bg-gray-200 rounded-md"
      />
      <button
        onClick={() => dispatch(deleteClient())}
        className="w-6 h-6 bg-gray-200 rounded-md"
      />
    </div>
  );
};
