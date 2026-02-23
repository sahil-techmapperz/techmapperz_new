"use client";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Progress from "./Progress";

export default function Controls({
  currentSliderData,
  data,
  transitionData,
  initData,
  handleData,
  handleTransitionData,
  handleCurrentSlideData,
  sliderData,
}) {
  const handlePrev = () => {
    handleData((prevData) => [
      transitionData ? transitionData : initData,
      ...prevData.slice(0, prevData.length - 1),
    ]);


    handleCurrentSlideData({
      data: transitionData ? transitionData : sliderData[0],
      index: sliderData && sliderData.findIndex(
        (ele) => ele.banner_img_url === data[data.length - 1].banner_img_url
      ),
    });

    handleTransitionData(data[data.length - 1]);
  };

  const handleNext = () => {
    handleData((prev) => prev.slice(1));
    handleCurrentSlideData({
      data: transitionData ? transitionData : initData,
      index: sliderData.findIndex((ele) => ele.banner_img_url === data[0].banner_img_url),
    });

    handleTransitionData(data[0]);
    setTimeout(() => {
      handleData((newData) => [
        ...newData,
        transitionData ? transitionData : initData,
      ]);
    }, 500);
  };

  return (
    <div className="flex items-center gap-3 px-0 py-3 md:px-1 md:py-5">
      <SliderButton handleClick={handlePrev}>
        <IoIosArrowBack className="text-xl" />
      </SliderButton>

      <SliderButton handleClick={handleNext}>
        <IoIosArrowForward className="text-xl" />
      </SliderButton>
      <Progress curIndex={currentSliderData?.index} length={sliderData?.length} />
    </div>
  );
}

const SliderButton = ({ children, handleClick }) => {
  return (
    <button
      onClick={handleClick}
      className="flex h-14 w-14 items-center justify-center rounded-full border-[1px] border-[#fdfdfd5f] transition duration-300 ease-in-out hover:bg-white hover:text-black"
    >
      {children}
    </button>
  );
};
