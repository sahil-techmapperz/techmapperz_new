"use client";
import SliderCard from "./SliderCard";

export default function Slides({ data }) {
  return (
    <div className="flex w-full gap-6">
      {data?.map((item) => {
        return <SliderCard key={item.banner_img_url} data={item} />;
      })}
    </div>
  );
}
