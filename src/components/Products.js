import React, { useEffect, useState } from "react";
import ProductCards from "./ProductCards";
import ReactSlider from "react-slider";
import { useRef } from "react";
import { CiSearch } from "react-icons/ci";

const Products = ({ productData }) => {
  const [filteredProductData, setFilteredProductData] = useState(productData);
  const productRef = useRef();
  const min = 0;
  const max = 1000;
  const [price, setPrice] = useState([min, max]);
  const [searchText, setSearchText] = useState([]);

  useEffect(() => {
    setFilteredProductData(productData);
  }, [productData]);
  return (
    <div className="py-12">
      <div className="mx-auto w-80 bg-black ">
        <h1
          ref={productRef}
          id="products"
          className=" text-slate-50  w-80 py-2 text-xl text-center"
        >
          Products
        </h1>
      </div>
      <div className="mx-auto w-32 h-[2.5px] bg-black mt-9"></div>
      <div className="max-w-[50vw] mt-8 text-center mx-auto">
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum."
      </div>
      <div className="flex">
        <div className="w-1/4 py-10 flex flex-col   ml-10 gap-10">
          <div className="flex gap-1 items-center">
            {" "}
            <input
              className="w-36 py-1 px-4 border-b-[1px] border-b-gray-300 rounded-sm "
              placeholder="search..."
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
            ></input>
            <CiSearch
              className="cursor-pointer text-gray-500 hover:text-black duration-300"
              size={"1.5rem"}
              onClick={() => {
                const filteredProductData = productData.filter((items) =>
                  items.title.toLowerCase().includes(searchText.toLowerCase())
                );
                setFilteredProductData(filteredProductData);
              }}
            />
          </div>

          <div>
            <h1 className="py-3 text-lg tracking-widest ">Categories</h1>
            <ul className="ml-3 flex flex-col gap-3">
              <li
                className="tracking-widest text-gray-500 cursor-pointer hover:underline hover:text-black duration-300"
                onClick={() => {
                  setFilteredProductData(productData);
                }}
              >
                All
              </li>
              <li
                onClick={() => {
                  const filteredProductData = productData.filter(
                    (item) => item.category === "men"
                  );
                  setFilteredProductData(filteredProductData);
                }}
                className="tracking-widest  text-gray-500 cursor-pointer hover:underline hover:text-black duration-300"
              >
                Men
              </li>
              <li
                className="tracking-widest  text-gray-500 cursor-pointer hover:underline hover:text-black duration-300"
                onClick={() => {
                  const filteredProductData = productData.filter(
                    (item) => item.category === "women"
                  );
                  setFilteredProductData(filteredProductData);
                }}
              >
                Women
              </li>
              <li
                className="tracking-widest  text-gray-500 cursor-pointer hover:underline hover:text-black duration-300"
                onClick={() => {
                  const filteredProductData = productData.filter(
                    (item) => item.category === "kids"
                  );
                  setFilteredProductData(filteredProductData);
                }}
              >
                Kids
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-3 ">
            <p className="tracking-widest text-lg">Price Range</p>
            <p className="tracking-widest font-light">
              {price[0]} - {price[1]}
            </p>
            <div className="flex items-center">
              <ReactSlider
                className="horizontal-slider"
                thumbClassName="example-thumb"
                trackClassName="example-track"
                min={min}
                max={max}
                minDistance={1}
                value={price}
                onChange={setPrice}
              />
              <button
                className="py-1 px-2 border-[1px] border-gray-400 font-light hover:bg-black hover:text-white duration-300 active:bg-gray-500 tracking-wider"
                onClick={() => {
                  const filteredProductData = productData.filter(
                    (item) => item.price <= price[1] && item.price >= price[0]
                  );
                  setFilteredProductData(filteredProductData);
                }}
              >
                Filter
              </button>
            </div>
          </div>
        </div>
        <div className=" w-3/4 mr-20 grid grid-cols-3 py-10 gap-8">
          {filteredProductData.map((item) => (
            <ProductCards key={item._id} cards={item}></ProductCards>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
