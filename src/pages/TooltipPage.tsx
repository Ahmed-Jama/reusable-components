import Tooltip from "@/components/Tooltip";
import Button from "@/components/Button";

const TooltipPage = () => {
  return (
    <div>
      <Tooltip content="tooltip" place="bottom">
        <Button warning>home</Button>
      </Tooltip>
    </div>
  );
};

export default TooltipPage;
