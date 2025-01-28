import SortableTable from "@/components/SortableTable";
import Table from "@/components/Table";

const TablePage = () => {
  type Fruit = {
    name: string;
    color: string;
    score: number;
  };
  const data = [
    { name: "Orange", color: "bg-orange-500", score: 3 },
    { name: "Apple", color: "bg-red-500", score: 5 },
    { name: "Banana", color: "bg-yellow-400", score: 8 },
    { name: "Lime", color: "bg-lime-500", score: 4 },
  ];

  const students = [
    { name: "Khalid", age: 45 },
    { name: "Omar", age: 35 },
    { name: "Ali", age: 30 },
    { name: "Sara", age: 40 },
    { name: "Ahmed", age: 35 },
  ];

  const studentsConfig = [
    {
      label: "Name",
      render: (student: { name: string; age: number }) => student.name,
      sortValue: (student: { name: string; age: number }) => student.name,
    },
    {
      label: "Age",
      render: (student: { name: string; age: number }) => student.age,
      sortValue: (student: { name: string; age: number }) => student.age,
    },
  ];

  const config = [
    {
      label: "Name",
      render: (fruit: Fruit) => fruit.name,
      sortValue: (fruit: Fruit) => fruit.name,
    },
    {
      label: "Color",
      render: (fruit: Fruit) => (
        <div className={`h-6 w-6 rounded-lg ${fruit.color}`} />
      ),
    },
    {
      label: "Score",
      render: (fruit: Fruit) => fruit.score,
      // header: () => <th className="bg-blue-500">Score</th>,
      //! sortable table will define the header
      sortValue: (fruit: Fruit) => fruit.score,
    },
  ];

  return (
    <div>
      <SortableTable data={data} config={config} />
      <SortableTable data={students} config={studentsConfig} />
    </div>
  );
};

export default TablePage;
