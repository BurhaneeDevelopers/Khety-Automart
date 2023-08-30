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

const Footer = () => {
  return (
    <div>
      <footer class="bg-white">
        <div class="mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex flex-col items-center gap-4 rounded-lg bg-[#f8ac23] p-6 shadow-lg sm:flex-row sm:justify-between">
            <strong class="text-xl text-white sm:text-xl">
              Make Your Next Career Move!
            </strong>

            <a
              class="inline-flex items-center gap-2 rounded-full border border-white bg-white px-8 py-3 text-[#575757] hover:bg-transparent hover:text-white focus:outline-none focus:ring active:bg-white/90"
              href="/"
            >
              <span class="text-sm font-medium"> Let&apos;s Get Started </span>

              <svg
                class="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>

          <div class="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div class="text-center sm:text-left">
              <p class="text-lg font-medium text-gray-900">About Us</p>

              <ul class="mt-8 space-y-4 text-sm">
                <li>
                  <a
                    class="text-gray-700 transition hover:text-gray-700/75"
                    href="/"
                  >
                    Company History
                  </a>
                </li>

                <li>
                  <a
                    class="text-gray-700 transition hover:text-gray-700/75"
                    href="/"
                  >
                    Meet the Team
                  </a>
                </li>

                <li>
                  <a
                    class="text-gray-700 transition hover:text-gray-700/75"
                    href="/"
                  >
                    Employee Handbook
                  </a>
                </li>

                <li>
                  <a
                    class="text-gray-700 transition hover:text-gray-700/75"
                    href="/"
                  >
                    Careers
                  </a>
                </li>
              </ul>
            </div>

            <div class="text-center sm:text-left">
              <p class="text-lg font-medium text-gray-900">Our Services</p>

              <ul class="mt-8 space-y-4 text-sm">
                <li>
                  <a
                    class="text-gray-700 transition hover:text-gray-700/75"
                    href="/"
                  >
                    Web Development
                  </a>
                </li>

                <li>
                  <a
                    class="text-gray-700 transition hover:text-gray-700/75"
                    href="/"
                  >
                    Web Design
                  </a>
                </li>

                <li>
                  <a
                    class="text-gray-700 transition hover:text-gray-700/75"
                    href="/"
                  >
                    Marketing
                  </a>
                </li>

                <li>
                  <a
                    class="text-gray-700 transition hover:text-gray-700/75"
                    href="/"
                  >
                    Google Ads
                  </a>
                </li>
              </ul>
            </div>

            <div class="text-center sm:text-left">
              <p class="text-lg font-medium text-gray-900">Resources</p>

              <ul class="mt-8 space-y-4 text-sm">
                <li>
                  <a
                    class="text-gray-700 transition hover:text-gray-700/75"
                    href="/"
                  >
                    Online Guides
                  </a>
                </li>

                <li>
                  <a
                    class="text-gray-700 transition hover:text-gray-700/75"
                    href="/"
                  >
                    Conference Notes
                  </a>
                </li>

                <li>
                  <a
                    class="text-gray-700 transition hover:text-gray-700/75"
                    href="/"
                  >
                    Forum
                  </a>
                </li>

                <li>
                  <a
                    class="text-gray-700 transition hover:text-gray-700/75"
                    href="/"
                  >
                    Downloads
                  </a>
                </li>

                <li>
                  <a
                    class="text-gray-700 transition hover:text-gray-700/75"
                    href="/"
                  >
                    Upcoming Events
                  </a>
                </li>
              </ul>
            </div>

            <div class="text-center sm:text-left">
              <p class="text-lg font-medium text-gray-900">Helpful Links</p>

              <ul class="mt-8 space-y-4 text-sm">
                <li>
                  <a
                    class="text-gray-700 transition hover:text-gray-700/75"
                    href="/"
                  >
                    FAQs
                  </a>
                </li>

                <li>
                  <a
                    class="text-gray-700 transition hover:text-gray-700/75"
                    href="/"
                  >
                    Support
                  </a>
                </li>

                <li>
                  <a
                    class="group flex justify-center gap-1.5 sm:justify-start"
                    href="/"
                  >
                    <span class="text-gray-700 transition group-hover:text-gray-700/75">
                      New
                    </span>

                    <span class="relative flex h-2 w-2">
                      <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75"></span>
                      <span class="relative inline-flex h-2 w-2 rounded-full bg-red-500"></span>
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div class="mt-16">
            <ul class="flex justify-center gap-6 sm:justify-end">
              <li>
                <a
                  href=""
                  class="inline-block rounded-full border p-2 hover:shadow-lg hover:border-opacity-0 duration-200 hover:-translate-y-0.5"
                >
                  <Whatsapp size="24" className="hover:text-[#f8ac23]" />
                </a>
              </li>

              <li>
                <a
                  href=""
                  class="inline-block rounded-full border p-2 hover:shadow-lg hover:border-opacity-0 duration-200 hover:-translate-y-0.5"
                >
                  <Instagram size="24" className="hover:text-[#f8ac23]" />
                </a>
              </li>

              <li>
                <a
                  href=""
                  class="inline-block rounded-full border p-2 hover:shadow-lg hover:border-opacity-0 duration-200 hover:-translate-y-0.5"
                >
                  <Facebook size="24" className="hover:text-[#f8ac23]" />
                </a>
              </li>

              <li>
                <a
                  href=""
                  class="inline-block rounded-full border p-2 hover:shadow-lg hover:border-opacity-0 duration-200 hover:-translate-y-0.5"
                >
                  <Calendar size="24" className="hover:text-[#f8ac23]" />
                </a>
              </li>
            </ul>

            <div class="sm:flex sm:items-center sm:justify-between">
              <div class="flex justify-center text-teal-600 sm:justify-start">
                <img
                  src="/logo.png"
                  alt="Khety Traders"
                  className="w-52 object-contain h-32"
                />
              </div>

              <p class="text-center text-sm text-gray-500 sm:mt-0 sm:text-right">
                Copyright &copy; 2023. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
