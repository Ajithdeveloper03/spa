export default function ExperienceTogether() {
  return (
    <section className="relative w-full bg-fixed bg-cover bg-center overflow-hidden" style={{ backgroundImage: "url('./vip.png')" }}>
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/75"></div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-12">
          
          {/* Left Content */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center py-10 lg:py-16">
            {/* Top Label */}
            <div className="inline-flex border border-[#c9a84c] rounded-full px-5 py-1.5 mb-6 self-start">
              <span className="text-[#c9a84c] text-[11px] font-bold tracking-[0.2em] uppercase">
                WELLNESS SUITES
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-[1.15]">
              Experience Wellness Together
            </h2>
            
            <p className="text-gray-300 text-[16px] md:text-[17px] leading-relaxed max-w-xl font-medium">
              Share the gift of relaxation with someone special in our elegant Couples Therapy Suite, or enjoy complete privacy and personalized comfort in our Premium Therapy Suite. Whether you're visiting alone, with a partner, or with family, every guest receives attentive care in a peaceful and welcoming setting.
            </p>
          </div>

          {/* Right Video Section */}
          <div className="w-full lg:w-1/2 flex items-center justify-center lg:justify-end pb-10 lg:pb-0">
            <div className="relative w-full max-w-[600px] aspect-video bg-black/50 rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
              <video 
                className="absolute top-0 left-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                autoPlay
                muted
                loop
                playsInline
                controls
              >
                <source src="/foot%201.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
