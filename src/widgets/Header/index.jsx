import { AddProduct } from "./UI/AddProduct";
import { Avatar } from "./UI/Avatar";
import { Logotype } from "./UI/Logotype";
import { Menubtn } from "./UI/Menubtn";

export const Header = () => {
  return (
    <header className="bg-emerald-600 p-3">
      <nav className="flex justify-between items-center">
        <Menubtn />
        <Logotype />
        <AddProduct />
        <Avatar />
      </nav>
    </header>
  );
};
