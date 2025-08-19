"use client";

import { ArrowRightIcon, MinusIcon, PlusIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import Link from "next/link";

const timeline = [
  {
    img: "/taniti/taniti-dining6.jpeg",
    name: "Hotels & Resorts Dining",
    description:
      "Many of Taniti’s hotels and resorts feature in-house restaurants that combine international flavors with local ingredients. Guests can enjoy multi-course meals, room service, and romantic dinners overlooking Yellow Leaf Bay. Hotel dining is ideal for those who prefer convenience, sophistication, and a full-service experience without leaving their accommodations.",
    date: "Aug 2021",
    dateTime: "2021-08",
  },
  {
    img: "/taniti/taniti-dining2.jpg",
    name: "Beachfront Service",
    description:
      "For a true taste of island living, visitors can enjoy meals served directly on the beach. Picture grilled seafood, tropical cocktails, and light bites delivered to your lounge chair as you watch the sunset. Beachfront dining offers a relaxed, barefoot-friendly atmosphere that captures the essence of a tropical getaway.",
    date: "Dec 2021",
    dateTime: "2021-12",
  },
  {
    img: "/taniti/taniti-food.jpeg",
    name: "Cafés & Casual Eateries",
    description:
      "Taniti’s cafés are perfect for starting the day with fresh pastries, strong coffee, or fresh-squeezed juice. Scattered throughout Taniti City and Merriton Landing, these spots are popular with both locals and tourists looking for a casual meal or quick snack between activities. The laid-back vibe makes them an easy stop for families and solo travelers alike.",
    date: "Feb 2022",
    dateTime: "2022-02",
  },
];

const Hero: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <div data-testid="homepage-hero" className="bg-white">
        <div className="relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20 pt-20">
          <div
            aria-hidden="true"
            className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl shadow-stone-600/10 ring-1 ring-indigo-50 sm:-mr-80 lg:-mr-96"
          />
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-5xl pt-35 pb-15">
              <div className="text-center">
                <h1 className="text-balance text-5xl font-semibold tracking-tight text-slate-900">
                  Discover Taniti's Dining options
                </h1>
                <p className="text-pretty mt-10 text-lg font-medium text-slate-900 sm:text-xl/8">
                  Taniti’s dining scene is as diverse as the island itself,
                  offering everything from fresh local seafood to international
                  cuisine. Taniti offers a dining experience to match every
                  traveler’s mood — from elegant hotel dining with sweeping
                  views, to casual beachfront service where meals are paired
                  with ocean breezes, to cozy cafés perfect for a morning coffee
                  or light bite. Taniti currently has 10 restaurants: five serve
                  mostly local fish and rice, three serve American-style meals,
                  and two serve Pan-Asian cuisine. Taniti has two supermarkets,
                  two smaller grocery stores, and one convenience store that is
                  open 24 hours a day.
                </p>
              </div>
            </div>
          </div>
          <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid mb-15 max-w-6xl grid-cols-1 gap-8 overflow-hidden lg:grid-cols-3">
              {timeline.map((item) => (
                <div key={item.name}>
                  <img
                    alt="menu item photo"
                    src={item.img}
                    className="w-full h-56 object-cover rounded mb-12 mt-5 shadow-2xl border border-gray-400"
                  />
                  <p className="mt-6 text-lg/8 font-semibold tracking-tight text-slate-900">
                    {item.name}
                  </p>
                  <p className="mt-1 mb-7 text-base/7 text-slate-900">
                    {item.description}
                  </p>
                  <Link
                    href={"/booking"}
                    className="text-md font-semibold leading-6 underline text-blue-900 hover:text-blue-600"
                  >
                    View our Packages. Book Now{" "}
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div data-testid="homepage-hero" className="bg-white px-16">
        <div className="relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20 pt-10">
          <div
            aria-hidden="true"
            className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl shadow-stone-600/10 ring-1 ring-indigo-50 sm:-mr-80 lg:-mr-96"
          />

          <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
        </div>
      </div>
    </>
  );
};

export default Hero;
