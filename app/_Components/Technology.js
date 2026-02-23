import LatestTechStack from "./LatestTechStack";


const Technology = () => {
  return (
    <section className="bg-white text-black py-8 px-[4rem] max-sm:px-2 max-sm:py-2 relative">
      <div className="w-full max-w-[1600px] mx-auto flex flex-col items-center">
        <div className="flex flex-col items-center">
          <h1
            className="text-black text-center  max-sm:w-full max-sm:text-[16px] font-semibold text-3xl mb-6 max-sm:mt-5tracking-wide leading-snug bg-clip-text drop-shadow-md"
          >
            Technology
          </h1>
        </div>

        <div className="w-full">
          <LatestTechStack />
        </div>
      </div>
    </section>
  );
};

export default Technology;
