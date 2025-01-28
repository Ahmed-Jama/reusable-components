import Button from "../components/Button";
import {
  Twitch,
  Youtube,
  Twitter,
  Instagram,
  Github,
  Linkedin,
} from "lucide-react";

function ButtonPage() {
  return (
    <div className="flex flex-col items-center gap-8 py-2">
      <div className="grid grid-cols-3 gap-4 border-b-2 border-slate-500 pb-5">
        <Button>Default</Button>
        <Button primary>Primary</Button>
        <Button secondary>Secondary</Button>
        <Button success>Success</Button>
        <Button warning>Warning</Button>
        <Button danger>Danger</Button>
      </div>
      <div className="grid grid-cols-3 gap-4 border-b-2 border-slate-500 pb-5">
        <Button outline>Default Outline</Button>
        <Button primary outline>
          Primary Outline
        </Button>
        <Button secondary outline>
          Secondary Outline
        </Button>
        <Button success outline>
          Success Outline
        </Button>
        <Button warning outline>
          Warning Outline
        </Button>
        <Button danger outline>
          Danger Outline
        </Button>
      </div>
      <div className="grid grid-cols-3 gap-4 border-b-2 border-slate-500 pb-5">
        <Button rounded>Default Rounded</Button>
        <Button primary rounded>
          Primary Rounded
        </Button>
        <Button secondary rounded>
          Secondary Rounded
        </Button>
        <Button success rounded>
          Success Rounded
        </Button>
        <Button warning rounded>
          Warning Rounded
        </Button>
        <Button danger rounded>
          Danger Rounded
        </Button>
      </div>
      <div className="flex gap-4">
        <Button outline rounded>
          <Github />
        </Button>
        <Button primary outline rounded>
          <Twitter />
        </Button>
        <Button secondary outline rounded>
          <Twitch />
        </Button>
        <Button success outline rounded>
          <Instagram />
        </Button>
        <Button warning outline rounded>
          <Linkedin />
        </Button>
        <Button danger outline rounded>
          <Youtube />
        </Button>
      </div>
    </div>
  );
}

export default ButtonPage;
