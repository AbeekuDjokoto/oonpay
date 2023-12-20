import React from "react";
import Accordion from "../accordion/accordion";

export default function Faqs() {
  return (
    <div>
      <h1 className="text-4xl max-sm:text-[28px] mx-auto tracking-[-1.1px] font-medium leading-[110%] text-center text-[#151515] max-w-[600px] w-full mb-5">
        Frequently asked Questions
      </h1>
      <Accordion />
    </div>
  );
}
