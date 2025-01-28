import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface Props {
  children: React.ReactNode;
  className?: string;
  content: string;
  delay?: number;
  side?: "top" | "right" | "bottom" | "left";
  sideOffset?: number;
}

const TooltipComponent = (Props: Props) => {
  return (
    <TooltipProvider delayDuration={Props.delay}>
      <Tooltip>
        <TooltipTrigger>{Props.children}</TooltipTrigger>
        <TooltipContent
          className={Props.className}
          sideOffset={Props.sideOffset}
          side={Props.side}
          sticky="always"
        >
          <p>{Props.content}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default TooltipComponent;
