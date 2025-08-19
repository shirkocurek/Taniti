"use client";

import { JSX, SVGProps, useState } from "react";

const blogPosts = [
  {
    id: 1,
    title: "Choose from a variety of dining options.",
    href: "/dining",
    description:
      "Choose from a variety of dining, leisure, and adventure activities options.",
    imageUrl: "/taniti/taniti-food.jpeg",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    author: {
      name: "Michael Foster",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: 2,
    title: "Explore the Island's Attractions",
    href: "/attractions",
    description:
      "Optio cum necessitatibus dolor voluptatum provident commodi et. Qui aperiam fugiat nemo cumque.",
    imageUrl: "/taniti/parasailing.jpeg",
    date: "Mar 10, 2020",
    datetime: "2020-03-10",
    author: {
      name: "Lindsay Walton",
      imageUrl:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: 3,
    title: "Discover a new place to stay",
    href: "/stays",
    description:
      "Cupiditate maiores ullam eveniet adipisci in doloribus nulla minus. Voluptas iusto libero adipisci rem et corporis.",
    imageUrl: "/taniti/tahiti2.jpg",
    date: "Feb 12, 2020",
    datetime: "2020-02-12",
    author: {
      name: "Tom Cook",
      imageUrl:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: 4,
    title: "Learn how to get around",
    href: "/transportation",
    description:
      "Cupiditate maiores ullam eveniet adipisci in doloribus nulla minus. Voluptas iusto libero adipisci rem et corporis.",
    imageUrl: "/taniti/taniti-bus.jpeg",
    date: "Feb 12, 2020",
    datetime: "2020-02-12",
    author: {
      name: "Tom Cook",
      imageUrl:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
];

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-white">
      <main className="relative isolate">
        <div className="mx-auto px-10 py-20 lg:px-10">
          <div className="mx-auto max-w-5xl px-6 lg:px-8">
            <div className="mx-auto max-w-5xl pt-15 pb-15">
              <div className="text-center">
                <h1 className="text-balance text-5xl font-semibold tracking-tight text-slate-900">
                  Plan Your Trip,
                </h1>
                <p className="text-pretty mt-10 text-lg font-medium text-slate-900 sm:text-xl/8">
                  From lodging and dining to transportation and local
                  attractions, Taniti makes it easy to create the perfect island
                  getaway. Explore your options below and start building the
                  experience that’s right for you.
                </p>
              </div>
            </div>
          </div>
          <div className="mx-auto px-10 mb-16 grid auto-rows-fr grid-cols-1 gap-8 mt-10 lg:mx-0 lg:grid-cols-4">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="relative h-50 isolate flex flex-col justify-end brightness-150 hover:brightness-200 transition-transform ease-in-out overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
              >
                <img
                  alt="menu item photo"
                  src={post.imageUrl}
                  className="absolute inset-0 -z-10 size-full object-cover"
                />
                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
                <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                <h3 className="mt-3 text-lg/6 font-normal text-white ">
                  <a href={post.href}>
                    <span className="absolute inset-0" />
                    {post.title} &rarr;
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
