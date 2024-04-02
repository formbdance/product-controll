import Image from "next/image";

export const Copy = () => {
  return (
    <Image
      src={require("../img/plus_8390783.png")}
      width={32}
      height={32}
      className="shadow-md rounded-full p-1"
      alt=""
    />
  );
};
