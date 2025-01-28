import React from "react";
import classNames from "classnames";

interface CommonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  className?: string;
  outline?: boolean;
  rounded?: boolean;
}
type ConditionalProps =
  | {
      primary?: boolean;
      secondary?: never;
      success?: never;
      warning?: never;
      danger?: never;
    }
  | {
      primary?: never;
      secondary?: boolean;
      success?: never;
      warning?: never;
      danger?: never;
    }
  | {
      primary?: never;
      secondary?: never;
      success?: boolean;
      warning?: never;
      danger?: never;
    }
  | {
      primary?: never;
      secondary?: never;
      success?: never;
      warning?: boolean;
      danger?: never;
    }
  | {
      primary?: never;
      secondary?: never;
      success?: never;
      warning?: never;
      danger?: boolean;
    };

type PropTypes = CommonProps & ConditionalProps;

const Button: React.FC<PropTypes> = ({
  children,
  className,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
  ...props
}) => {
  const style = classNames(
    className,
    "flex items-center justify-center gap-1 border  p-2 font-semibold",
    {
      "bg-gray-900 border-gray-900": !(
        primary ||
        secondary ||
        success ||
        warning ||
        danger
      ),
      "bg-blue-600 border-blue-600": primary,
      "bg-teal-800 border-teal-800": secondary,
      "bg-green-500 border-green-500": success,
      "bg-orange-600 border-orange-600": warning,
      "bg-red-600 border-red-600": danger,
      "text-white": !outline,
      "rounded-md": !rounded,
      "bg-opacity-0 border-2 hover:bg-opacity-20": outline,
      "rounded-full": rounded,
      "text-blue-600": outline && primary,
      "text-teal-800": outline && secondary,
      "text-green-500": outline && success,
      "text-orange-600": outline && warning,
      "text-red-600": outline && danger,
    },
  );

  return (
    <button {...props} className={style}>
      {children}
    </button>
  );
};

export default Button;
