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
  ];

  return (
    //! items.start make you hover over the text instead of the box
    <div className="fixed left-0 top-0 flex h-full w-36 flex-col items-start overflow-y-auto overflow-x-hidden bg-gray-200 px-2 py-1 shadow-lg shadow-zinc-500">
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
  );
};

export default Sidebar;
