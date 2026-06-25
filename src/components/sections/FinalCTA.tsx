import Link from "next/link";

const NEWS = [
  { title: "Spring Storms: Is Your Home Protected?", date: "May 1, 2025" },
  { title: "5 Insurance Tips for New Homeowners", date: "April 15, 2025" },
  { title: "We Support Local Youth Sports!", date: "April 1, 2025" },
];

export function FinalCTA() {
  return (
    <section className="grid md:grid-cols-5">
      {/* Left column — Community / Sports */}
      <div
        className="md:col-span-3 p-12 min-h-[320px] flex flex-col justify-center"
        style={{ background: "linear-gradient(135deg, #0F1C38 0%, #1B2A4A 100%)" }}
      >
        <h2 className="font-display font-extrabold uppercase text-4xl text-[#E8B923] leading-tight">
          Community.
          <br />
          Teamwork.
          <br />
          Trust.
        </h2>
        <p className="mt-4 max-w-sm font-body text-base text-white/80">
          We believe in hard work, doing things right, and standing by our customers—just
          like a team.
        </p>
        <Link
          href="/about"
          className="mt-6 inline-flex w-fit border-2 border-white text-white px-6 py-3 font-display font-bold uppercase text-sm hover:bg-white hover:text-[#0F1C38] transition"
        >
          See How We Give Back
        </Link>
      </div>

      {/* Right column — Latest News */}
      <div className="md:col-span-2 p-8 bg-[#F4F4F4]">
        <h3 className="font-display font-extrabold uppercase text-xl text-[#0F1C38] tracking-wider">
          Latest News
        </h3>
        <div className="w-12 h-1 bg-[#E8B923] mt-2 mb-4" />

        <ul className="space-y-5">
          {NEWS.map((item) => (
            <li key={item.title}>
              <Link
                href="/blog"
                className="font-display font-semibold text-[#0F1C38] hover:text-[#E8B923] transition"
              >
                {item.title}
              </Link>
              <p className="mt-1 font-display text-xs uppercase text-[#E8B923]">{item.date}</p>
            </li>
          ))}
        </ul>

        <Link
          href="/blog"
          className="mt-6 inline-block border-2 border-[#0F1C38] text-[#0F1C38] px-6 py-3 font-display font-bold uppercase text-sm hover:bg-[#0F1C38] hover:text-white transition"
        >
          View All Articles
        </Link>
      </div>
    </section>
  );
}
