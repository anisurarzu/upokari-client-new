import React from "react";

export default function SlideCard() {
  return (
    <div className="border-0 rounded-lg bg-white p-4 shadow-lg">
      <div className="border-2 border-blue-600 p-4 rounded-lg">
        <h2 className="text-blue-600 font-bold text-lg md:text-xl lg:text-2xl pb-4 border-b border-blue-600">
          যুক্ত হোন
        </h2>
        <div className="grid grid-cols-3 gap-4 md:grid-cols-3">
          <div className="p-4 flex justify-center">
            <i className="pi pi-telegram text-3xl md:text-4xl lg:text-5xl text-blue-400 shadow-lg border rounded-full"></i>
          </div>
          <div className="p-4 flex justify-center">
            <i className="pi pi-facebook text-3xl md:text-4xl lg:text-5xl text-blue-700 shadow-lg border rounded-full"></i>
          </div>
          <div className="p-4 flex justify-center">
            <i className="pi pi-whatsapp text-3xl md:text-4xl lg:text-5xl text-green-600 shadow-lg border rounded-full"></i>
          </div>
        </div>
      </div>
      <div className="pt-4">
        <h2 className="text-blue-600 font-bold text-lg md:text-xl lg:text-2xl pb-4 border-b border-blue-600">
          শিক্ষামূলক বই
        </h2>

        <div className="grid grid-cols-2 gap-4 pt-4 book-text text-blue-700">
          <div className="border border-blue-600 rounded-lg p-4 text-sm md:text-base">
            প্রথম-দ্বাদশ শ্রেণি
          </div>
          <div className="border border-blue-600 rounded-lg p-4 text-sm md:text-base">
            ভার্সিটি ভর্তি প্রস্তুতি
          </div>
          <div className="border border-blue-600 rounded-lg p-4 text-sm md:text-base">
            চাকরি প্রস্তুতি
          </div>
          <div className="border border-blue-600 rounded-lg p-4 text-sm md:text-base">
            কারেন্ট অ্যাফেয়ার্স
          </div>
        </div>
      </div>
      <div className="pt-4">
        <h2 className="text-blue-600 font-bold text-lg md:text-xl lg:text-2xl pb-4 border-b border-blue-600">
          ইসলামিক বই
        </h2>

        <div className="grid grid-cols-2 gap-4 pt-4 book-text text-blue-700">
          <div className="border border-blue-600 rounded-lg p-4 text-sm md:text-base">
            আখিরাত
          </div>
          <div className="border border-blue-600 rounded-lg p-4 text-sm md:text-base">
            আত্মশুদ্ধি
          </div>
          <div className="border border-blue-600 rounded-lg p-4 text-sm md:text-base">
            আরবী ভাষা শিক্ষা
          </div>
          <div className="border border-blue-600 rounded-lg p-4 text-sm md:text-base">
            ইবাদত ও আমল
          </div>
        </div>
      </div>
    </div>
  );
}
