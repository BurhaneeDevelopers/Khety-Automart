"use client";
import Image from "next/image";
import { ArrowRight2 } from "iconsax-react";
import Heading from "@/components/Heading";
import { useState } from "react";

export default function Home() {
  const products = [
    { name: "Bus photo", imageUrl: "https://picsum.photos/300/200" },
    { name: "Blob photo", imageUrl: "https://picsum.photos/400/300" },
    { name: "random name", imageUrl: "https://picsum.photos/500/300" },
    { name: "name random", imageUrl: "https://picsum.photos/300/200" },
    { name: "photo product", imageUrl: "https://picsum.photos/400/200" },
    { name: "product photo", imageUrl: "https://picsum.photos/500/200" },
    { name: "random photo", imageUrl: "https://picsum.photos/400/300" },
    { name: "photo random", imageUrl: "https://picsum.photos/500/300" },
  ];

  const [selectedProduct, setSelectedProduct] = useState(products[0]);
  const [activeButton, setactiveButton] = useState(0);
  const showImage = (index) => {
    setSelectedProduct(products[index]);
    setactiveButton(index);
  };

  return (
    // <div className="">
    //   <div className="flex justify-between h-screen">
    //     <div className="inset-0 absolute bg-gray-200 h-screen rounded-b-box -z-10"></div>

    //     <div className="p-5 py-20">
    //       <div className="relative">
    //         <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl poppins font-bold z-50 text-[#575757] leading-tight max-w-xl">
    //           <span className="text-[#f8ac23] mr-4">Driving</span>
    //           Excellence, One
    //           <span className="text-[#f8ac23] mx-4">Part</span>
    //           At A Time
    //         </h2>
    //       </div>

    //       <button class="group relative text-sm font-medium text-gray-700 focus:outline-none active:text-[#f8ac23] hidden sm:inline-block mx-3 my-5">
    //         <span class="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-[#f8ac23] transition-transform group-hover:translate-y-0 group-hover:translate-x-0"></span>
    //         <span class="relative border border-current bg-gray-200 text-2xl font-bold px-10 py-4 justify-center flex items-center">
    //           Book Now
    //           <ArrowRight2 size="32" color="#f8ac23" variant="Bold" />
    //         </span>
    //       </button>
    //     </div>
    //     <div className="flex justify-end items-end w-screen">
    //       <div className="bg-[#f8ac23] w-1/2 h-screen absolute bottom-0 right-0 -z-10"></div>
    //       <img
    //         src="/Bus.png"
    //         alt=""
    //         className="absolute right-0 bottom-0  md:h-[30rem] md:w-[60rem]"
    //         // className="absolute right-0 w-96 object-cover md:object-contain md:h-[30rem] md:w-[60rem]"
    //       />
    //     </div>

    //     {/* iconsax for this project, New Arrivals, Bus CTA, Bus outline, CLients, Stats, Contact Form */}

    //     {/* For Products https://www.instagram.com/p/Cvzx9Pqy1Bw/ */}
    //   </div>
    //   {/* Products section */}
    //   <section className="py-10 bg-[#FABA02]/10">
    //     <Heading title="What we do" />
    //     <div className="flex justify-between items-center px-10">
    //       <div className="flex flex-col gap-5 h-96 overflow-y-auto featured-section w-full p-5 rounded-xl my-10">
    //         {products.map((product, index) => (
    //           <button
    //             key={index}
    //             className={`rounded-xl p-5 py-7 text-start text-xl flex items-center relative ${
    //               activeButton === index
    //                 ? "bg-[#FABA02]/50 text-white border border-gray-800"
    //                 : ""
    //             }`}
    //             onClick={() => showImage(index)}
    //           >
    //             <span>
    //               {index}.&nbsp;{product.name}
    //             </span>

    //             <span
    //               className={`${
    //                 activeButton === index
    //                   ? "absolute right-5 flex justify-center items-center bg-white text-gray-900 p-3 rounded-full"
    //                   : "hidden"
    //               }`}
    //             >
    //               <svg
    //                 xmlns="http://www.w3.org/2000/svg"
    //                 width="32"
    //                 height="32"
    //                 viewBox="0 0 24 24"
    //                 fill="none"
    //               >
    //                 <path
    //                   stroke="#262626"
    //                   stroke-linecap="round"
    //                   stroke-linejoin="round"
    //                   stroke-miterlimit="10"
    //                   stroke-width="1.5"
    //                   d="M14.43 5.93L20.5 12l-6.07 6.07M3.5 12h16.83"
    //                 ></path>
    //               </svg>
    //             </span>
    //           </button>
    //         ))}
    //       </div>
    //       <div className="w-full flex justify-center items-center">
    //         {selectedProduct && (
    //           <img
    //             src={selectedProduct.imageUrl}
    //             alt={selectedProduct.name}
    //             className="h-96 object-contain object-center"
    //           />
    //         )}
    //       </div>
    //     </div>
    //   </section>
    // </div>

    <>
    
    </>
  );
}
