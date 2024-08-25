"use client";
import React from "react";
import SlideCard from "./SlideCard";

export default function Product() {
  const bookList = [
    {
      id: 1,
      title: "সোনালী পাতা PDF বই – আব্দুল মালেক মুজাহিদ",
      image:
        "https://boimate.com/wp-content/uploads/2024/05/Sonali-Pata-PDF-192x254.jpg",
    },
    {
      id: 2,
      title:
        "গঙ্গাঋদ্ধি থেকে বাংলাদেশে PDF বই – বিচারপতি মুহাম্মদ হাবিবুর রহমান",
      image:
        "https://boimate.com/wp-content/uploads/2024/05/Gongariddhi-Theke-Bangladeshe-PDF-192x254.jpg",
    },
    {
      id: 3,
      title: "ছোটদের রাজনীতি ছোটদের অর্থনীতি PDF বই – ড. নীহার কুমার সরকার",
      image:
        "https://boimate.com/wp-content/uploads/2024/05/Chotoder-Rajneeti-Chotoder-Orthoneeti-PDF-192x254.jpg",
    },
    {
      id: 4,
      title: "ঈসা ইবনু মারইয়াম (আ.) PDF বই – শাইখ আহমাদ মুসা জিবরিল",
      image:
        "https://boimate.com/wp-content/uploads/2024/05/Isa-Ibnu-Maryam-PDF-192x254.jpg",
    },
    {
      id: 5,
      title:
        "তাজাল্লিয়াতে সফদার PDF বই (১ম-৪র্থ খন্ড) – মাওলানা আমীন সফদার উখাড়ভী রহ.",
      image:
        "https://boimate.com/wp-content/uploads/2024/05/Tajalliyate-Sofdar-PDF-192x254.jpg",
    },
    {
      id: 6,
      title:
        "তাজাল্লিয়াতে সফদার PDF বই (১ম-৪র্থ খন্ড) – মাওলানা আমীন সফদার উখাড়ভী রহ.",
      image:
        "https://boimate.com/wp-content/uploads/2024/05/Tajalliyate-Sofdar-PDF-192x254.jpg",
    },
    {
      id: 7,
      title:
        "তাজাল্লিয়াতে সফদার PDF বই (১ম-৪র্থ খন্ড) – মাওলানা আমীন সফদার উখাড়ভী রহ.",
      image:
        "https://boimate.com/wp-content/uploads/2024/05/Tajalliyate-Sofdar-PDF-192x254.jpg",
    },
    {
      id: 8,
      title:
        "তাজাল্লিয়াতে সফদার PDF বই (১ম-৪র্থ খন্ড) – মাওলানা আমীন সফদার উখাড়ভী রহ.",
      image:
        "https://boimate.com/wp-content/uploads/2024/05/Tajalliyate-Sofdar-PDF-192x254.jpg",
    },
    {
      id: 9,
      title:
        "তাজাল্লিয়াতে সফদার PDF বই (১ম-৪র্থ খন্ড) – মাওলানা আমীন সফদার উখাড়ভী রহ.",
      image:
        "https://boimate.com/wp-content/uploads/2024/05/Tajalliyate-Sofdar-PDF-192x254.jpg",
    },
    {
      id: 10,
      title:
        "তাজাল্লিয়াতে সফদার PDF বই (১ম-৪র্থ খন্ড) – মাওলানা আমীন সফদার উখাড়ভী রহ.",
      image:
        "https://boimate.com/wp-content/uploads/2024/05/Tajalliyate-Sofdar-PDF-192x254.jpg",
    },
  ];

  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-8">
        <div className="col-span-1">
          <SlideCard />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 p-4 bg-white shadow-lg rounded-lg col-span-3">
          {bookList.map((book, index) => (
            <div
              onClick={() => history.push(`/bookDetails/${book.id}`)}
              key={index}
              className="p-2 border border-blue-600 rounded-lg cursor-pointer">
              <div className="p-2">
                <img className="rounded-lg" src={book.image} alt={book.title} />
              </div>
              <h3 className="text-center text-blue-600 text-[14px]">
                {book.title}
              </h3>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-16">
        {/* Quick Delivery */}
        <div className="flex items-center">
          <div className="pt-2">
            {/* <img className="w-1/2" src={icon1} alt="" /> */}
          </div>
          <div className="pl-4">
            <h3 className="text-[20px]">Quick Delivery</h3>
            <hr className="w-[50px] h-2" />
            <p className="text-[16px]">
              Most products are free <br />
              shipping.
            </p>
          </div>
        </div>

        {/* Pay with Easy */}
        <div className="flex items-center">
          <div className="pt-2">
            {/* <img className="w-1/2" src={icon2} alt="" /> */}
          </div>
          <div className="pl-4">
            <h3 className="text-[20px]">Pay with Easy</h3>
            <hr className="w-[50px] h-2" />
            <p className="text-[16px]">
              Most products are free <br />
              shipping.
            </p>
          </div>
        </div>

        {/* Best Deal */}
        <div className="flex items-center">
          <div className="pt-2">
            {/* <img className="w-1/2" src={icon3} alt="" /> */}
          </div>
          <div className="pl-4">
            <h3 className="text-[20px]">Best Deal</h3>
            <hr className="w-[50px] h-2" />
            <p className="text-[16px]">
              Most products are free <br />
              shipping.
            </p>
          </div>
        </div>

        {/* Secured Payment */}
        <div className="flex items-center">
          <div className="pt-2">
            {/* <img className="w-1/2" src={icon4} alt="" /> */}
          </div>
          <div className="pl-4">
            <h3 className="text-[20px]">Secured Payment</h3>
            <hr className="w-[50px] h-2" />
            <p className="text-[16px]">
              Most products are free <br />
              shipping.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-24">
        <div className="middle-div-one text-white p-8 bg-gray-800 rounded-lg">
          <h4 className="text-[18px] py-4 font-semibold">SPECIAL OFFER</h4>
          <h2 className="text-[38px] font-semibold">
            Buy 3. Get <br />1 Free
          </h2>
        </div>
        <div className="middle-div-two text-white p-8 bg-gray-800 rounded-lg">
          <h4 className="text-[18px] py-4 font-semibold">$50.00</h4>
          <h2 className="text-[38px] font-semibold">
            Praise for <br />
            The Night Child
          </h2>
        </div>
      </div>
    </div>
  );
}
