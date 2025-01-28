import React, { useContext } from "react";
import NavigationContext from "@/context/navigation";
import classNames from "classnames";

type LinkProps = {
  children: React.ReactNode;
  className?: string;
  to: string;
};

const Link: React.FC<LinkProps> = ({ children, className, to, ...props }) => {
  const { navigate } = useContext(NavigationContext);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (e.metaKey || e.ctrlKey) return;
    e.preventDefault();

    navigate(to);
  };

  const style = classNames(
    "py-2 text-xl text-blue-600 hover:underline hover:cursor-pointer",
    className,
  );
  return (
    <a className={style} href={to} onClick={handleClick} {...props}>
      {children}
    </a>
  );
};

export default Link;
