import React from "react";
import { FaCartPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/h1storeSlice";
import { ToastContainer, toast } from "react-toastify";

const ProductCards = ({ cards }) => {
  const dispatch = useDispatch();
  // This is how to useNavigate
  const navigate = useNavigate();
  const id = cards.title;
  const idString = (id) => {
    return id.toLowerCase().split(" ").join("");
  };
  const rootId = idString(id);
  // console.log(rootId);

  const handleDetails = () => {
    navigate(`/product/${rootId}`, {
      state: {
        item: cards,
      },
    });
  };

  return (
    <div className="group relative">
      <div onClick={handleDetails} className="  w-full h-96 overflow-hidden">
        <img
          className="w-full h-full object-cover group-hover:scale-110 duration-300"
          src={cards.image}
          alt="cardImage"
        ></img>
      </div>
      <div className="overflow-hidden border-[1px] px-2 py-4">
        <div className="flex justify-between">
          <div>
            <h1 className="font-medium font-serif ">{cards.title}</h1>
          </div>
          {/* slide animation */}
          <div className="relative flex gap-6   overflow-hidden ">
            <div className="group-hover:translate-x-12 transform duration-300">
              <h1 className="line-through font-light">₹{cards.oldPrice}</h1>
              <h1 className="font-medium">₹{cards.price}</h1>
            </div>
            <span
              onClick={() =>
                dispatch(
                  addToCart({
                    _id: cards._id,
                    title: cards.title,
                    image: cards.image,
                    price: cards.price,
                    quantity: 1,
                    description: cards.description,
                  })
                ) & toast.success(`added ${cards.title}`)
              }
              className=" absolute w-[100px] top-0 transform -translate-x-32 group-hover:translate-x-0 duration-300 cursor-pointer text-slate-500 hover:text-black "
            >
              <FaCartPlus size={"1.5rem"} />
            </span>
          </div>
          {/* slide animation */}
        </div>
        <div className="font-light">{cards.category}</div>
        <div className="absolute -top-2 -right-2 ">
          {cards.isNew && (
            <p className="bg-black font-medium text-white px-5 py-1">Sale</p>
          )}
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
    </div>
  );
};

export default ProductCards;
