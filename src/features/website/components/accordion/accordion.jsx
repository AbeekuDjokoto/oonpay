import React from "react";
import { Expandable } from "../Expandable";
import styles from "./base.module.scss";
import XIcon from "../../../../assets/icons/xicon.svg";
import PlusIcon from "../../../../assets/icons/plusicon.svg";
import { accordionData } from "./mock";
import { AnimatedSection } from "../AnimateSection";

export default function Accordion() {
  const AccordionItem = ({ accordionData }) => {
    const [openAccordionId, setOpenAccordionId] = React.useState("");

    const toggleAccordion = (id) => {
      if (openAccordionId === id) {
        setOpenAccordionId(null);
      } else {
        setOpenAccordionId(id);
      }
    };

    return (
      <div className="w-full mx-auto max-w-[712px]">
        <AnimatedSection>
          {accordionData.map((data) => (
            <div
              role="button"
              key={data.id}
              onClick={() => toggleAccordion(data.id)}
            >
              <div className={styles.accordionContainer}>
                <h3 className="text-sm leading-[150%]">{data.question}</h3>
                {openAccordionId === data.id ? (
                  <>
                    <img src={XIcon} alt="" />
                  </>
                ) : (
                  <>
                    <img src={PlusIcon} alt="" />
                  </>
                )}
              </div>
              <Expandable expand={openAccordionId === data.id}>
                <p
                  className="text-sm leading-[160%] font-normal"
                  style={{ color: "rgba(14, 30, 47, 0.8)" }}
                >
                  {data.content}
                </p>
              </Expandable>
            </div>
          ))}
        </AnimatedSection>
      </div>
    );
  };

  return <AccordionItem accordionData={accordionData} />;
}
