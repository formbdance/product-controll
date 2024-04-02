import Image from "next/image";

export const Delete = () => {
  return (
    <Image
      src={require("../img/delete_8390703.png")}
      width={32}
      height={32}
      className="shadow-md rounded-full p-1"
      alt=""
    />
  );
};
