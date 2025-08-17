"use client";

import { ArrowRightIcon, MinusIcon, PlusIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";

const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];

const faqs = [
  {
    question: `What’s the best diet for pet birds?`,
    answer: `The information environment is where human and machine cognition intersect to make sense of the world. It encompasses technology such as printing presses, cell phones, the web, and augmented reality, as well as content like books, videos, status updates, and online articles. These outputs move through multiple channels, such as television, radio, gaming platforms, social media, and in person. The information environment adapts to new social norms and technologies.`,
  },
  {
    question: `How often should I clean my bird’s cage?`,
    answer: `The Accelerator aims to speed the pace of knowledge development on how the modern information environment affects democratic society by creating shared scientific infrastructure.`,
  },
  {
    question: `Can I teach my bird to talk?`,
    answer: `The Accelerator plans to develop various tools that could benefit the research community, such as samples of typical behavior on key platforms across multiple countries, standard sets of labeled data on different types of content, and a standard image-featurization pipeline to enable high-end image analysis by all scholars with basic skills in natural language processing.`,
  },
  {
    question: `Why is my bird plucking its feathers?`,
    answer: `The Accelerator has been generously funded by Princeton University, Microsoft, and the John S. and James L. Knight Foundation. Craig Newmark Philanthropies and the William and Flora Hewlett Foundation also supported the exploratory studies.`,
  },
  {
    question: `Do birds need toys?`,
    answer: `The Accelerator recognizes that many aspects of the information environment require study beyond the large social media platforms, including how misinformation spreads through mainstream media and websites, the ad tech ecosystem’s role in enabling the spread of low-quality content, and the networks of authors that support conspiracy theories. The Accelerator is not about one type of media but about identifying where we can speed science by investing in shared infrastructure.`,
  },
];

const timeline = [
  {
    name: "Nutrition & Feeding",
    description:
      "Feed your bird a variety of seeds, pellets, fresh fruits, and vegetables. Avoid chocolate, avocado, caffeine, and salty foods, as these can be toxic.",
    date: "Dec 2021",
    dateTime: "2021-12",
  },
  {
    name: "Housing and Cage Setup",
    description:
      "Choose a cage large enough for your bird to stretch its wings and move around freely. Clean food dishes daily and disinfect the cage weekly to prevent illness.",
    date: "Feb 2022",
    dateTime: "2022-02",
  },
  {
    name: "Offer Mental Stimulation",
    description:
      "Provide toys, perches of different textures, and regular out-of-cage time. Rotate toys to keep your bird engaged and prevent boredom.",
    date: "Dec 2022",
    dateTime: "2022-12",
  },
  {
    name: "Schedule Regular Vet Visits",
    description:
      "Birds often hide signs of illness, so annual checkups with an avian vet are important. Monitor for changes in appetite, droppings, or behavior.",
    date: "Dec 2022",
    dateTime: "2022-12",
  },
];

