export default function ExperienceTogether() {
  return (
    <section className="bg-[#fcfaf7] pt-[10px] pb-[20px]">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row-reverse bg-[#fcfaf7]">
          {/* Image */}
          <div className="lg:w-[35%] w-full h-[300px] lg:h-auto relative overflow-hidden rounded-l-[8rem]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="./vip.png"
              alt="Experience Wellness Together"
              className="w-full h-full object-cover lg:absolute lg:inset-0"
            />
          </div>

          {/* Content */}
          <div className="lg:w-[65%] w-full flex items-center p-4">
            <div className="flex flex-col xl:flex-row w-full gap-6 lg:gap-10 items-start xl:items-center justify-between px-4 lg:pr-10">
              {/* Text block */}
              <div className="flex-1 max-w-2xl">
                <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-serif text-[#1a1a1a] mb-6 leading-tight">
                  Experience Wellness Together
                </h2>
                <p className="text-gray-600 text-[15px] leading-relaxed mb-6">
                  Share the gift of relaxation with someone special in our elegant Couples Therapy Suite, or enjoy complete privacy and personalized comfort in our Premium Therapy Suite. Whether you're visiting alone, with a partner, or with family, every guest receives attentive care in a peaceful and welcoming setting.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
