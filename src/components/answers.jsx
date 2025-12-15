import CustomAccordion from "./faq";
import "../index.css"; // add: global font import
export default function answers() {
  return (
    <section data-aos="fade-up" id="faq"  className="w-full pb-[10rem] px-[8rem]">
      <div>
        <h2 className="text-[var(--main-gold)] text-[3rem] w-full text-center bilargy">
          Questions
        </h2>
      </div>
      <div className="qanswer w-full flex justify-center flex-wrap gap-[1rem]">
        <CustomAccordion index={0} />
        <CustomAccordion index={1} />
        <CustomAccordion index={2} />
        <CustomAccordion index={3} />
      </div>
    </section>
  );
}
