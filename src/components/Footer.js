import React from "react";
import { Logo } from "../assets";
import { FaSquareFacebook, FaSquareTwitter } from "react-icons/fa6";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { BsPersonFill } from "react-icons/bs";
import { IoLocation } from "react-icons/io5";
import { TbBrandPaypalFilled } from "react-icons/tb";
import { MdSupportAgent } from "react-icons/md";

const Footer = () => {
  return (
    <div className="bg-black py-16 text-[#949494]">
      <div className="max-w-screen-xl mx-auto grid grid-cols-4">
        <div className="flex flex-col gap-5">
          <img className="w-32" src={Logo} alt="logo"></img>
          <p className="tracking-widest">Connect</p>
          <div className="flex gap-4">
            <FaSquareFacebook
              size={"1.5rem"}
              className="cursor-pointer hover:text-white duration-300"
            ></FaSquareFacebook>
            <FaSquareTwitter
              size={"1.5rem"}
              className="cursor-pointer hover:text-white duration-300"
            ></FaSquareTwitter>
            <FaLinkedin
              size={"1.5rem"}
              className="cursor-pointer hover:text-white duration-300"
            ></FaLinkedin>
            <FaGithubSquare
              size={"1.5rem"}
              className="cursor-pointer hover:text-white duration-300"
            ></FaGithubSquare>
          </div>
          <div>
            <p className="tracking-tight text-s">Copyright © 2021</p>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <h4 className="pt-8 text-2xl font-normal text-white">Locate Us</h4>
          <p className="">dhanbad,Jharkhand</p>
          <p>Phone No.- 00000 00000</p>
          <p>Email - srijan.sagar17@gmail.com</p>
          <p>Mobile - 00000 00000/</p>
        </div>
        <div className="flex flex-col gap-5">
          <h4 className="pt-8 text-2xl font-normal text-white">Profile</h4>
          <p className="flex items-center gap-3 cursor-pointer hover:text-white duration-300">
            <span>
              <BsPersonFill />
            </span>
            my account
          </p>
          <p className="flex items-center gap-3 cursor-pointer hover:text-white duration-300">
            <span>
              <IoLocation />
            </span>
            order tracking
          </p>
          <p className="flex items-center gap-3 cursor-pointer hover:text-white duration-300">
            <span>
              <MdSupportAgent />
            </span>
            help & support
          </p>
          <p className="flex items-center gap-3 cursor-pointer hover:text-white duration-300">
            <span>
              <TbBrandPaypalFilled />
            </span>
            checkout
          </p>
        </div>
        <div className="flex flex-col justify-center gap-3">
          <input
            className="mx-auto px-4 py-2 bg-transparent border text-white w-72"
            placeholder="email"
            type="text"
          ></input>
          <button className="py-1 hover:border-teal-600 hover:text-black hover:bg-white duration-300 mx-auto text-sm border w-28 text-[949494]">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
