"use client";

import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
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
    <div data-testid="homepage-hero" className="bg-white px-16">
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20 pt-25">
        <div
          aria-hidden="true"
          className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl shadow-stone-600/10 ring-1 ring-indigo-50 sm:-mr-80 lg:-mr-96"
        />
        {/* Image section */}

        {/* Feature section */}
        <div className="mx-auto mt-45 max-w-7xl px-6 lg:px-8">
          <div className="flex gap-2">
            <div className="max-w-2xl">
              <h2 className="text-pretty text-4xl font-semibold tracking-tight text-[#003B6D] sm:text-5xl">
                About Paradigm Pet Professionals.
              </h2>
              <h3 className="mt-5 text-2xl font-semibold tracking-tight text-[#003B6D]">
                Our Mission,
              </h3>

              <p className="max-w-400 mt-6 text-lg/8 text-[#003B6D]">
                Pets are nature&apos;s gift to humanity. It has been
                scientifically proven that opening our homes and hearts to a pet
                increases our longevity and improves our overall quality of life
                as well as the lives of our pets. At Pet Paradigm Professionals,
                our mission is to offer resources to help you care for your
                furry, scaly, feathery, and slimy loved ones. Our pet experts—or
                “Pexperts”—have been working with pet owners and professionals
                alike for the past twelve years. They offer one-on-one
                consultations with current and prospective pet owners as well as
                group presentations designed for veterinary, pet shelter, and
                pet breeding professionals.
              </p>
            </div>
            <div className="xl:mx-auto xl:max-w-7xl xl:px-8">
              <img
                alt=""
                src="/images/Team.jpg"
                className="w-500 aspect-[5/2] object-cover outline outline-1 -outline-offset-1 outline-black/5 xl:rounded-3xl"
              />
            </div>
          </div>
          <h3 className="mt-10 text-2xl font-semibold tracking-tight text-[#003B6D]">
            Our Values,
          </h3>
          <dl className="mx-auto mt-6 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base/7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {values.map((value) => (
              <div key={value.name}>
                <dt className="font-semibold text-[#003B6D]">{value.name}</dt>
                <dd className="mt-1 text-[#003B6D]">{value.description}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-16 max-w-2xl text-lg/8 text-[#003B6D]">
            Looking for basic pet care advice for the most common type of pets?
            Need additional help determining which type of pet is right for you
            and your family? We will work with you and provide tailored
            evidence-based pet care to ensure lifelong health and wellness of
            your new companion.
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <a
              href="/api/auth/login?returnTo=/ipp/home"
              className="text-md flex max-w-100 rounded-md bg-[#003B6D] px-3.5 py-2.5 font-semibold text-white shadow-sm transition-transform ease-in-out hover:bg-stone-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Book a consultation with Pexperts!
            </a>
            <a href="/about" className="text-sm/6 font-semibold text-[#003B6D]">
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
          <p className="mt-16 max-w-2xl text-lg/8 text-[#003B6D]">
            Looking for your new best friend? The following organizations can
            help you find and adopt the perfect companion:
          </p>
          <ul className="mt-6 max-w-4xl text-lg/8 text-[#003B6D]">
            <li className="mt-6 max-w-4xl text-lg/8 text-[#003B6D]">
              • General Pet Resources:{" "}
              <a
                className="font-semibold underline"
                href="https://bestfriends.org/pet-care-resources/issues/pet-adoption-resources"
              >
                https://bestfriends.org/pet-care-resources/issues/pet-adoption-resources
              </a>
            </li>
            <li className="mt-6 max-w-4xl text-lg/8 text-[#003B6D]">
              • ASPCA:{" "}
              <a
                className="font-semibold underline"
                href="https://bestfriends.org/pet-care-resources/issues/pet-adoption-resources"
              >
                https://www.aspca.org/
              </a>
            </li>
            <li className="mt-6 max-w-4xl text-lg/8 text-[#003B6D]">
              • Fish Rescue:{" "}
              <a
                className="font-semibold underline"
                href="https://bestfriends.org/pet-care-resources/issues/pet-adoption-resources"
              >
                https://www.sterlingshelter.org/humane-society/koi-fish-rescue/
              </a>
            </li>
            <li className="mt-6 max-w-4xl text-lg/8 text-[#003B6D]">
              • Snake Rescue:{" "}
              <a
                className="font-semibold underline"
                href="https://bestfriends.org/pet-care-resources/issues/pet-adoption-resources"
              >
                https://savethesnakes.org/snakerescuecall/
              </a>
            </li>
            <li className="mt-6 max-w-4xl text-lg/8 text-[#003B6D]">
              • Bird Rescue:{" "}
              <a
                className="font-semibold underline"
                href="https://bestfriends.org/pet-care-resources/issues/pet-adoption-resources"
              >
                https://ftlob.rescuegroups.org/
              </a>
            </li>
          </ul>
          <p className="mt-6 max-w-2xl text-lg/8 text-[#003B6D]">
            We are also happy to help you navigate the adoption process! We will
            guide you through each step in the process from determining which
            type of pet is best suited for your family and home environment, to
            completing the necessary paperwork, to bringing your new loved one
            home. Please fill out our contact form to request a consultation. We
            will contact you within 48 hours to schedule a consultation. All
            fields are required.
          </p>
        </div>

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
