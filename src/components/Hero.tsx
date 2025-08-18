"use client";

import { JSX, SVGProps, useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import {
  ArrowRightIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  AcademicCapIcon,
  CheckCircleIcon,
  HandRaisedIcon,
  RocketLaunchIcon,
  SparklesIcon,
  SunIcon,
  UserGroupIcon,
} from "@heroicons/react/20/solid";



const blogPosts = [
  {
    id: 1,
    title: 'Choose from a variety of dining options.',
    href: '#',
    description:
      'Choose from a variety of dining, leisure, and adventure activities options.',
    imageUrl:
      '/taniti/taniti-food.jpeg',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    author: {
      name: 'Michael Foster',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    id: 2,
    title: 'Choose from a variety of activities.',
    href: '#',
    description: 'Optio cum necessitatibus dolor voluptatum provident commodi et. Qui aperiam fugiat nemo cumque.',
    imageUrl:
      '/taniti/parasailing.jpeg',
    date: 'Mar 10, 2020',
    datetime: '2020-03-10',
    author: {
      name: 'Lindsay Walton',
      imageUrl:
        'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    id: 3,
    title: 'Asperiores mollitia et dolor autem modi sit eius quisquam',
    href: '#',
    description:
      'Cupiditate maiores ullam eveniet adipisci in doloribus nulla minus. Voluptas iusto libero adipisci rem et corporis.',
    imageUrl:
      '/taniti/tahiti2.jpg',
    date: 'Feb 12, 2020',
    datetime: '2020-02-12',
    author: {
      name: 'Tom Cook',
      imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    id: 4,
    title: 'Asperiores mollitia et dolor autem modi sit eius quisquam',
    href: '#',
    description:
      'Cupiditate maiores ullam eveniet adipisci in doloribus nulla minus. Voluptas iusto libero adipisci rem et corporis.',
    imageUrl:
      '/taniti/taniti-bus.jpeg',
    date: 'Feb 12, 2020',
    datetime: '2020-02-12',
    author: {
      name: 'Tom Cook',
      imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
]




export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-white">
      <main className="relative isolate">  
      <div className="mx-auto px-10 py-30 lg:px-10">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none text-center">
            <h2 className="text-balance text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
              Plan Your Trip.
            </h2>
            <p className="mt-2 text-lg/8 text-center text-slate-900 max-w-xl">Choose from a variety of dining, leisure, and adventure activities options. Choose from a variety of dining, leisure, and adventure activities options.</p>
          </div>
          <div className="mx-auto px-10 mt-16 grid auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:grid-cols-4">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="relative h-50 isolate flex flex-col justify-end brightness-150 hover:brightness-200 transition-transform ease-in-out overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
              >
                <img alt="" src={post.imageUrl} className="absolute inset-0 -z-10 size-full object-cover" />
                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
                <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                <h3 className="mt-3 text-lg/6 font-medium text-white underline-offset-2 underline">
                  <a href={post.href}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
              </article>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
