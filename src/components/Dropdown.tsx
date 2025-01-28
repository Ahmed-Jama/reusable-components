import React, { ReactElement, useEffect, useRef, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { Divider } from "@nextui-org/react";

type Option = {
  label: string;
  value: string;
};

interface DropdownProps {
  options: {
    label: string;
    value: string;
  }[];
  value: Option | null;
  onChange: (selected: Option | null) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ options, value, onChange }) => {
  const [open, setOpen] = useState<boolean>(false);

  //! divEl short for div Element
  const divEl = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (event: MouseEvent) => {
      if (!divEl.current) return;
      if (!divEl.current?.contains(event.target as Node | null)) setOpen(false);
    };

    document.addEventListener("click", handler, true);

    return () => {
      document.removeEventListener("click", handler, true);
    };
  }, []);

  const dropdownVars = {
    initial: { scaleY: 0, opacity: 0.3 },
    animate: { scaleY: 1, opacity: 1 },
    exit: { scaleY: 0, opacity: 0 },
  };

  const onSelectOption = (selected: Option) => {
    setOpen(!open);
    onChange(selected);
  };

  return (
    <div ref={divEl} className="relative m-auto w-48 pt-8 text-xl">
      <div
        className="mb-[2px] flex cursor-pointer items-center justify-between rounded-xl border border-zinc-400 bg-zinc-100 px-5 py-2 shadow shadow-zinc-400"
        onClick={() => setOpen(!open)}
      >
        <div>{value?.label || "Select..."}</div>
        {open ? <ChevronUp /> : <ChevronDown />}
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            className="absolute z-10 flex origin-top flex-col overflow-hidden rounded-xl border-1 border-zinc-400 bg-zinc-100 shadow shadow-zinc-400"
            variants={dropdownVars}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            {options.map((option: Option) => {
              return (
                <div
                  className="flex w-48 cursor-pointer items-center px-5 py-2 text-xl hover:bg-zinc-200"
                  key={option.value}
                  onClick={() => onSelectOption(option)}
                >
                  {option.label}
                </div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Dropdown;
