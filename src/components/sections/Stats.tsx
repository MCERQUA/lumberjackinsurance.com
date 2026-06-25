"use client";

const STAT_BAND = [
  { value: "20+", label: "Years of Experience" },
  { value: "5", label: "Coverage Lines" },
  { value: "AZ", label: "Licensed & Local" },
  { value: "1", label: "Local Agent, All Lines" },
];

export function Stats() {
  return (
    <section className="bg-[#0F1C38] py-12">
      <div className="container-wide">
        <h2 className="mb-10 text-center font-display text-2xl font-bold uppercase text-white">
          Built On A Solid Foundation
        </h2>
        <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
          {STAT_BAND.map((s) => (
            <div key={s.label}>
              <p className="font-display text-5xl font-extrabold text-[#E8B923]">{s.value}</p>
              <p className="mt-2 font-display text-sm font-semibold uppercase tracking-wider text-white/70">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
