"use client";

const STEPS = [
  {
    num: "01",
    title: "CALL OR CLICK",
    description: "Get in touch in minutes. We shop multiple carriers for you.",
  },
  {
    num: "02",
    title: "GET YOUR QUOTE",
    description: "Compare options with no pressure. We explain every detail clearly.",
  },
  {
    num: "03",
    title: "YOU'RE COVERED",
    description: "Fast binding, local support, and real people when you need to file a claim.",
  },
];

export function Process() {
  return (
    <section id="process" className="bg-[#F4F4F4] py-20">
      <div className="container-wide">
        <h2 className="text-center font-display text-4xl font-extrabold uppercase text-[#0F1C38]">
          Getting Covered Is Easy
        </h2>
        <div className="mt-12 grid gap-10 md:grid-cols-3">
          {STEPS.map((step) => (
            <div key={step.num} className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#E8B923]">
                <span className="font-display text-2xl font-extrabold text-[#0F1C38]">
                  {step.num}
                </span>
              </div>
              <h3 className="mt-5 font-display text-lg font-bold uppercase text-[#0F1C38]">
                {step.title}
              </h3>
              <p className="mt-2 font-body text-sm leading-relaxed text-gray-500">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
