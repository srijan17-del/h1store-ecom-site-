import { useDispatch, useSelector } from "react-redux";
import { IoIosClose } from "react-icons/io";
import {
  decrementQuantity,
  deleteItem,
  incrementQuantity,
  resetCart,
} from "../redux/h1storeSlice";
import { ToastContainer, toast } from "react-toastify";

const CartItems = () => {
  const productData = useSelector((state) => state.h1store.productData);

  const dispatch = useDispatch();
  return (
    <div className="w-2/3 pl-4 py-6 ml-14 ">
      <div className="mb-6">
        <h1 className="font-serif text-xl tracking-wide">Shopping Cart</h1>
      </div>
      <div>
        {productData.map((item) => (
          <div className="mt-9 flex items-center gap-10 ">
            <div className="flex items-center gap-2 ">
              <IoIosClose
                onClick={() =>
                  dispatch(deleteItem(item._id)) &
                  toast.error(`removed ${item.title} from cart`)
                }
                className="cursor-pointer hover:text-red-600 duration-300"
                size={"2rem"}
              />
              <img
                src={item.image}
                alt="productImage"
                className="w-28 h-32 object-cover"
              ></img>
            </div>
            <div>
              <p className="text-wrap w-44">{item.title}</p>
            </div>
            <div>
              <p className="w-10">₹{item.price}</p>
            </div>
            <div>
              <div className="flex justify-between gap-4 border-[1.6px] w-52 py-3 px-2 items-center  ">
                <p className="font-[320] tracking-wide ">Quantity</p>
                <div className="flex gap-5 font-semibold">
                  <button
                    onClick={() =>
                      dispatch(
                        decrementQuantity({
                          _id: item._id,
                          quantity: item.quantity,
                          price: item.price,
                          description: item.description,
                          title: item.title,
                          image: item.image,
                        })
                      )
                    }
                    className="border-[1.6px] w-7 hover:bg-white active:bg-black active:text-white duration-300 shadow-md"
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() =>
                      dispatch(
                        incrementQuantity({
                          _id: item._id,
                          quantity: item.quantity,
                          price: item.price,
                          description: item.description,
                          title: item.title,
                          image: item.image,
                        })
                      )
                    }
                    className="border-[1.6px] w-7  hover:bg-white active:bg-black active:text-white duration-300 shadow-md "
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
            <div>
              <p>₹{item.quantity * item.price} </p>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={() => dispatch(resetCart()) & toast.error(`Cart is empty`)}
        className="bg-red-500 ml-10 mt-8 px-4 py-1 cursor-pointer text-white hover:bg-red-800 active:bg-red-950 duration-300 shadow-sm"
      >
        Reset Cart
      </button>
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

export default CartItems;
