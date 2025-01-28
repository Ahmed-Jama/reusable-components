import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

interface AccordionProps {
  items: {
    id: string;
    label: string;
    content: string;
  }[];
}
const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [expandedIndex, setExpandedIndex] = useState<number>(-1);

  return (
    <div className="m-auto my-3 flex max-w-xl flex-col p-2">
      {items.map(
        (
          item: { label: string; content: string; id: string },
          index: number,
        ) => {
          const isExpanded = index === expandedIndex;

          return (
            <div className="border-b border-slate-500" key={item.id}>
              <div
                className="flex cursor-pointer items-center justify-between gap-2"
                onClick={() =>
                  index === expandedIndex
                    ? setExpandedIndex(-1)
                    : setExpandedIndex(index)
                }
              >
                <div className="p-1 font-sans text-lg font-semibold">
                  {item.label}
                </div>
                {isExpanded ? <ChevronUp /> : <ChevronDown />}
              </div>

              <div className="overflow-hidden">
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      className="p-2 text-justify"
                      initial={{ y: "-30vh" }}
                      animate={{ y: 0 }}
                      transition={{ duration: 0.3 }}
                      exit={{
                        y: "-30vh",
                        transition: {
                          duration: 0.2,
                        },
                      }}
                    >
                      {item.content}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          );
        },
      )}
    </div>
  );
};

export default Accordion;
