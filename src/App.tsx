import ButtonPage from "./pages/ButtonPage";
import AccordionPage from "./pages/AccordionPage";
import DropdownPage from "./pages/DropdownPage";
import Route from "./components/Route";
import Sidebar from "./components/Sidebar";
import ModalPage from "./pages/ModalPage";
import TablePage from "./pages/TablePage";

function App() {
  // SORTING OBJECTS

  // const data = [
  //   { name: "Khalid", age: 45 },
  //   { name: "Omar", age: 35 },
  //   { name: "Ali", age: 30 },
  //   { name: "Sara", age: 40 },
  //   { name: "Ahmed", age: 35 },
  // ];

  // const getSortValue: (val: {
  //   name: string;
  //   age: number;
  // }) => string | number = (val: { name: string; age: number }) => {
  //   return val.age;
  // };

  // const sortOrder = "asc";

  // const sortedData = data.sort((a, b) => {
  //   const valueA = getSortValue(a);
  //   const valueB = getSortValue(b);

  //   const reverseOrder = sortOrder === "asc" ? 1 : -1;

  //   if (typeof valueA === "string")
  //     return valueA.localeCompare(valueB as string) * reverseOrder;
  //   else return (valueA - (valueB as number)) * reverseOrder;
  // });

  // console.log(sortedData);

  return (
    <div className="flex w-full">
      <Sidebar />
      <div className="h-screen flex-1 p-3 pl-40">
        <Route path="/">
          <DropdownPage />
        </Route>
        <Route path="/accordion">
          <AccordionPage />
        </Route>
        <Route path="/button">
          <ButtonPage />
        </Route>
        <Route path="/modal">
          <ModalPage />
        </Route>
        <Route path="/table">
          <TablePage />
        </Route>
      </div>
    </div>
  );
}

export default App;
