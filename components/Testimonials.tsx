import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Priya S.",
    text: "A truly amazing experience! The ambience, therapists and VIP suite are world-class.",
  },
  {
    name: "Arjun K.",
    text: "I felt completely relaxed and stress-free. Highly recommended for everyone.",
  },
  {
    name: "Meena R.",
    text: "One of the best reflexology centers in Chennai. Excellent service!",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[#fcfaf7] border-t border-[#e8e4d9] pt-[10px] pb-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-6">
          <h2 className="text-[#c9a84c] text-sm font-bold tracking-[0.15em] uppercase">
            WHAT OUR CLIENTS SAY
          </h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-[#f5f1e8] p-8 lg:p-10 rounded-lg relative flex flex-col items-center shadow-sm"
            >
              <div className="absolute top-5 left-5 text-[#c9a84c] font-serif text-5xl leading-none">
                “
              </div>
              
              <div className="flex gap-1 mb-5 mt-2">
                {[...Array(5)].map((_, idx) => (
                  <Star
                    key={idx}
                    size={16}
                    className="fill-[#c9a84c] text-[#c9a84c]"
                  />
                ))}
              </div>
              <p className="text-gray-800 text-[13px] sm:text-sm leading-relaxed text-center mb-4">
                "{t.text}"
              </p>
              <div className="text-gray-600 text-[13px] sm:text-sm">
                - {t.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
