import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/app/components/ui/avatar";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    isActive ? "font-bold bg-black p-2 rounded" : "";
  return (
    <div className="bg-violet-700 flex justify-between items-center p-4 shadow-md">
      <Avatar className="rounded-full w-10 h-10">
        <AvatarImage
          src="https://github.com/evilrabbit.png"
          alt="@evilrabbit"
        />
        <AvatarFallback>ER</AvatarFallback>
      </Avatar>

      <ul className=" flex space-x-4 text-white">
        <li>
          <NavLink to="/" className={linkClass}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/jobs" className={linkClass}>
            Jobs
          </NavLink>
        </li>
        <li>
          <NavLink to="/add-job" className={linkClass}>
            Add Job
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
