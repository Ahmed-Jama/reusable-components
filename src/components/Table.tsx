import React, { Fragment } from "react";

type TableProps = {
  data: {}[];
  config: {
    label: string;
    render: (data: any) => any;
    header?: () => React.ReactNode;
  }[];
};
const Table: React.FC<TableProps> = ({ data, config }) => {
  return (
    <div className="m-auto max-w-xl rounded-md border border-black p-3">
      <table className="w-full table-auto text-left">
        <thead className="bg-gray-200">
          <tr className="">
            {config.map((column) => {
              if (column.header)
                return (
                  <Fragment key={column.label}>{column.header()}</Fragment>
                );
              // Lets you group elements without a wrapper node.
              else
                return (
                  <th className="py-2" key={column.label}>
                    {column.label}
                  </th>
                );
            })}
          </tr>
        </thead>
        <tbody>
          {data.map((value, i) => {
            //? Nested maps a little bit confusing
            return (
              <tr className="border-b align-baseline" key={i}>
                {config.map((item, i) => {
                  return (
                    <td className="px-2 py-3" key={i}>
                      {item.render(value)}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
