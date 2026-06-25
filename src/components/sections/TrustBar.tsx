import { Home, Car, Building2, Wheat, Users } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";

const COVERAGES = [
  { icon: Home, label: "HOME INSURANCE" },
  { icon: Car, label: "AUTO INSURANCE" },
  { icon: Building2, label: "BUSINESS INSURANCE" },
  { icon: Wheat, label: "FARM & RANCH" },
  { icon: Users, label: "LIFE INSURANCE" },
];

export function TrustBar() {
  return (
    <section className="bg-[#0F1C38] py-4 border-y-2 border-[#E8B923]">
      <div className="container-wide">
        <div className="flex flex-wrap justify-center sm:justify-evenly gap-x-6 gap-y-3">
          {COVERAGES.map(({ icon: Icon, label }, i) => (
            <FadeIn key={label} delay={i * 0.08} direction="up">
              <div className="group flex cursor-default items-center gap-2 transition duration-300 hover:-translate-y-0.5 hover:scale-110">
                <Icon className="h-5 w-5 text-[#E8B923] transition duration-300 group-hover:scale-125 group-hover:text-[#FFD34D]" />
                <span className="font-display text-sm font-bold uppercase tracking-wider text-white transition duration-300 group-hover:text-[#E8B923]">
                  {label}
                </span>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
