"use client";

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { ArrowRightIcon, MinusIcon, PlusIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];

const faqs = [
  {
    question: `What type of power outlets are used on Taniti?`,
    answer: `Power outlets are 120 volts, the same as in the United States.`,
  },
  {
    question: `When can alcohol be purchased on the island?`,
    answer: `Alcohol cannot be served or sold between midnight and 9:00 a.m.`,
  },
  {
    question: `What is the legal drinking age in Taniti?`,
    answer: `The drinking age is 18, though it is not strictly enforced.`,
  },
  {
    question: `Do people in Taniti speak English?`,
    answer: `Many younger Tanitians speak fluent English. In rural areas, especially among older residents, English is spoken very little.`,
  },
  {
    question: `What healthcare facilities are available?`,
    answer: `Taniti has one hospital and several clinics. The hospital has many multilingual employees.`,
  },
  {
    question: `Is Taniti a safe place to visit?`,
    answer: `Violent crime is very rare, but tourists should be mindful of pickpocketing and petty theft as tourism grows.`,
  },
  {
    question: `Are there holidays I should plan around?`,
    answer: `Yes, Taniti has many national holidays. Tourist attractions and restaurants may be closed on these days, so visitors should plan accordingly.`,
  },
  {
    question: `What currency is used in Taniti?`,
    answer: `Taniti uses the U.S. dollar. Many businesses also accept euros and yen. Several banks handle currency exchange, and most businesses accept major credit cards.`,
  },
];
const stats = [
  { label: "Transactions every 24 hours", value: "44 million" },
  { label: "Assets under holding", value: "$119 trillion" },
  { label: "New users annually", value: "46,000" },
];
const values = [
  {
    name: "Be world-class",
    description:
      "Aut illo quae. Ut et harum ea animi natus. Culpa maiores et sed sint et magnam exercitationem quia. Ullam voluptas nihil vitae dicta molestiae et. Aliquid velit porro vero.",
  },
  {
    name: "Share everything you know",
    description:
      "Mollitia delectus a omnis. Quae velit aliquid. Qui nulla maxime adipisci illo id molestiae. Cumque cum ut minus rerum architecto magnam consequatur. Quia quaerat minima.",
  },
  {
    name: "Always learning",
    description:
      "Aut repellendus et officiis dolor possimus. Deserunt velit quasi sunt fuga error labore quia ipsum. Commodi autem voluptatem nam. Quos voluptatem totam.",
  },
];
const timeline = [
  {
    name: "Founded company",
    description:
      "Nihil aut nam. Dignissimos a pariatur et quos omnis. Aspernatur asperiores et dolorem dolorem optio voluptate repudiandae.",
    date: "Aug 2021",
    dateTime: "2021-08",
  },
  {
    name: "Secured $65m in funding",
    description:
      "Provident quia ut esse. Vero vel eos repudiandae aspernatur. Cumque minima impedit sapiente a architecto nihil.",
    date: "Dec 2021",
    dateTime: "2021-12",
  },
  {
    name: "Released beta",
    description:
      "Sunt perspiciatis incidunt. Non necessitatibus aliquid. Consequatur ut officiis earum eum quia facilis. Hic deleniti dolorem quia et.",
    date: "Feb 2022",
    dateTime: "2022-02",
  },
  {
    name: "Global launch of product",
    description:
      "Ut ipsa sint distinctio quod itaque nam qui. Possimus aut unde id architecto voluptatem hic aut pariatur velit.",
    date: "Dec 2022",
    dateTime: "2022-12",
  },
];

