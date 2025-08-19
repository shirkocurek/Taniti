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
    img: "/taniti/taniti-bus.jpeg",
    name: "Bus Tours",
    description:
      "Taniti City is served by a reliable public bus system that runs daily from 5 a.m. to 11 p.m. Private bus lines also connect other parts of the island, making it easy for visitors to reach popular attractions, beaches, and villages. Buses are affordable and ideal for budget travelers or those who prefer to experience the island alongside locals.",
    date: "Aug 2021",
    dateTime: "2021-08",
  },
  {
    img: "/taniti/taniti-boat.jpeg",
    name: "Boat Travel",
    description:
      "Exploring Taniti by boat offers a unique perspective of the island’s coastline and bays. Regular ferries and chartered tours connect visitors to remote beaches, snorkeling spots, and fishing grounds. For those arriving by cruise ship, docking in Yellow Leaf Bay provides a convenient starting point to explore the island for the day.",
    date: "Dec 2021",
    dateTime: "2021-12",
  },
  {
    img: "/taniti/taniti-airport.webp",
    name: "Air Travel",
    description:
      "Most visitors arrive in Taniti by air. The island is served by a small airport that currently accommodates small jets and propeller planes. Expansion is underway to welcome larger aircraft in the near future, making travel even more accessible. The airport is located near Taniti City, with taxis, buses, and rental cars available just outside the terminal.",
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
                  Transportation, how to get around the island
                </h1>
                <p className="text-pretty mt-10 text-lg font-medium text-slate-900 sm:text-xl/8">
                  Almost all visitors arrive to Taniti by air, though some
                  arrive on a small cruise ship that docks in Yellow Leaf Bay
                  for one night per week. Taniti is served by a small airport
                  that can accommodate small jets and propeller planes. Taniti
                  is in the process of expanding the airport so larger jets will
                  be able to land on the island within the next few years.
                  Public buses serve Taniti City and run from 5 a.m. to 11 p.m.
                  every day. Private buses serve the rest of the island. Taxis
                  are available in Taniti City, and rental cars can be rented
                  from a local rental agency near the airport. Bikes and helmets
                  are available to rent from several vendors (helmets are
                  required by law). Taniti City is fairly flat and very
                  walkable. Many tourists stay in the area surrounding Merriton
                  Landing: this area is easy to explore on foot.
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
