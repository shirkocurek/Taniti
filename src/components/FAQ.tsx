"use client";

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

const faqs = [
  {
    question: `What services do you offer?`,
    answer: `The information environment is where human and machine cognition intersect to make sense of the world. It encompasses technology such as printing presses, cell phones, the web, and augmented reality, as well as content like books, videos, status updates, and online articles. These outputs move through multiple channels, such as television, radio, gaming platforms, social media, and in person. The information environment adapts to new social norms and technologies.`,
  },
  {
    question: `Do you offer virtual consultations?`,
    answer: `The Accelerator aims to speed the pace of knowledge development on how the modern information environment affects democratic society by creating shared scientific infrastructure.`,
  },
  {
    question: `How do I book an appointment?`,
    answer: `The Accelerator plans to develop various tools that could benefit the research community, such as samples of typical behavior on key platforms across multiple countries, standard sets of labeled data on different types of content, and a standard image-featurization pipeline to enable high-end image analysis by all scholars with basic skills in natural language processing.`,
  },
  {
    question: `Are your experts certified?`,
    answer: `The Accelerator has been generously funded by Princeton University, Microsoft, and the John S. and James L. Knight Foundation. Craig Newmark Philanthropies and the William and Flora Hewlett Foundation also supported the exploratory studies.`,
  },
  {
    question: `Do you provide emergency pet services?`,
    answer: `The Accelerator recognizes that many aspects of the information environment require study beyond the large social media platforms, including how misinformation spreads through mainstream media and websites, the ad tech ecosystem’s role in enabling the spread of low-quality content, and the networks of authors that support conspiracy theories. The Accelerator is not about one type of media but about identifying where we can speed science by investing in shared infrastructure.`,
  },
  {
    question: `What is your cancellation policy?`,
    answer: `This is another perennial challenge for large-scale scientific endeavors. Our exploratory studies have taught us that there is no one-size-fits-all approach. Different fields, and even different instruments within fields, use different access models. We are working to determine the best ways to manage access to what will be a limited resource. We are guided by the core principles of equity, peer review, and transparency.`,
  },
  {
    question: `Do you provide in-home visits?`,
    answer: `The Accelerator shares a common objective with other initiatives in the community to enable evidence-based policymaking on the information environment. We are committed to supporting existing and developing efforts while fulfilling a unique need in the community. For more on this, see our About page.`,
  },
];

const ContactHero: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div data-testid="homepage-hero" className="bg-white px-16">
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20 pt-25">
        <div
          aria-hidden="true"
          className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl shadow-stone-600/10 ring-1 ring-indigo-50 sm:-mr-80 lg:-mr-96"
        />
        <section id="faqs">
          <div className="bg-white">
            <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
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
  );
};

export default ContactHero;
