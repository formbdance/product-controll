import Image from "next/image";

export const Edit = () => {
  return (
    <Image
      src={require("../img/edit_8390720.png")}
      width={32}
      height={32}
      className="shadow-md rounded-full p-1"
      alt=""
    />
  );
};
