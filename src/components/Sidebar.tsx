import Link from "./Link";
import { useContext } from "react";
import NavigationContext from "@/context/navigation";

const Sidebar = () => {
  const { currentPath } = useContext(NavigationContext);
  const links = [
    { label: "Dropdown", path: "/" },
    { label: "Accordion", path: "/accordion" },
    { label: "Button", path: "/button" },
    { label: "Modal", path: "/modal" },
    { label: "Table", path: "/table" },
    { label: "Tooltip", path: "/tooltip" },
  ];

  return (
    //! items.start make you hover over the text instead of the box
    <div className="fixed left-0 top-0 flex h-full w-[30%] max-w-48 flex-col items-start overflow-y-auto overflow-x-hidden bg-gray-200 shadow-lg shadow-zinc-500">
      <h1 className="w-full bg-blue-500 px-3 py-1 pb-2 text-xl font-bold text-white">
        Reuseable Components
      </h1>
      <div className="flex flex-col p-1 px-2">
        {links.map((link) => {
          return (
            <Link
              className={
                currentPath === link.path
                  ? "border-l-3 border-blue-600 px-2 font-bold"
                  : "px-2"
              }
              key={link.label}
              to={link.path}
            >
              {link.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
