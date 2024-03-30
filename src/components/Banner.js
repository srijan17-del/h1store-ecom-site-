import React from "react";
import { PiArrowRightDuotone, PiArrowLeftDuotone } from "react-icons/pi";
import { useState } from "react";

const Banner = () => {
  //Slide change onclick event
  const [currSlide, setCurrSlide] = useState(0);

  const leftSlide = () => {
    setCurrSlide(currSlide === 0 ? 3 : (prev) => prev - 1);
  };
  const rightSlide = () => {
    setCurrSlide(currSlide === 3 ? 0 : (prev) => prev + 1);
  };

  const bannerImages = [
    "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L3Vwd2s2MTg0MzExOC13aWtpbWVkaWEtaW1hZ2Uta293YzVmbDcuanBn.jpg",
    "https://c1.wallpaperflare.com/preview/573/909/315/store-clothes-clothing-line.jpg",
    "https://img.freepik.com/free-photo/shop-clothing-clothes-shop-hanger-modern-shop-boutique_1150-8886.jpg?w=826&t=st=1710138986~exp=1710139586~hmac=9c55ce4be20088703382ec7570a24d5569bdf0266fb06e35d3c04d8056c1cb68",
    "https://wallpapers.com/images/high/clothes-background-kkvrjt63nhw27i93.webp",
  ];
  return (
    <div className="w-full h-auto overflow-hidden">
      <div className="w-screen h-[580px] relative">
        <div
          style={{ transform: `translate(-${currSlide * 100}vw)` }}
          className="w-[398vw] flex transition-transform duration-500 "
        >
          <img
            className="w-screen h-auto "
            Loading="priority"
            src={bannerImages[0]}
            alt="bannerImage0"
          ></img>
          <img
            className="w-screen h-auto "
            src={bannerImages[1]}
            alt="bannerImage1"
          ></img>
          <img
            className="w-screen h-auto "
            src={bannerImages[2]}
            alt="bannerImage2"
          ></img>
          <img
            className="w-screen h-auto "
            src={bannerImages[3]}
            alt="bannerImage3"
          ></img>
        </div>
        <div className="absolute w-fit flex mx-auto left-0 right-0 gap-16 bottom-9">
          <div
            onClick={leftSlide}
            className="text-teal-400 border-[1px] w-10 h-10 flex justify-center items-center hover:bg-slate-300 hover:text-black active:-translate-x-1 active:bg-gray-600 duration-300"
          >
            <PiArrowLeftDuotone></PiArrowLeftDuotone>
          </div>
          <div
            onClick={rightSlide}
            className="text-teal-400 border-[1px] w-10 h-10 flex justify-center items-center hover:bg-slate-300 hover:text-black active:translate-x-1 active:bg-gray-600 duration-300"
          >
            <PiArrowRightDuotone></PiArrowRightDuotone>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
