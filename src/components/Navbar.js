"use client";
import Link from "next/link";
import React from "react";
import {
  SearchNormal1,
  Facebook,
  Whatsapp,
  Instagram,
  Calendar,
  ArrowDown2,
  HambergerMenu,
  CloseCircle,
} from "iconsax-react";

const Navbar = () => {
  return (
    <>
      {/* Search Modal  */}
      <dialog id="my_modal_2" className="modal">
        <form
          method="dialog"
          className="flex h-screen justify-end items-center relative"
        >
          <input
            className="input border-0 h-20 w-[50rem] model-box bg-white text-xl focus:outline-none"
            type="text"
            placeholder="Search Anything"
          />
          <button className="absolute right-5">
            <CloseCircle size="32" color="#f8ac23" />
          </button>
        </form>
      </dialog>

      <header class="bg-white shadow-lg h-24 flex">
        {/* LOGO  */}
        <Link
          href="/"
          class="md:border-e flex-shrink-0 flex items-center justify-center px-4 lg:px-6 xl:px-8 overflow-hidden"
        >
          <img class="w-44 h-20 lg:w-52 lg:h-28 mt-5" src="/logo.png" alt="" />
        </Link>
        {/* NAV LINKS  */}
        <nav class="header-links font-semibold text-base w-full lg:text-lg hidden md:flex">
          <ul class="flex items-center ml-4 w-full justify-evenly md:text-sm lg:text-lg">
            <li class="active hover:text-[#f8ac23] hover-underline-animation">
              <a href="">Home</a>
            </li>
            <li class=" hover:text-[#f8ac23] hover-underline-animation">
              <a href="">About</a>
            </li>
            <div class="dropdown dropdown-hover hover:text-[#f8ac23]">
              <label tabIndex={0} className="flex items-center gap-1">
                Something
                <ArrowDown2 size="16" className="" />
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow rounded bg-white text-base text w-max text-black flex flex-row"
              >
                <div className="">
                  <li className="hover:text-[#f8ac23] font-normal">
                    <a>AAA Bus</a>
                  </li>
                  <li className="hover:text-[#f8ac23] font-normal">
                    <a>Baron Bus</a>
                  </li>
                  <li className="hover:text-[#f8ac23] font-normal">
                    <a>Athletic Bus</a>
                  </li>
                </div>
                <div className="">
                  <li className="hover:text-[#f8ac23] font-normal">
                    <a>AAA Bus</a>
                  </li>
                  <li className="hover:text-[#f8ac23] font-normal">
                    <a>Baron Bus</a>
                  </li>
                  <li className="hover:text-[#f8ac23] font-normal">
                    <a>Athletic Bus</a>
                  </li>
                </div>
              </ul>
            </div>
            <li class=" hover:text-[#f8ac23] hover-underline-animation relative">
              <a href="">New</a>
              <div className="bg-red-500 w-2 h-2 rounded-full absolute top-0 -right-3"></div>
            </li>
            <li class=" hover:text-[#f8ac23] hover-underline-animation">
              <a href="">Contact</a>
            </li>
          </ul>
        </nav>

        {/* RESPONSIVE NAV  */}
        <div className="w-full flex md:hidden justify-center items-center z-10">
          <div className="drawer lg:drawer-open ">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-side">
              <label htmlFor="my-drawer-2" className="drawer-overlay"></label>

              {/* Sidebar content here */}
              <ul className="menu p-4 w-80 h-full text-base-content bg-white">
                <a
                  href=""
                  class="md:border-e flex-shrink-0 flex overflow-hidden mb-5"
                >
                  <img
                    class="w-44 h-20 lg:w-52 lg:h-28 mt-5"
                    src="/logo.png"
                    alt=""
                  />
                </a>
                <li class="active hover:text-[#f8ac23] text-xl leading-loose">
                  <a href="">Home</a>
                </li>
                <li class="hover:text-[#f8ac23] text-xl leading-loose">
                  <a href="">About</a>
                </li>
                <li class="hover:text-[#f8ac23] text-xl leading-loose ">
                  <a href="">
                    Products{" "}
                    <span>
                      <ArrowDown2 size="16" className="" />
                    </span>
                  </a>
                </li>
                <li class="hover:text-[#f8ac23] text-xl leading-loose">
                  <a href="">Services</a>
                </li>
                <li class="hover:text-[#f8ac23] text-xl leading-loose">
                  <a href="">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* SOCIALS  */}
        <nav class="hidden xl:contents">
          <ul class="flex items-center mr-4 lg:mr-6 xl:mr-8">
            <li class="p-1">
              <a
                href=""
                class="inline-block rounded-full border p-2 hover:shadow-lg hover:border-opacity-0 duration-200 hover:-translate-y-0.5"
              >
                <Whatsapp size="24" className="hover:text-[#f8ac23]" />
              </a>
            </li>
            <li class="p-1">
              <a
                href=""
                class="inline-block rounded-full border p-2 hover:shadow-lg hover:border-opacity-0 duration-200 hover:-translate-y-0.5"
              >
                <Instagram size="24" className="hover:text-[#f8ac23]" />
              </a>
            </li>
            <li class="p-1">
              <a
                href=""
                class="inline-block rounded-full border p-2 hover:shadow-lg hover:border-opacity-0 duration-200 hover:-translate-y-0.5"
              >
                <Facebook size="24" className="hover:text-[#f8ac23]" />
              </a>
            </li>
            <li class="p-1">
              <a
                href=""
                class="inline-block rounded-full border p-2 hover:shadow-lg hover:border-opacity-0 duration-200 hover:-translate-y-0.5"
              >
                <Calendar size="24" className="hover:text-[#f8ac23]" />
              </a>
            </li>
          </ul>
        </nav>

        {/* CTA NAV */}
        <div class="md:border-s flex justify-around items-center px-4 w-1/2 lg:w-1/3 gap-5">
          <button class="" onClick={() => window.my_modal_2.showModal()}>
            <SearchNormal1 size="32" color="#f8ac23" />
          </button>
          <a
            class="group relative text-sm font-medium text-gray-700 focus:outline-none active:text-[#f8ac23] hidden sm:inline-block"
            href="/download"
          >
            <span class="absolute inset-0 translate-x-0.5 translate-y-0.5 bg-gray-700 transition-transform group-hover:translate-y-0 group-hover:translate-x-0"></span>
            <span class="relative block border border-current bg-white px-8 py-3">
              Book Now
            </span>
          </a>
          <label htmlFor="my-drawer-2" className="md:hidden">
            <HambergerMenu size="32" color="#f8ac23" />
          </label>
        </div>
      </header>
    </>
  );
};

export default Navbar;
