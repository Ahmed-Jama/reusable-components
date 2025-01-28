import React, { useContext } from "react";
import NavigationContext from "@/context/navigation";

type RouteProps = {
  children: React.ReactNode;
  path: string;
};
const Route: React.FC<RouteProps> = ({ children, path }) => {
  const { currentPath } = useContext(NavigationContext);

  return currentPath === path ? children : null;
};

export default Route;
