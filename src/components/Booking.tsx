"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { BedDoubleIcon, FerrisWheel, Minus, Plane, Plus } from "lucide-react";
import {
  CalendarIcon,
  MinusIcon,
  PaperAirplaneIcon,
  PlusIcon,
} from "@heroicons/react/24/outline";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import {
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { cn } from "@/lib/utils";

const ContactHero: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-gradient-to-r from-white">
      <div className="relative isolate overflow-hidden">
        <div className="mx-auto mt-10 max-w-xl pt-30 sm:pt-46 lg:pt-48">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Book Your Stay Today!
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

                <div className="my-15 flex flex-wrap gap-6">
                  <Menu as="div" className="relative inline-block">
                    <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                      Lodging
                      <BedDoubleIcon className="ml-2 h-4 w-4 text-slate-900" />
                      <ChevronDownIcon
                        aria-hidden="true"
                        className="-mr-1 size-5 text-gray-400"
                      />
                    </MenuButton>

                    <MenuItems
                      transition
                      className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg outline outline-1 outline-black/5 transition data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                    >
                      <div className="py-1">
                        <MenuItem>
                          <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                          >
                            Regal Hotel
                          </a>
                        </MenuItem>
                        <MenuItem>
                          <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                          >
                            Rainforest Huts
                          </a>
                        </MenuItem>
                        <MenuItem>
                          <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                          >
                            Beachfront Cabanas
                          </a>
                        </MenuItem>
                      </div>
                    </MenuItems>
                  </Menu>

                  <Menu as="div" className="relative inline-block">
                    <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                      Transportation
                      <Plane className="ml-2 h-4 w-4 text-slate-900" />
                      <ChevronDownIcon
                        aria-hidden="true"
                        className="-mr-1 size-5 text-gray-400"
                      />
                    </MenuButton>

                    <MenuItems
                      transition
                      className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg outline outline-1 outline-black/5 transition data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                    >
                      <div className="py-1">
                        <MenuItem>
                          <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                          >
                            Bus
                          </a>
                        </MenuItem>
                        <MenuItem>
                          <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                          >
                            Airplane
                          </a>
                        </MenuItem>
                        <MenuItem>
                          <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                          >
                            Boat
                          </a>
                        </MenuItem>
                      </div>
                    </MenuItems>
                  </Menu>

                  <Menu as="div" className="relative inline-block">
                    <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                      Attractions
                      <FerrisWheel className="ml-2 h-4 w-4 text-slate-900" />
                      <ChevronDownIcon
                        aria-hidden="true"
                        className="-mr-1 size-5 text-gray-400"
                      />
                    </MenuButton>

                    <MenuItems
                      transition
                      className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg outline outline-1 outline-black/5 transition data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                    >
                      <div className="py-1">
                        <MenuItem>
                          <a
                            href="#"
                            className="flex space-between justify-between px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                          >
                            Volcano Tours
                          </a>
                        </MenuItem>
                        <MenuItem>
                          <a
                            href="#"
                            className="flex px-4 py-2 justify-between text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                          >
                            Fishing Boat Tours
                          </a>
                        </MenuItem>
                        <MenuItem>
                          <a
                            href="#"
                            className="flex px-4 py-2 justify-between text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                          >
                            Snorkeling
                          </a>
                        </MenuItem>
                        <MenuItem>
                          <a
                            href="#"
                            className="flex px-4 py-2 justify-between text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                          >
                            Rainforest Tours
                          </a>
                        </MenuItem>
                        <MenuItem>
                          <a
                            href="#"
                            className="flex px-4 py-2 justify-between text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                          >
                            Zip-lining
                          </a>
                        </MenuItem>
                        <MenuItem>
                          <a
                            href="#"
                            className="flex px-4 py-2 justify-between text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                          >
                            Museum of History
                          </a>
                        </MenuItem>
                      </div>
                    </MenuItems>
                  </Menu>

                  <Menu as="div" className="relative inline-block">
                    <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                      Party Size
                      <BedDoubleIcon className="ml-2 h-4 w-4 text-slate-900" />
                      <ChevronDownIcon
                        aria-hidden="true"
                        className="-mr-1 size-5 text-gray-400"
                      />
                    </MenuButton>

                    <MenuItems
                      transition
                      className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg outline outline-1 outline-black/5 transition data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                    >
                      <div className="py-1">
                        <MenuItem>
                          <a
                            href="#"
                            className="flex space-between justify-between px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                          >
                            Adults
                            <div className="flex">
                              <PlusIcon className="ml-2 h-4 w-4 text-slate-900" />
                              <MinusIcon className="ml-2 h-4 w-4 text-slate-900" />
                            </div>
                          </a>
                        </MenuItem>
                        <MenuItem>
                          <a
                            href="#"
                            className="flex px-4 py-2 justify-between text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                          >
                            kids
                            <div className="flex">
                              <PlusIcon className="ml-2 h-4 w-4 text-slate-900" />
                              <MinusIcon className="ml-2 h-4 w-4 text-slate-900" />
                            </div>
                          </a>
                        </MenuItem>
                      </div>
                    </MenuItems>
                  </Menu>

                  <FormItem className="flex flex-col min-w-0">
                    <FormLabel className="text-white mb-1">Dates</FormLabel>
                    <FormMessage />
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            id="date"
                            name="dates"
                            variant={"outline"}
                            className="w-full min-w-[200px] shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 justify-start text-left font-normal"
                          >
                            <CalendarIcon className="text-slate-900 font-semibold h-4 w-4 opacity-50 mr-2" />
                            <span className="text-slate-900 font-semibold">
                              Select your dates
                            </span>
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent
                        className="w-auto p-0 max-w-[90vw]"
                        align="start"
                        side="bottom"
                        sideOffset={4}
                      >
                        <Calendar
                          initialFocus
                          mode="range"
                          numberOfMonths={2}
                          className="max-w-full"
                          disabled={(date) =>
                            date < new Date(new Date().setHours(0, 0, 0, 0))
                          }
                        />
                      </PopoverContent>
                    </Popover>
                  </FormItem>
                </div>
                <div className="mb-6"></div>

                <button className="flex w-full justify-center text-white rounded bg-slate-900 p-3 font-medium text-semigray hover:bg-opacity-90">
                  Book!
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
