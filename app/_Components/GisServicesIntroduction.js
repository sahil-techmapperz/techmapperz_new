import React from "react";

const GisServicesIntroduction = ({ GisMappingIntrouctiondata }) => {
    return (
        <div className="w-full max-w-[1600px] mx-auto">
            {GisMappingIntrouctiondata.map((item, index) => (
                <p
                    key={index}
                    className="text-center text-white text-[18px] max-sm:text-[16px] max-sm:text-justify"
                >
                    {item.title}
                </p>
            ))}
        </div>
    );
};

export default GisServicesIntroduction;
