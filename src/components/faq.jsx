// "use client";
import { useState } from "react";
import ChevronDown from "../assets/chevrondown.png";

const DEFAULT_ITEMS = [
  {
    question: "What types of professional services do you offer?",
    answer:
      "We offer a comprehensive suite of professional services including strategic consulting, custom software development, data analytics, and digital transformation solutions tailored to meet your business objectives.",
  },
  {
    question: "How do you ensure the quality of your deliverables?",
    answer:
      "Our commitment to quality is upheld through a rigorous process that includes detailed project planning, continuous quality assurance testing, and regular client feedback loops to ensure every deliverable meets our high standards.",
  },
  {
    question: "Can you accommodate projects of different sizes?",
    answer:
      "Yes, our flexible service model is designed to support projects of all sizes, from small-scale engagements to large enterprise-level initiatives. We scale our teams and resources to align with your specific needs.",
  },
  {
    question: "What is your approach to client collaboration?",
    answer:
      "We believe in a highly collaborative approach. We work closely with your team, providing transparent communication and regular updates to ensure we are always aligned with your vision and goals. We use agile methodologies to adapt to your needs.",
  },
  {
    question: "How do you handle project timelines and deadlines?",
    answer:
      "We utilize a disciplined project management framework to set realistic timelines and track progress. Our project managers work diligently to mitigate risks and keep projects on schedule, ensuring key deadlines are met without compromising on quality.",
  },
  {
    question: "What is the typical process for starting a new project?",
    answer:
      "The process begins with an initial consultation to understand your needs. Following that, we conduct a detailed discovery phase, develop a tailored proposal, and upon agreement, we assemble a dedicated team to kick off the project and begin execution.",
  },
];

// Custom Accordion Component
export default function CustomAccordion({ index }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      key={index}
      className={`bg-white dark:bg-neutral-800 rounded-[1rem] border transition-all duration-200 overflow-hidden w-[100%]
        ${isOpen ? "bg-[(var(--main-gold)),1)] " : ""}`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`text-[white] border-0 w-full h-[6rem] rounded-t-[1rem] font-bold hover:text-[var(--main-gold)] bg-[rgba(240,240,240,0.15)] transition-colors duration-200 flex justify-between items-center px-[5rem]       }`}
      >
        <span
          className={`text-base sm:text-lg leading-snug pr-4 text-[1.4rem] text-bold ${
            isOpen ? "text-[var(--main-gold)]" : ""
          }`}
        >
          {DEFAULT_ITEMS[index].question}
        </span>
        <img
          src={ChevronDown}
          className={`h-[1rem] w-[1rem] transition-transform duration-200 flex-shrink-0 ${
            isOpen ? "transform rotate-180" : ""
          }`}
        />
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out${
          isOpen
            ? "opacity-100 bg-[rgba(240,240,240,0.15)] px-[5rem] pb-[2rem]"
            : "h-0 opacity-0 hidden"
        }`}
      >
        <div className="px-6 pb-6 pt-2 opacity-55 leading-relaxed">
          <div className="text-sm sm:text-base text-[white] leading-[2]">
            {DEFAULT_ITEMS[index].answer}
          </div>
        </div>
      </div>
    </div>
  );
}
