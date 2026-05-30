import LatestTechStack from "./LatestTechStack";

const Technology = () => {
  return (
    <section className="relative py-20 bg-[#020617] overflow-hidden border-t border-white/5">
      {/* Background glow effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#376bab]/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#d2292b]/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 lg:px-12 max-w-[1400px] relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-4">
            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#4a8cd4] to-[#ff4747]"></span>
            <span className="text-sm font-medium tracking-wide text-gray-300">OUR EXPERTISE</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Cutting-Edge <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4a8cd4] to-[#ff4747]">Technology Stack</span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-lg md:text-xl font-light">
            We leverage the latest frameworks and tools to build robust, scalable, and secure digital solutions.
          </p>
        </div>

        <div className="w-full">
          <LatestTechStack />
        </div>
      </div>
    </section>
  );
};

export default Technology;
