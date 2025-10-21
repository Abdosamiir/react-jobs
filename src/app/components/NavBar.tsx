import { Avatar, AvatarFallback, AvatarImage } from "@/app/components/ui/avatar";

const NavBar = () => {
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
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};

export default NavBar;
