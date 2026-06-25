import { Home, Car, Building2, Wheat, Users } from "lucide-react";

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
          {COVERAGES.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2">
              <Icon className="h-5 w-5 text-[#E8B923]" />
              <span className="font-display font-bold text-white text-sm uppercase tracking-wider">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
