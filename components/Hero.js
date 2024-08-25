'use client'
import { Carousel, Input } from "antd";
import React from "react";
import {
  ShoppingCartOutlined,
  FacebookOutlined,
  InstagramOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";

const { Search } = Input;

export default function Hero() {
  const contentStyle = {
    height: "560px",
    lineHeight: "160px",
    textAlign: "center",
    background: "#F4F8FB",
  };

  const onSearch = (value) => {
    console.log(value);
  };

  return (
    <div className="hero-div bg-cyan-600 p-4">
      {/* Carousel Section */}
      <Carousel autoplay>
        <div className="">
          <div className="grid grid-cols-2" style={contentStyle}>
            <div>
              <h1 className="text-6xl font-bold pt-[170px] font-mono text-gray-800">
                Child Care Book
              </h1>
              <h4 className="text-xl pt-[15px] font-mono pl-[100px] text-justify text-gray-600">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. It is a long established fact that a reader.
                <br />
                <br />
                <span className="border border-black py-[15px] px-16 cursor-pointer flex items-center justify-center gap-2">
                  SHOP NOW <ShoppingCartOutlined />
                </span>
              </h4>
            </div>
            <div className="first-div m-20 ml-[160px]"></div>
          </div>
        </div>

        <div>
          <div className="grid grid-cols-2" style={contentStyle}>
            <div>
              <h1 className="text-6xl font-bold pt-[170px] font-mono text-gray-800">
                Yoga Lesson Non
              </h1>
              <h4 className="text-xl pt-[15px] font-mono pl-[100px] text-justify text-gray-600">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. It is a long established fact that a reader.
                <br />
                <br />
                <span className="border border-black py-[15px] px-16 cursor-pointer flex items-center justify-center gap-2">
                  SHOP NOW <ShoppingCartOutlined />
                </span>
              </h4>
            </div>
            <div className="second-div m-20 ml-[160px]"></div>
          </div>
        </div>

        <div>
          <div className="grid grid-cols-2" style={contentStyle}>
            <div>
              <h1 className="text-6xl font-bold pt-[170px] font-mono text-gray-800">
                Child Care Book
              </h1>
              <h4 className="text-xl pt-[15px] font-mono pl-[100px] text-justify text-gray-600">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. It is a long established fact that a reader.
                <br />
                <br />
                <span className="border border-black py-[15px] px-16 cursor-pointer flex items-center justify-center gap-2">
                  SHOP NOW <ShoppingCartOutlined />
                </span>
              </h4>
            </div>
            <div className="first-div m-20 ml-[160px]"></div>
          </div>
        </div>
      </Carousel>

      {/* Bangla Text Section */}
      <h1 className="text-white text-[34px] text-center pt-[20px]">
        বাংলা ফ্রি পিডিএফ বই ডাউনলোড
      </h1>
      <p className="py-4 text-white text-center text-[16px]">
        শিক্ষামূলক, ইসলামিক বই এর সহস্র কালেকশন
      </p>

      {/* Search Bar Section */}
      <div className="grid grid-cols-3 gap-8 pt-4">
        <div></div>
        <div className="border-2 border-white p-2 rounded-lg">
          <Search
            placeholder="সার্চ করুন"
            onSearch={onSearch}
            style={{ width: 200 }}
            className="bg-white text-black"
          />
        </div>
        <div></div>
      </div>

      {/* Social Icons Section */}
      <div className="flex justify-center gap-4 pt-4">
        <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
          <FacebookOutlined className="text-white text-2xl" />
        </a>
        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
          <InstagramOutlined className="text-white text-2xl" />
        </a>
        <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
          <YoutubeOutlined className="text-white text-2xl" />
        </a>
      </div>
    </div>
  );
}