const Hero: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <div data-testid="homepage-hero" className="bg-white px-16">
        <div className="relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20 pt-25">
          <div
            aria-hidden="true"
            className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl shadow-stone-600/10 ring-1 ring-indigo-50 sm:-mr-80 lg:-mr-96"
          />
          <div className="mx-auto max-w-7xl px-6 pb-5 pt-32 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-8 xl:grid-cols-1 xl:grid-rows-1">
              <h1 className="max-w-2xl text-balance text-5xl font-semibold tracking-tight text-[#003B6D] sm:text-7xl lg:col-span-2 xl:col-auto">
                Birds care tips and resources.
              </h1>
              <div className="mt-6 max-w-3xl lg:mt-0 xl:col-end-1 xl:row-start-1">
                <p className="text-pretty text-lg font-medium text-[#003B6D] sm:text-xl/8">
                  Birds are very intriguing creatures as they can range from
                  birds as small as a Cuban bee hummingbird (about two inches
                  long and a little over 1/20 of an ounce) to as large as an
                  ostrich. While most birds fly, there are some that don't.
                  Birds are amazing and each breed is unique in its own way,
                  particularly when it comes to their relational needs and
                  well-being.
                </p>
                <p className="mt-6 text-pretty text-lg font-medium text-[#003B6D] sm:text-xl/8">
                  Unfortunately, birds can experience sadness and depression
                  just like humans. A number of root causes may be responsible
                  for your bird's depression such as an illness (either physical
                  or mental), losing its companion, or increasingly becoming
                  bored. Some signs to help identify if your bird is
                  experiencing depression may include the following:
                </p>
                <ul className="max-w-4xl mt-5 text-lg sm:text-xl/8 font-medium text-[#003B6D]">
                  <li className="max-w-4xl text-lg sm:text-xl/8 text-[#003B6D]">
                    • reduced appetite
                  </li>
                  <li className="max-w-4xl text-lg sm:text-xl/8 text-[#003B6D]">
                    • becoming increasingly irritable
                  </li>
                  <li className="max-w-4xl text-lg sm:text-xl/8 text-[#003B6D]">
                    • aggressive behavior
                  </li>
                  <li className="max-w-4xl text-lg sm:text-xl/8 text-[#003B6D]">
                    • songs have a different, more solemn tone
                  </li>
                </ul>
                <div className="mt-10 flex items-center gap-x-6">
                  <a
                    href="/api/auth/login?returnTo=/ipp/home"
                    className="text-md flex max-w-100 rounded-md bg-[#003B6D] px-3.5 py-2.5 font-semibold text-white shadow-sm transition-transform ease-in-out hover:bg-stone-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Book a consultation with Pexperts!
                  </a>
                  <a
                    href="/about"
                    className="text-md font-semibold text-[#003B6D]"
                  >
                    Learn more <span aria-hidden="true">→</span>
                  </a>
                </div>
                <p className="mt-6 text-pretty text-lg font-medium text-[#003B6D] sm:text-xl/8">
                  Be sure to tell your veterinarian if you see signs of any of
                  these symptoms. Just like many illnesses, identifying and
                  treating the symptoms earlier may drastically increase the
                  lifespan of your birdie.
                </p>
              </div>
              <img
                alt=""
                src="/images/bird1.jpg"
                className=" aspect-[6/5] w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-30"
              />
            </div>
          </div>
          <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
          <div className="mx-auto mb-10 mt-5 max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-4">
              {timeline.map((item) => (
                <div key={item.name}>
                  <p className="mt-6 text-lg/8 font-semibold tracking-tight text-[#003B6D]">
                    {item.name}
                  </p>
                  <p className="mt-1 text-base/7 text-[#003B6D]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <section id="faqs">
        <div className="bg-white">
          <div className="mx-auto max-w-7xl px-6 pb-20 pt-10">
            <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
              <h2 className="text-2xl font-bold leading-10 tracking-tight text-[#003B6D]">
                Frequently asked questions
              </h2>
              <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
                {faqs.map((faq) => (
                  <Disclosure key={faq.question} as="div" className="pt-6">
                    <dt>
                      <DisclosureButton className="group flex w-full items-start justify-between text-left text-[#003B6D]">
                        <span className="text-base font-semibold leading-7">
                          {faq.question}
                        </span>
                        <span className="ml-6 flex h-7 items-center">
                          <PlusIcon
                            aria-hidden="true"
                            className="h-6 w-6 group-data-[open]:hidden"
                          />
                          <MinusIcon
                            aria-hidden="true"
                            className="h-6 w-6 [.group:not([data-open])_&]:hidden"
                          />
                        </span>
                      </DisclosureButton>
                    </dt>
                    <DisclosurePanel as="dd" className="mt-2 pr-12">
                      <p className="text-base leading-7 text-gray-600">
                        {faq.answer}
                      </p>
                    </DisclosurePanel>
                  </Disclosure>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
