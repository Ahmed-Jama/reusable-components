import Tooltip from "@/components/Tooltip";
import Button from "@/components/Button";
import { Github, Twitter, Twitch, Instagram, Youtube } from "lucide-react";

const TooltipPage = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <h1 className="p-2 text-xl font-semibold">Follow on social media</h1>
      <div className="flex gap-4">
        {/* Default place = 'top' */}
        <Tooltip content="Github" place="left">
          <Button outline rounded>
            <Github />
          </Button>
        </Tooltip>
        <Tooltip content="Twitter">
          <Button primary outline rounded>
            <Twitter />
          </Button>
        </Tooltip>
        <Tooltip content="Twitch" place="bottom">
          <Button secondary outline rounded>
            <Twitch />
          </Button>
        </Tooltip>
        <Tooltip content="Instagram">
          <Button success outline rounded>
            <Instagram />
          </Button>
        </Tooltip>
        <Tooltip content="Youtube" place="right">
          <Button danger outline rounded>
            <Youtube />
          </Button>
        </Tooltip>
      </div>
    </div>
  );
};

export default TooltipPage;
