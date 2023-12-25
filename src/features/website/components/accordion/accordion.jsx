import React from "react";
import { Expandable } from "../Expandable";
import styles from "./base.module.scss";
import PlusIcon from "../../../../assets/icons/arrow-down.svg";
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
              <div
                className={`${styles.accordionContainer} ${
                  openAccordionId === data.id ? styles.selected : ""
                }`}
              >
                <h3
                  className={`text-sm leading-[150%] text-[#333] ${
                    openAccordionId === data.id ? styles.selectedQuestion : ""
                  }`}
                >
                  {data.question}
                </h3>
                {openAccordionId === data.id ? (
                  <>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19.9181 8.94922L13.3981 15.4692C12.6281 16.2392 11.3681 16.2392 10.5981 15.4692L4.07812 8.94922"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </>
                ) : (
                  <>
                    <img src={PlusIcon} alt="" />
                  </>
                )}
              </div>
              <Expandable expand={openAccordionId === data.id}>
                <p
                  className="text-sm leading-[160%]"
                  style={{ color: "#505D69" }}
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
