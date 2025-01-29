import ButtonPage from "./pages/ButtonPage";
import AccordionPage from "./pages/AccordionPage";
import DropdownPage from "./pages/DropdownPage";
import Route from "./components/Route";
import Sidebar from "./components/Sidebar";
import ModalPage from "./pages/ModalPage";
import TablePage from "./pages/TablePage";
import TooltipPage from "./pages/TooltipPage";

// ToDo add a tooltip reuseable component
function App() {
  return (
    <div className="flex w-full">
      <Sidebar />
      <div className="ml-[clamp(50px,30%,192px)] h-screen flex-1 p-3">
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
        <Route path="/tooltip">
          <TooltipPage />
        </Route>
      </div>
    </div>
  );
}

export default App;
