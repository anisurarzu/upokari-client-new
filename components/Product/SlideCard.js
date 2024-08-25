import React from "react";

export default function SlideCard() {
  return (
    <div className="border-0 rounded-lg bg-white p-4 shadow-lg">
      <div className="border-2 border-blue-600 p-4 rounded-lg">
        <h2 className="text-blue-600 font-bold text-[21px]  pb-4 border-b border-blue-600">
          যুক্ত হোন
        </h2>
        <div className="grid grid-cols-3 gap-4">
          <div className="p-4 ">
            <i class="pi pi-telegram text-[47px] text-blue-400 shadow-lg border rounded-full"></i>
          </div>
          <div className="p-4">
            <i class="pi pi-facebook text-[47px] text-blue-700 shadow-lg border rounded-full "></i>
          </div>
          <div className="p-4">
            <i class="pi pi-whatsapp text-[47px]  text-green-600 shadow-lg border rounded-full "></i>
          </div>
        </div>
      </div>
      <div className="pt-[20px]">
        <h2 className="text-blue-600 font-bold text-[21px]  pb-4 border-b border-blue-600">
          শিক্ষামূলক বই
        </h2>

        <div className="grid grid-cols-2 gap-4 pt-[15px] book-text text-blue-700">
          <div className="border border-blue-600 rounded-lg p-4 text-[14px] ">
            প্রথম-দ্বাদশ শ্রেণি
          </div>
          <div className="border border-blue-600 rounded-lg p-4 text-[14px] ">
            ভার্সিটি ভর্তি প্রস্তুতি
          </div>
          <div className="border border-blue-600 rounded-lg p-4 text-[14px] ">
            চাকরি প্রস্তুতি
          </div>
          <div className="border border-blue-600 rounded-lg p-4 text-[14px] ">
            কারেন্ট অ্যাফেয়ার্স
          </div>
        </div>
      </div>
      <div className="pt-[20px]">
        <h2 className="text-blue-600 font-bold text-[21px]  pb-4 border-b border-blue-600">
          ইসলামিক বই
        </h2>

        <div className="grid grid-cols-2 gap-4 pt-[15px] book-text text-blue-700">
          <div className="border border-blue-600 rounded-lg p-4 text-[14px] ">
            আখিরাত
          </div>
          <div className="border border-blue-600 rounded-lg p-4 text-[14px] ">
            আত্মশুদ্ধি
          </div>
          <div className="border border-blue-600 rounded-lg p-4 text-[14px] ">
            আরবী ভাষা শিক্ষা
          </div>
          <div className="border border-blue-600 rounded-lg p-4 text-[14px] ">
            ইবাদত ও আমল
          </div>
        </div>
      </div>
    </div>
  );
}
