/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import SlideCard from "./SlideCard";
import Link from "next/link";

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
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 p-4 bg-white shadow-lg rounded-lg col-span-3">
          {bookList.map((book, index) => (
            <div
              // onClick={() => history.push(`/${book.id}`)}
              key={index}
              className="p-2 border border-blue-600 rounded-lg cursor-pointer h-[270px]">
                <Link href={`/books/${book.id}`}>
              <img className="rounded-lg" src={book?.image} alt={book?.title} /></Link>

              <h3 className="text-center text-blue-600 text-[10px] pt-2">
                {book.title}
              </h3>
            </div>
          ))}
        </div>
      </div>

      

      
    </div>
  );
}
