import React, { useState } from "react";
import Table from "./Table";
import { ChevronDown, ChevronUp } from "lucide-react";

type SortTableProps = {
  data: {}[];
  config: {
    label: string;
    render: (data: any) => any;
    sortValue?: (data: any) => any;
  }[];
};
const SortableTable: React.FC<SortTableProps> = (
  { config, data },
  ...props
) => {
  const [sortOrder, setSortOrder] = useState<null | "asc" | "desc">(null);
  const [sortBy, setSortBy] = useState<null | string>(null);

  const handelClick = (label: string) => {
    if (sortBy && label !== sortBy) {
      setSortOrder("asc");
      setSortBy(label);
      return;
    }
    if (sortOrder == null) {
      setSortOrder("asc");
      setSortBy(label);
    } else if (sortOrder == "asc") {
      setSortOrder("desc");
      setSortBy(label);
    } else if (sortOrder == "desc") {
      setSortOrder(null);
      setSortBy(null);
    }
  };

  let sortedData = data;
  if (sortBy && sortOrder) {
    const { sortValue } = config.find((column) => column.label == sortBy);
    sortedData = [...data].sort((a, b) => {
      const valueA = sortValue(a);
      const valueB = sortValue(b);

      const reverseOrder = sortOrder == "asc" ? 1 : -1;

      if (typeof valueA == "string")
        return valueA.localeCompare(valueB) * reverseOrder;
      else return (valueA - valueB) * reverseOrder;
    });
  }

  const updatedConfig = config.map((column) => {
    if (!column.sortValue) return column;

    return {
      ...column,
      header: () => (
        <th
          className="cursor-pointer hover:bg-gray-300"
          onClick={() => handelClick(column.label)}
        >
          <div className="flex items-center gap-2 pl-2">
            {getIcons(column.label, sortBy, sortOrder)}
            <div>{column.label}</div>
          </div>
        </th>
      ),
    };
  });

  return <Table data={sortedData} config={updatedConfig} {...props} />;
};

const getIcons = (
  label: string,
  sortBy: string | null,
  sortOrder: string | null,
) => {
  if (sortBy !== label) {
    return (
      <div>
        <ChevronUp size={15} />
        <ChevronDown size={15} />
      </div>
    );
  } else {
    return sortOrder == "asc" ? (
      <div>
        <ChevronUp size={15} />
        <ChevronDown className="opacity-0" size={15} />
      </div>
    ) : sortOrder === "desc" ? (
      <div>
        <ChevronUp className="opacity-0" size={15} />
        <ChevronDown size={15} />
      </div>
    ) : null;
  }
};

export default SortableTable;
