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
    img: "/taniti/snorkle.jpeg",
    name: "Snorkeling Adventures",
    description:
      "Discover vibrant marine life just beneath the surface of Taniti’s clear waters. Guided snorkeling tours take you to coral reefs teeming with colorful fish, sea turtles, and other tropical wildlife. It’s the perfect blend of relaxation and discovery for beginners and seasoned swimmers alike.",
    date: "Aug 2021",
    dateTime: "2021-08",
  },
  {
    img: "/taniti/taniti-attraction3.jpg",
    name: "Boat Tours",
    description:
      "Set sail on a boat tour around Yellow Leaf Bay or beyond. Options range from leisurely sunset cruises to adventurous deep-sea fishing charters. Along the way, you’ll enjoy breathtaking views of the island’s coastline, rainforests, and volcanic landscapes.",
    date: "Dec 2021",
    dateTime: "2021-12",
  },
  {
    img: "/taniti/islanders.jpeg",
    name: "Island Dance & Fire Shows",
    description:
      "Experience Taniti’s culture after dark with traditional dance performances and thrilling fire shows. These evening events showcase the island’s rich heritage and provide a lively atmosphere filled with music, storytelling, and audience participation.",
    date: "Feb 2022",
    dateTime: "2022-02",
  },
  {
    img: "/taniti/taniti-attraction2.avif",
    name: "Swim with Stingrays",
    description:
      "Animal lovers can enjoy safe, guided experiences swimming with stingrays in shallow lagoons. These interactive encounters are designed for all ages and provide a chance to connect with Taniti’s marine life in a memorable way.",
    date: "Aug 2021",
    dateTime: "2021-08",
  },
  {
    img: "/taniti/taniti-attraction5.jpg",
    name: "Water Park Fun",
    description:
      "Families can spend the day at Taniti’s water park, complete with slides, splash zones, and pools. It’s a great option for children and parents alike, offering a mix of relaxation and excitement in a safe, family-friendly setting.",
    date: "Dec 2021",
    dateTime: "2021-12",
  },
  {
    img: "/taniti/taniti4.jpeg",
    name: "Water Sports & Parasailing",
    description:
      "For thrill-seekers, Taniti offers a wide variety of water sports, from jet skiing and kayaking to parasailing high above the bay. Adventurers can take in panoramic views of the island while enjoying an adrenaline rush.",
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
                  Explore Taniti's Main Attractions
                </h1>
                <p className="text-pretty mt-10 text-lg font-medium text-slate-900 sm:text-xl/8">
                  Most people visit Taniti to enjoy the beaches, explore the
                  rainforest, and to visit the volcano. However, there are other
                  things to do, including visiting a local history museum, going
                  on chartered fishing tours, snorkeling, zip-lining in the
                  rainforest, visiting several pubs, including a microbrewery,
                  dancing at a new dance club, seeing a movie, taking helicopter
                  rides, playing at an arcade, visiting art galleries, and
                  bowling. Also, a nine-hole golf course should be operational
                  by next year. Many of these activities are located in Merriton
                  Landing, which is a rapidly developing area on the north side
                  of Yellow Leaf Bay.
                </p>
                <p className="text-pretty mt-10 text-lg font-medium text-slate-900 sm:text-xl/8">
                  Most tourists spend most of their time in Taniti City, which
                  boasts native architecture and nearby white, sandy beaches
                  that encircle Yellow Leaf Bay. Other popular activities
                  include boat or bus tours of the island, hikes in the
                  rainforest, or visits to Taniti’s active volcano.
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
