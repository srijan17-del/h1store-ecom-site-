import React from "react";
import { Logo, Cart, UserLogo } from "../assets";
import Home from "../pages/Home";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
// import Products from "./Products";

function Header() {
  <Home />;
  const productData = useSelector((state) => state.h1store.productData);
  const userInfo = useSelector((state) => state.h1store.userInfo);
  // const quantity = useSelector((state) => state.h1store.quantity);
  console.log(userInfo);
  return (
    <div className="bg-white w-full h-28 border-b-[1px] border-b-gray-800 sticky -top-4 z-50">
      <div className="max-w-screen-xl h-full mx-auto flex items-center justify-between ">
        <Link to={"/"}>
          <div className="pl-12">
            <img className="h-36 w-36 " src={Logo} alt="Logo"></img>
          </div>
        </Link>

        <div className=" flex mr-3 pr-12 gap-7 items-center">
          <ul className="flex gap-7 items-center ">
            <Link to={"/"}>
              {" "}
              <li className="font-bold text-base hover:text-orange-600 hover:underline cursor-pointer duration-300">
                Home
              </li>
            </Link>
            <Link to={"/#products"}>
              <li
                // onClick={() => {
                //   productRef?.current.scrollIntoView({
                //     behaviour: "smooth",
                //   });
                // }}
                className="font-bold text-base hover:text-orange-600 hover:underline cursor-pointer duration-300"
              >
                Products
              </li>
            </Link>
            <Link to={"/About"}>
              <li className="font-bold text-base hover:text-orange-600 hover:underline cursor-pointer duration-300">
                About
              </li>
            </Link>

            <Link to={"Contact"}>
              <li className="font-bold text-base hover:text-orange-600 hover:underline cursor-pointer duration-300">
                Contact
              </li>
            </Link>
          </ul>
          <Link to="/cart">
            <div className=" ">
              <img
                className="absolute w-10 h-10 items-center gap-7 justify-between  hover:text-orange-600 hover:underline cursor-pointer"
                src={Cart}
                alt="Cart"
              ></img>
              <span
                className="ml-4 -bottom-[0.6rem]  font-semibold relative flex justify-center justify-items-center
            items-center text-center"
              >
                {productData.length}
              </span>
            </div>
          </Link>
          <Link to="/Login">
            <div className="flex gap-2 items-center">
              <img
                className="w-11 cursor-pointer ml-3 rounded-full "
                src={userInfo ? userInfo.image : UserLogo}
                alt="UserLogo"
              ></img>

              {userInfo && (
                <p className="-mr-4 font-medium cursor-pointer hover:underline duration-300 hover:text-gray-600">
                  {userInfo.name}
                </p>
              )}
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
