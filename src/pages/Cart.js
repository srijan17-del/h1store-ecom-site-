import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CartItems from "../components/CartItems";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const productData = useSelector((state) => state.h1store.productData);
  const userInfo = useSelector((state) => state.h1store.userInfo);
  const [payNow, setPayNow] = useState(false);
  const navigate = useNavigate();
  const [totalAmount, setTotalAmount] = useState("");
  useEffect(() => {
    let price = 0;
    productData.map((item) => {
      price += item.price * item.quantity;
      return price;
    });
    setTotalAmount(price);
  }, [productData]);

  const handleCheckout = () => {
    if (userInfo) {
      setPayNow(true);
    } else {
      setPayNow(false);
      toast.error("please sign in to pay");
      setTimeout(() => {
        navigate("/Login");
      }, 1500);
    }
  };
  return (
    <div>
      <div className="flex">
        <CartItems></CartItems>
        <div className="shadow-sm w-1/3  bg-gray-200 px-4 py-6 mr-20 my-6 flex flex-col gap-7">
          <h1 className="font-serif text-2xl text-nowrap">Cart Totals:</h1>
          <div className="flex gap-4">
            <p className="font-serif font-normal text-nowrap tracking-wider">
              Subtotal
            </p>
            <p className="font-mono font-medium tracking-wide">
              ₹ {totalAmount}
            </p>
          </div>
          <div className="flex gap-4">
            <p className="font-serif font-normal text-nowrap tracking-wider">
              Shipping
            </p>
            <p className=" font-normal text-nowrap tracking-wide">
              Lorem ipsum Lorem
            </p>
          </div>
          <div className="border-[1px] border-gray-400 w-[25rem] mx-auto"></div>
          <div className="flex justify-between">
            <p className="font-serif tracking-wider">Total</p>
            <span className="font-mono tracking-wide font-medium">
              ₹ {totalAmount}
            </span>
          </div>
          <div
            onClick={handleCheckout}
            className=" w-[25rem] bg-black text-center flex justify-center items-center "
          >
            <p className="font-mono tracking-wide text-slate-50  w-[25rem] py-2 text-xl cursor-pointer hover:bg-slate-400 active:bg-white active:text-black shadow-md duration-300">
              Proceed to Checkout
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
