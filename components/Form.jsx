"use client";

import { Fade } from "react-awesome-reveal";

import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import {
  UserCheck,
  ArrowRightIcon,
  MessageSquare,
  UserRoundCheck,
  Building,
} from "lucide-react";

const Form = () => {
  return (
    <form className="flex flex-col gap-y-4">
      <Fade
        direction="right"
        delay={400}
        cascade
        damping={1e-1}
        triggerOnce={true}
      >
        <div className="relative flex items-center">
          <Input type="name" id="first-name" placeholder="First Name" />
          <UserCheck className="absolute right-6" size={20} />
        </div>
      </Fade>

      <Fade
        direction="right"
        delay={600}
        cascade
        damping={1e-1}
        triggerOnce={true}
      >
        <div className="relative flex items-center">
          <Input type="name" id="last-name" placeholder="Last Name" />
          <UserRoundCheck className="absolute right-6" size={20} />
        </div>
      </Fade>

      <Fade
        direction="right"
        delay={800}
        cascade
        damping={1e-1}
        triggerOnce={true}
      >
        <div className="relative flex items-center">
          <Input type="email" id="email" placeholder="Email" />
          <Building className="absolute right-6" size={20} />
        </div>
      </Fade>

      <Fade
        direction="right"
        delay={1000}
        cascade
        damping={1e-1}
        triggerOnce={true}
      >
        <div className="relative flex items-center">
          <Textarea placeholder="Type your message here..." />
          <MessageSquare className="absolute top-4 right-6" size={20} />
        </div>
      </Fade>

      <Fade
        direction="right"
        delay={1200}
        cascade
        damping={1e-1}
        triggerOnce={true}
      >
        <Button className="flex items-center gap-x-1 max-w-[165px]">
          Let's Talk
          <ArrowRightIcon size={20} />
        </Button>
      </Fade>
    </form>
  );
};

export default Form;
