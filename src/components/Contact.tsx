"use client";

import { useState } from "react";

const ContactHero: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-gradient-to-r from-white">
      <div className="relative isolate overflow-hidden">
        <div className="mx-auto mt-10 max-w-xl pt-30 sm:pt-46 lg:pt-48">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Contact Taniti, We would love to hear from you!
            </h1>
          </div>
        </div>
        <div className="mt-6 flex justify-center">
          <img
            alt=""
            src="/taniti/Taniti-logo2.png"
            className="object-cover w-30 h-30"
          />
        </div>
        <div className="mx-auto max-w-4xl px-15 pb-40 pt-10">
          {/* <!-- Contact Form --> */}
          <div className="rounded-md border border-gray-300 bg-white p-2 shadow-lg dark:border-strokedark ">
            <form action="#">
              <div className="p-6.5">
                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                  <div className="w-full xl:w-1/2">
                    <label className="mb-3 block text-sm font-medium text-slate-900">
                      First name <span className="text-meta-1">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your first name"
                      className="w-full rounded border-[1.5px] placeholder:text-slate-900/50 border-stroke bg-transparent px-5 py-3 text-slate-900 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                  </div>

                  <div className="w-full xl:w-1/2">
                    <label className="mb-3 block text-sm font-medium text-slate-900">
                      Last name <span className="text-meta-1">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your last name"
                      className="w-full rounded border-[1.5px] placeholder:text-slate-900/50 border-stroke bg-transparent px-5 py-3 text-slate-900 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                  </div>
                </div>

                {/* Phone number */}
                <div className="mb-4.5">
                  <label className="mb-3 block text-sm font-medium text-slate-900">
                    Phone number <span className="text-meta-1">*</span>
                  </label>
                  <input
                    type="tel"
                    inputMode="tel"
                    placeholder="Enter your phone number"
                    className="w-full rounded border-[1.5px] placeholder:text-slate-900/50 border-stroke bg-transparent px-5 py-3 text-slate-900 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />
                </div>

                <div className="mb-4.5">
                  <label className="mb-3 block text-sm font-medium text-slate-900">
                    Email <span className="text-meta-1">*</span>
                  </label>
                  <input
                    required
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full rounded border-[1.5px] placeholder:text-slate-900/50 border-stroke bg-transparent px-5 py-3 text-slate-900 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />
                </div>

                <div className="mb-6">
                  <label className="mb-3 block text-sm font-medium text-slate-900">
                    Message
                  </label>
                  <textarea
                    rows={6}
                    placeholder="Type your message"
                    className="w-full rounded border-[1.5px] placeholder:text-slate-900/50 border-stroke bg-transparent px-5 py-3 text-slate-900 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  ></textarea>
                </div>

                <button className="flex w-full justify-center text-white rounded bg-slate-900 p-3 font-medium text-semigray hover:bg-opacity-90">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactHero;

<div className="mx-auto max-w-4xl px-15 pb-20 pt-10">
  {/* <!-- Contact Form --> */}
  <div className="rounded-md border border-stroke bg-white p-2 shadow-default dark:border-strokedark ">
    <form action="#">
      <div className="p-6.5">
        <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
          <div className="w-full xl:w-1/2">
            <label className="mb-3 block text-sm font-medium text-black dark:text-white">
              First name
            </label>
            <input
              type="text"
              placeholder="Enter your first name"
              className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            />
          </div>

          <div className="w-full xl:w-1/2">
            <label className="mb-3 block text-sm font-medium text-black dark:text-white">
              Last name
            </label>
            <input
              type="text"
              placeholder="Enter your last name"
              className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            />
          </div>
        </div>

        <div className="mb-4.5">
          <label className="mb-3 block text-sm font-medium text-black dark:text-white">
            Email <span className="text-meta-1">*</span>
          </label>
          <input
            required
            type="email"
            placeholder="Enter your email address"
            className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
          />
        </div>

        <div className="mb-4.5">
          <label className="mb-3 block text-sm font-medium text-black dark:text-white">
            Subject
          </label>
          <input
            type="text"
            placeholder="Select your subject"
            className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
          />
        </div>

        <div className="mb-6">
          <label className="mb-3 block text-sm font-medium text-black dark:text-white">
            Message
          </label>
          <textarea
            rows={6}
            placeholder="Type your message"
            className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
          ></textarea>
        </div>

        <button className="flex w-full justify-center rounded bg-[#003B6D] p-3 font-medium text-semigray hover:bg-opacity-90">
          Send Message
        </button>
      </div>
    </form>
  </div>
</div>;
