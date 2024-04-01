import { Avatar } from "./UI/Avatar";
import { Logotype } from "./UI/Logotype";
import { Menubtn } from "./UI/Menubtn";

export const Header = () => {
  return (
    <header className="bg-emerald-600 p-3">
      <nav className="flex justify-between items-center">
        <Menubtn />
        <Logotype />
        <Avatar />
      </nav>
    </header>
  );
};
