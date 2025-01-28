import Accordion from "../components/Accordion";
function AccordionPage() {
  const items = [
    {
      id: "dk39j",
      label: "Lorem ipsum dolor amet adipisicing?",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel veritatis veniam psum dolor sit amet consectetur adipisicing elit. Vel veritatis veniam quaerat nemo rem similique expedita omnis beatae cum dolorel quaerat nemo rem similique expedita omnis beatae cum dolorelo",
    },
    {
      id: "dkjeh9e8",
      label: "Lorem, ipsum dolor?",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel veritatis psum dolor sit amet consectetur adipisicing elit. Vel veritatis veniam quaerat nemo rem similique expedita omnis beatae cum dolorel veniam quaerat nemo rem similique expedita omnis beatae cum dolore.",
    },
    {
      id: "dje37940",
      label: "Sit amet consectetur adipisicing?",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel veritatis veniam quaerat nemo rem similique expedita psum dolor sit amet consectetur adipisicing elit. Vel veritatis veniam quaerat nemo rem similique expedita omnis beatae cum dolorel omnis beatae cum dolore.",
    },
  ];
  return (
    <div>
      <Accordion items={items} />
    </div>
  );
}

export default AccordionPage;
