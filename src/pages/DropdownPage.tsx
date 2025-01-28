import Dropdown from "../components/Dropdown";
import { useState } from "react";

function DropdownPage() {
  const options = [
    { label: "Red", value: "red" },
    { label: "Blue", value: "blue" },
    { label: "Green", value: "green" },
  ];

  type Option = {
    label: string;
    value: string;
  };

  const [selection, setSelection] = useState<Option | null>(null);

  return (
    <div className="flex">
      <Dropdown
        options={options}
        onChange={(selected) => setSelection(selected)}
        value={selection}
      />
    </div>
  );
}

export default DropdownPage;
