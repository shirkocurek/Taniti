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
    question: `How often should I walk my dog?`,
    answer: `The information environment is where human and machine cognition intersect to make sense of the world. It encompasses technology such as printing presses, cell phones, the web, and augmented reality, as well as content like books, videos, status updates, and online articles. These outputs move through multiple channels, such as television, radio, gaming platforms, social media, and in person. The information environment adapts to new social norms and technologies.`,
  },
  {
    question: `What’s the best diet for my dog?`,
    answer: `The Accelerator aims to speed the pace of knowledge development on how the modern information environment affects democratic society by creating shared scientific infrastructure.`,
  },
  {
    question: `How can I stop my dog from barking too much?`,
    answer: `The Accelerator plans to develop various tools that could benefit the research community, such as samples of typical behavior on key platforms across multiple countries, standard sets of labeled data on different types of content, and a standard image-featurization pipeline to enable high-end image analysis by all scholars with basic skills in natural language processing.`,
  },
  {
    question: `When should I start training my puppy?`,
    answer: `The Accelerator has been generously funded by Princeton University, Microsoft, and the John S. and James L. Knight Foundation. Craig Newmark Philanthropies and the William and Flora Hewlett Foundation also supported the exploratory studies.`,
  },
  {
    question: `How often should my dog see the vet?`,
    answer: `The Accelerator recognizes that many aspects of the information environment require study beyond the large social media platforms, including how misinformation spreads through mainstream media and websites, the ad tech ecosystem’s role in enabling the spread of low-quality content, and the networks of authors that support conspiracy theories. The Accelerator is not about one type of media but about identifying where we can speed science by investing in shared infrastructure.`,
  },
  {
    question: `Why is my dog chewing everything?`,
    answer: `This is another perennial challenge for large-scale scientific endeavors. Our exploratory studies have taught us that there is no one-size-fits-all approach. Different fields, and even different instruments within fields, use different access models. We are working to determine the best ways to manage access to what will be a limited resource. We are guided by the core principles of equity, peer review, and transparency.`,
  },
];

const timeline = [
  {
    name: "Diet & Exercise",
    description:
      "Throughout dogs’ lifespans, they should generally be fed fewer meals as they mature. Puppies should be nursed the first two months, then introduced to three meals per day when they are about three to six months years old. Their food intake should be reduced to two meals per day when they are six months to one year old and finally reduced to one meal after they reach one year old. And a dog’s typical body mass is composed of somewhere between 60 and 70 percent water. The ASPCA says just a 10 percent decrease in body water can cause illness, and a 15 percent loss can cause death, so make sure you keep your pooch hydrated!",
    date: "Aug 2021",
    dateTime: "2021-08",
  },
  {
    name: "Grooming & Handling",
    description:
      "Keeping your furry family member clean is important to its health. So be sure to brush frequently to reduce the amount of shedding and prevent matted and tangled fur that can prove to be extremely difficult to remove. Check for insects such as ticks and fleas, especially after visiting heavily wooded areas. Bathing is not only important to your dog’s health but can be an exercise depending on how strong willed the dog is. Rinse all of the soap out, as any residual soap can result in a rash. Be sure the soap is formulated for your puppy or dog, since harsh soaps can cause allergic reactions. And as always, be careful how you handle your loved one. No matter the size of your dog, you need to be cautious as you carry your canine. If you have a small dog, then cradle the pup with one hand under the chest and the forearm supporting the back half. If it is a large dog, reach under the belly with both your arms perpendicular to the dog, and use each arm to support the chest and rear as you lift.",
    date: "Dec 2021",
    dateTime: "2021-12",
  },
  {
    name: "Vaccinations & Medications",
    description:
      "You should always consult with your veterinarian, but there is a core set of vaccines that are typically recommended. Vaccines that reduce the exposure risk to things such as hepatitis, rabies, and parvovirus. Others may be determined by your vet depending on the environment in which the dog resides. Some of these include Bordetella bronchiseptica, Borrelia burgdorferi, and Leptospira bacteria.",
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
                Dogs care tips and resources.
              </h1>
              <div className="mt-6 max-w-3xl lg:mt-0 xl:col-end-1 xl:row-start-1">
                <p className="text-pretty text-lg font-medium text-[#003B6D] sm:text-xl/8">
                  The domestic dog is an extremely social animal and offers a
                  diverse variety of choices as there are well over 300 breeds
                  recognized by the World Canine Organization. Adopting a dog
                  offers mutual benefits between dog and owner. Many studies
                  cite the social benefits of having a companion as well as the
                  reduced feelings of loneliness from adopting a dog.{" "}
                  <a
                    className="font-bold underline"
                    href="https://www.ahajournals.org/doi/10.1161/CIRCOUTCOMES.119.005554"
                  >
                    Studies even show medical indicators such as reduced blood
                    pressure and improved lipid profiles.
                  </a>{" "}
                  If you have a dog, it is important to make sure that you care
                  for your dog; be mindful of what you feed your dog and provide
                  enough opportunities for exercise. In this page, you will find
                  more information about how to care for your pets throughout
                  the various stages of their lives.
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
                src="/images/dog1.jpg"
                className=" aspect-[6/5] w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-30"
              />
            </div>
          </div>
          <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
          <div className="mx-auto mt-5 max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-3">
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

      <div data-testid="homepage-hero" className="bg-white px-16">
        <div className="relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20 pt-10">
          <div
            aria-hidden="true"
            className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl shadow-stone-600/10 ring-1 ring-indigo-50 sm:-mr-80 lg:-mr-96"
          />
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

          <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
        </div>
      </div>
    </>
  );
};

export default Hero;