const Hero: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div data-testid="homepage-hero" className="bg-white">
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20 pt-25">
        <div
          aria-hidden="true"
          className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl shadow-stone-600/10 ring-1 ring-indigo-50 sm:-mr-80 lg:-mr-96"
        />
        {/* Image section */}

        <div className="relative isolate -z-10">
          <div
            aria-hidden="true"
            className="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
          ></div>
          <div className="overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-20">
              <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
                <div className="relative w-full lg:max-w-xl lg:shrink-0 xl:max-w-2xl">
                  <h1 className="text-pretty text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
                    Taniti Island, where adventure Awaits Beyond the Shore.
                  </h1>
                  <p className="mt-8 text-pretty text-lg font-medium text-slate-900 sm:max-w-md sm:text-xl/8 lg:max-w-none">
                    Taniti is a small, tropical island in the Pacific. While the
                    island has an area of less than 500 square miles, the
                    terrain is varied and includes both sandy and rocky beaches,
                    a small but safe harbor, lush tropical rainforests, and a
                    mountainous interior that includes a small, active volcano.
                    Taniti has an indigenous population of about 20,000. Until a
                    recent increase in tourism, most the Tanitian economy was
                    dominated by fishing or agriculture.
                  </p>
                </div>
                <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                  <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                    <div className="relative">
                      <img
                        alt="sap"
                        src="/taniti/taniti4.jpeg"
                        className="aspect-[2/3] w-full rounded-lg bg-slate-900/5 object-cover shadow-lg dark:bg-gray-700/5"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-slate-900/10" />
                    </div>
                  </div>
                  <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                    <div className="relative">
                      <img
                        alt="dining"
                        src="/taniti/taniti-dining2.jpg"
                        className="aspect-[2/3] w-full rounded-lg bg-slate-900/5 object-cover shadow-lg dark:bg-gray-700/5"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-slate-900/10 " />
                    </div>
                    <div className="relative">
                      <img
                        alt="saparasailing"
                        src="/taniti/parasailing.jpeg"
                        className="aspect-[2/3] w-full rounded-lg bg-slate-900/5 object-cover shadow-lg dark:bg-gray-700/5"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-slate-900/10 " />
                    </div>
                  </div>
                  <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                    <div className="relative">
                      <img
                        alt="boat"
                        src="/taniti/taniti-attraction3.jpg"
                        className="aspect-[2/3] w-full rounded-lg bg-slate-900/5 object-cover shadow-lg dark:bg-gray-700/5"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-slate-900/10 " />
                    </div>
                    <div className="relative">
                      <img
                        alt="goat yoga"
                        src="/taniti/goat-yoga.jpeg"
                        className="aspect-[2/3] w-full rounded-lg bg-slate-900/5 object-cover shadow-lg dark:bg-gray-700/5"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-slate-900/10" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Image section */}
        <div className=" mb-5 sm:mt-15 xl:mx-auto xl:max-w-7xl xl:px-8">
          <img
            alt=""
            src="/taniti/taniti-dining.avif"
            className="aspect-[3/2] w-full ring-2 ring-offset-6 border-2 border-[#003B6D] ring-[#003B6D] object-cover  -outline-offset-1 outline-black/5 xl:rounded-3xl dark:outline-white/10"
          />
        </div>

        {/* FAQ section */}
        <section id="faqs">
          <div className="bg-white">
            <div className="mx-auto max-w-7xl px-6 pb-20 pt-10">
              <div className="mx-auto max-w-4xl divide-y divide-slate-900/10">
                <h2 className="text-2xl font-bold leading-10 my-15 tracking-tight text-slate-900">
                  Frequently asked questions
                </h2>
                <dl className="mt-10 space-y-6 divide-y divide-slate-900/10">
                  {faqs.map((faq) => (
                    <Disclosure key={faq.question} as="div" className="pt-6">
                      <dt>
                        <DisclosureButton className="group flex w-full items-start justify-between text-left text-slate-900">
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
                        <p className="text-base leading-7 text-slate-900">
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

        {/* Logo cloud */}
        <div className="relative isolate -z-10 mt-32 sm:mt-48">
          <div className="absolute inset-x-0 top-1/2 -z-10 flex -translate-y-1/2 justify-center overflow-hidden [mask-image:radial-gradient(50%_45%_at_50%_55%,white,transparent)]">
            <svg
              aria-hidden="true"
              className="h-[40rem] w-[80rem] flex-none stroke-gray-200"
            >
              <defs>
                <pattern
                  x="50%"
                  y="50%"
                  id="e9033f3e-f665-41a6-84ef-756f6778e6fe"
                  width={200}
                  height={200}
                  patternUnits="userSpaceOnUse"
                  patternTransform="translate(-100 0)"
                >
                  <path d="M.5 200V.5H200" fill="none" />
                </pattern>
              </defs>
              <svg x="50%" y="50%" className="overflow-visible fill-gray-50">
                <path
                  d="M-300 0h201v201h-201Z M300 200h201v201h-201Z"
                  strokeWidth={0}
                />
              </svg>
              <rect
                fill="url(#e9033f3e-f665-41a6-84ef-756f6778e6fe)"
                width="100%"
                height="100%"
                strokeWidth={0}
              />
            </svg>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
      </div>
    </div>
  );
};

export default Hero;
