import React from "react";
import { notFound } from "next/navigation";
import SlideCard from "@/components/Product/SlideCard";
import PdfReader from "@/components/PDFViewer/PdfReader";
import { Image } from "antd";

export default async function BookDetails({ params }) {
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

  const book = bookList?.find((book) => book.id === parseInt(params.id));

  if (!book) {
    notFound(); // Trigger a 404 page
  }

  return (
    <div className="mb-4">
      <div className="pt-[50px]">
        <div className="grid grid-cols-4 px-[130px] gap-8 book-list">
          <div className="col-span-3 shadow-lg bg-white p-4 border-0 rounded-lg">
            <div className="p-2 border-0 rounded-lg grid grid-cols-7">
              <div className="p-[20px] col-span-1">
                <Image
                  className="border-2 border-blue-600 rounded-lg"
                  src={book.image}
                  alt={book.title}
                />
              </div>
              <div className="col-span-6">
                <h3 className="text-blue-900 text-[26px] pt-[15px] font-semibold">
                  {book.title}
                </h3>
                <div className="flex text-[15px] pt-2">
                  <p className="">বইয়ের ধরণ: </p>
                  <p className="text-blue-600">ইসলামিক বই, ইসলামের ইতিহাস</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 text-white bg-blue-500 border-0 rounded-lg mx-12 mt-20">
              <div className="flex">
                <i className="pi pi-telegram text-[47px] p-4"></i>
                <h3 className="text-[20px] pt-[15px]">
                  Upokari টেলিগ্রাম চ্যানেল
                </h3>
              </div>
              <div></div>
              <div className="text-right">
                <button className="bg-white text-blue-600 font-semibold text-[20px] border-2 border-blue-800 rounded-lg py-2 px-8 mt-[12px] mr-[17px] hover:bg-blue-600 hover:text-white hover:border-white">
                  Join Now
                </button>
              </div>
            </div>
            <div className="px-12 pt-4 text-[13px]">
              <p className="py-2">
                সোনালী পাতা PDF (Sonali Pata) বইটি আব্দুল মালেক মুজাহিদ এর লেখা।
                বইটি আমরা অনলাইন থেকে সংগ্রহ করেছি।
              </p>
              <p>
                বাংলা ইবুক ডাউনলোড ওয়েবসাইট। আমাদের ওয়েবসাইট থেকে {book.title}{" "}
                বইটির PDF কপি ডাউনলোড করে অফলাইনে পড়তে পারবেন এবং চাইলে অনলাইনেও
                পড়তে পারবেন। বইটির ডাউনলোড লিংকসহ বিস্তারিত সকল তথ্য নিচে দেওয়া
                আছে।
              </p>
            </div>
          </div>
          {<SlideCard />}
          {/* <MidderlerHomeSideCard /> */}
        </div>
      </div>
      {/* <h1 className="text-2xl font-bold mb-4">PDF Reader</h1>
      <PdfReader fileUrl="/files/test-book-1.pdf" /> */}

      {/* <ScocialIcon /> */}
    </div>
  );
}
