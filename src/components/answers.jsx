import CustomAccordion from "./faq";
import "../index.css"; // add: global font import
export default function answers() {
  return (
    <section data-aos="fade-up" id="faq"  className="w-full pt-[10rem]">
      <div>
        <h2 className="text-[var(--main-gold)] text-[3rem] w-full text-center bilargy">
          Questions
        </h2>
      </div>
      <div className="qanswer w-full grid grid-cols-1 gap-[1rem]">
        <CustomAccordion index={0} />
        <CustomAccordion index={1} />
        <CustomAccordion index={2} />
        <CustomAccordion index={3} />
      </div>
    </section>
  );
}
