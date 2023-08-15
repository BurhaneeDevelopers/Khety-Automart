"use client";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex justify-between px-5 py-5">
        <div className="inset-0 absolute bg-gray-200  h-screen rounded-b-box -z-10"></div>

        <div className="">hello</div>
        <div className="justify-end items-end">
          <div className="bg-[#f8ac23] rounded-xl w-[40rem] h-[45rem]"></div>
          {/* <img src="/blob.png" alt="" className="w-[35rem] h-[30rem] drop-shadow-2xl"/> */}
        </div>

        {/* iconsax for this project, New Arrivals, Bus CTA, Bus outline, CLients, Stats, Contact Form */}

        {/* For Products https://www.instagram.com/p/Cvzx9Pqy1Bw/ */}

      </div>
    </>
  );
}
