import React from "react";
import classNames from "classnames";

interface TooltipProps {
  children: React.ReactNode;
  className?: string;
  content: string;
  place?: "top" | "bottom" | "left" | "right";
}
const Tooltip: React.FC<TooltipProps> = ({
  children,
  className,
  content,
  place,
}) => {
  const [showTooltip, setShowTooltip] = React.useState<boolean>(false);
  // place = "top";

  const tooltipStyle = classNames(
    className,
    `absolute m-1 w-fit cursor-default self-center rounded-md bg-gray-800 p-2 text-xs text-white transition-opacity ${showTooltip ? "opacity-100" : "opacity-0"}`,
    {
      "bottom-[100%]": place === "top",
      "top-[100%]": place === "bottom",
      "left-[100%]": place === "right",
      "right-[100%]": place === "left",
    },
  );

  return (
    <div
      className="relative flex w-fit flex-col items-center justify-center"
      onMouseEnter={() =>
        setTimeout(() => {
          setShowTooltip(true);
        }, 700)
      }
      onMouseLeave={() => setShowTooltip(false)}
    >
      <div>{children}</div>
      <div className={tooltipStyle}>{content}</div>
    </div>
  );
};

export default Tooltip;
