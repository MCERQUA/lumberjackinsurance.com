import Link from "next/link";

export function Hero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse at 60% 40%, #1B3A6B 0%, #0F1C38 60%)",
      }}
    >
      <div className="container-wide py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 items-center min-h-[520px]">
          {/* Left — text */}
          <div>
            <img
              src="/images/lumberjack-logo.png"
              alt="Lumberjack Insurance"
              className="h-24 w-auto mb-6"
            />

            <h1 className="font-display font-bold text-5xl lg:text-7xl uppercase leading-none">
              <span className="block text-white">Strong Protection.</span>
              <span className="block text-[#E8B923]">Solid Coverage.</span>
            </h1>

            <p className="mt-4 max-w-md text-lg text-white/70">
              LumberJack Insurance delivers reliable coverage and hometown
              service you can count on.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link href="/quote" className="btn-primary">
                Get a Quote
              </Link>
              <Link href="/services" className="btn-secondary">
                Our Coverages
              </Link>
            </div>
          </div>

          {/* Right — mascot */}
          <div className="relative flex justify-center lg:justify-end">
            <img
              src="/images/lumberjack-clipped.png"
              alt="Lumberjack mascot"
              className="w-full max-w-md drop-shadow-2xl lg:-mt-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
