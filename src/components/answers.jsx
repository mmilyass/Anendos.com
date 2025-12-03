import CustomAccordion from "./faq";

export default function answers() {
  return (
    <section className="qanswer">
      <CustomAccordion index={0} />
      <CustomAccordion index={1} />
      <CustomAccordion index={2} />
      <CustomAccordion index={3} />
    </section>
  );
}
