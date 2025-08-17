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
    question: `How often should I clean the litter box?`,
    answer: `The information environment is where human and machine cognition intersect to make sense of the world. It encompasses technology such as printing presses, cell phones, the web, and augmented reality, as well as content like books, videos, status updates, and online articles. These outputs move through multiple channels, such as television, radio, gaming platforms, social media, and in person. The information environment adapts to new social norms and technologies.`,
  },
  {
    question: `Why does my cat scratch furniture?`,
    answer: `The Accelerator aims to speed the pace of knowledge development on how the modern information environment affects democratic society by creating shared scientific infrastructure.`,
  },
  {
    question: `What is the best diet for my cat?`,
    answer: `The Accelerator plans to develop various tools that could benefit the research community, such as samples of typical behavior on key platforms across multiple countries, standard sets of labeled data on different types of content, and a standard image-featurization pipeline to enable high-end image analysis by all scholars with basic skills in natural language processing.`,
  },
  {
    question: `Should I let my cat go outside?`,
    answer: `The Accelerator has been generously funded by Princeton University, Microsoft, and the John S. and James L. Knight Foundation. Craig Newmark Philanthropies and the William and Flora Hewlett Foundation also supported the exploratory studies.`,
  },
  {
    question: `Why does my cat knead me?`,
    answer: `The Accelerator recognizes that many aspects of the information environment require study beyond the large social media platforms, including how misinformation spreads through mainstream media and websites, the ad tech ecosystem’s role in enabling the spread of low-quality content, and the networks of authors that support conspiracy theories. The Accelerator is not about one type of media but about identifying where we can speed science by investing in shared infrastructure.`,
  },
];

const timeline = [
  {
    name: "Zero to Four Weeks",
    description:
      "It is important the queen (a term commonly used for a female cat that is either pregnant or nursing) directly nurse her young if possible. Monitor your kitten’s growth closely to make sure its growth rate is progressing steadily. If any kitten is not growing at a sufficient rate, a caretaker might need to feed the kitten directly either with a bottle or a feeding tube. Some reasons why kittens might not gain weight appropriately include the following:",
    date: "Aug 2021",
    dateTime: "2021-08",
  },
  {
    name: "Four Weeks to One Year",
    description:
      "Kittens can start being introduced to soft wet kitten food typically around three to four weeks after birth. According to the ASPCA, kittens at this age should eat half to one cup of dry kitten food or six to nine ounces of wet kitten food per day. If your kitten has difficulties eating hard food, a small amount of water can be added to soften the food. Cat food that is optimized for kittens provides the additional nutrients that are needed for growth, energy, and wellness.",
    date: "Dec 2021",
    dateTime: "2021-12",
  },
  {
    name: "One Year to Seven Years",
    description:
      "This age is when kittens reach the cat stage and do not need as many nutrients. At this age, their level of activity decreases, and so does their metabolism. It is not recommended to leave food out for the cats all day. Instead, provide food a couple times a day so they eat meals rather than snacking throughout the day. This practice reduces the risk of obesity and other weight-related feline ailments.",
    date: "Feb 2022",
    dateTime: "2022-02",
  },
  {
    name: "Seven Years and More",
    description:
      "Much like many living organisms, the body begins to deteriorate and experience a lot of changes. Cats at this age should eat less fats and calories and more quality proteins. This means when you are purchasing packaged foods for your cat, look for food that states a particular protein (such as 'salmon') and not just a category (such as fish). This usually means they are byproducts, or combinations, of lesser quality proteins.",
    date: "Feb 2022",
    dateTime: "2022-02",
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
                Cats care tips and resources.
              </h1>
              <div className="mt-6 max-w-3xl lg:mt-0 xl:col-end-1 xl:row-start-1">
                <p className="text-pretty text-lg font-medium text-[#003B6D] sm:text-xl/8">
                  Cats were first domesticated around 7500 BCE in the western
                  Asia region and are currently the second most popular domestic
                  pet in the United States. While there are over 60 unique
                  documented cat breeds, care and diet can differ between
                  breeds. However, some diets and practices are generally
                  recommended for the well-being of your fluffy family member
                  regardless of breed.
                </p>
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
              </div>
              <img
                alt=""
                src="/images/cat3.jpg"
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
