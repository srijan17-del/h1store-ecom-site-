import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/h1storeSlice";
import { ToastContainer, toast } from "react-toastify";
const ProductDetail = () => {
  const dispatch = useDispatch();
  const [details, setDetails] = useState({});
  const [baseQnty, setBaseQnty] = useState(1);
  const Location = useLocation();

  useEffect(() => {
    setDetails(Location.state.item);
  }, []);

  console.log(details);
  return (
    <div>
      <div className="max-w-screen-xl py-8 flex mx-auto">
        <div className="relative w-2/5">
          <img
            className="w-full h-[30rem] object-cover "
            src={details.image}
            alt="imageDetails"
          ></img>
          <div className="absolute -top-2 -right-2 ">
            {details.isNew && (
              <p className=" bg-black text-white py-1 px-5 font-medium ">
                Sale
              </p>
            )}
          </div>
        </div>
        <div className="my-7 w-3/5  bg-gray-300 ">
          <div className=" ml-9 mt-20">
            <h1 className=" text-4xl font-semibold font-serif">
              {details.title}
            </h1>
          </div>
          <div className="ml-9 mt-5 flex gap-4">
            <p className="font-light font-serif text-lg line-through">
              ₹{details.oldPrice}
            </p>
            <p className="font-semibold font-serif text-2xl">
              ₹{details.price}
            </p>
          </div>
          <div className="ml-9 mt-5 flex gap-2">
            <div className="flex gap-2 items-center">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>

            <div>
              <p className="font-light">1(customer review)</p>
            </div>
          </div>
          <p className="ml-9 mt-5 font-light ">{details.description}</p>
          <div className="flex gap-4 items-center">
            <div className="ml-9 mt-5 flex justify-between gap-4 border-[1.6px] w-52 py-3 px-2 items-center  ">
              <p className="font-[320] tracking-wide ">Quantity</p>
              <div className="flex gap-5 font-semibold">
                <button
                  onClick={() =>
                    setBaseQnty(baseQnty === 1 ? baseQnty : baseQnty - 1)
                  }
                  className="border-[1.6px] w-7 hover:bg-white active:bg-black active:text-white duration-300 shadow-md"
                >
                  -
                </button>
                <span>{baseQnty}</span>
                <button
                  onClick={() => setBaseQnty(baseQnty + 1)}
                  className="border-[1.6px] w-7  hover:bg-white active:bg-black active:text-white duration-300 shadow-md "
                >
                  +
                </button>
              </div>
            </div>
            <div
              onClick={() =>
                dispatch(
                  addToCart({
                    _id: details._id,
                    title: details.title,
                    image: details.image,
                    price: details.price,
                    quantity: baseQnty,
                    description: details.description,
                  })
                ) & toast.success(`added ${details.title}`)
              }
              className="mt-5 h-[53.9px] py-3 border bg-black text-white w-28 text-center cursor-pointer hover:bg-gray-900 active:bg-gray-600 shadow-md"
            >
              <p className="tracking-wide font-[280]">add to cart</p>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-left"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
    </div>
  );
};

export default ProductDetail;
