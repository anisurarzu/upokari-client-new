"use client";
import { Input, Button } from "antd";
import React from "react";
import { Formik, Form, Field } from "formik";
import {
  SearchOutlined,
  FacebookOutlined,
  InstagramOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";
import Product from "./Product/Product";

export default function Hero() {
  const handleSearch = (values) => {
    console.log(values.searchQuery);
    // Here you can hit the API with the searchQuery value
  };

  return (
    <div>
      <div className="hero-div bg-cyan-600 p-6 md:p-8 lg:p-12 ">
        {/* Bangla Text Section */}
        <h1 className="text-white text-[28px] md:text-[34px] text-center pt-[10px] md:pt-[20px]">
          বাংলা ফ্রি পিডিএফ বই ডাউনলোড
        </h1>
        <p className="py-2 md:py-4 text-white text-center text-[14px] md:text-[16px]">
          শিক্ষামূলক, ইসলামিক বই এর সহস্র কালেকশন
        </p>

        {/* Search Bar Section */}
        <div className="flex justify-center items-center pt-4">
          <Formik initialValues={{ searchQuery: "" }} onSubmit={handleSearch}>
            {({ handleSubmit }) => (
              <Form className="w-full max-w-lg" onSubmit={handleSubmit}>
                <div className="flex items-center border-2 border-white rounded-lg overflow-hidden">
                  <Field
                    name="searchQuery"
                    placeholder="সার্চ করুন"
                    as={Input}
                    className="flex-grow p-2 text-black"
                  />
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="bg-white text-black border-none flex items-center justify-center"
                    icon={<SearchOutlined />}
                  />
                </div>
              </Form>
            )}
          </Formik>
        </div>

        {/* Social Icons Section */}
        <div className="flex justify-center gap-6 py-12">
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
      <div className="book-div mt-12">
        <Product />
      </div>
    </div>
  );
}
