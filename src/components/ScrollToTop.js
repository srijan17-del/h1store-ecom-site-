import React, { useEffect, useState } from "react";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";

const ScrollToTop = () => {
  const [show, setShow] = useState(false);

  const scrollToTopbtn = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behaviour: "smooth",
    });
  };

  const checkScrollBtn = () => {
    let scrollBtnPopup = 800;

    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > scrollBtnPopup) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrollBtn);
    return () => {
      window.removeEventListener("scroll", checkScrollBtn);
    };
  }, []);
  return (
    show && (
      <div
        className="scroll-top-btn w-11 h-11 bg-white cursor-pointer rounded-full fixed z-30 -right-0 bottom-12 border-[1px] border-solid border-black flex justify-center items-center
        hover:bg-gray-400 hover:text-white hover:border-white duration-300"
        onClick={scrollToTopbtn}
      >
        <div>
          <MdOutlineKeyboardArrowUp size={"1.5rem"} />
        </div>
      </div>
    )
  );
};

export default ScrollToTop;
