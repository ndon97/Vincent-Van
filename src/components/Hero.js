/* This example requires Tailwind CSS v2.0+ */
import {
  LifebuoyIcon,
  NewspaperIcon,
  PhoneIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

import Image from "next/image";
import Link from "next/link";
import background from "../public/images/background.jpeg";

const supportLinks = [
  {
    name: "Build",
    href: "#",
    description:
      "Everything you need to know about building a Van all in one place",
    icon: PhoneIcon,
  },
  {
    name: "Where to stay",
    href: "#",
    description: "Find safe locations to camp and park your Van",
    icon: LifebuoyIcon,
  },
  {
    name: "Community",
    href: "#",
    description:
      "Meet up with other people in the community, to share and explore",
    icon: UserIcon,
  },
];

export default function Hero() {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="relative bg-gray-800 pb-32">
        <div className="absolute inset-0">
          <Image
            className="h-full w-full object-cover bg-contain"
            src={background}
            alt=""
            height={900}
          />
          <div
            className="absolute inset-0 bg-gray-700 mix-blend-multiply"
            aria-hidden="true"
          />
        </div>
        <div className="relative mx-auto max-w-7xl py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-emerald-700 md:text-5xl lg:text-6xl">
            Van-Dal
          </h1>
          <p className="mt-6 max-w-3xl text-xl text-gray-300">
            Everything you need to know about Van life in one place
          </p>
        </div>
      </div>

      {/* Overlapping cards */}
      <section
        className="relative z-10 mx-auto -mt-32 max-w-7xl px-4 pb-32 sm:px-6 lg:px-8"
        aria-labelledby="contact-heading"
      >
        <h2 className="sr-only" id="contact-heading">
          Contact us
        </h2>
        <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8">
          {supportLinks.map((link) => (
            <div
              key={link.name}
              className="flex flex-col rounded-2xl bg-white shadow-xl"
            >
              <div className="relative flex-1 px-6 pt-16 pb-8 md:px-8 bg-gray-300">
                <div className="absolute top-0 inline-block -translate-y-1/2 transform rounded-xl bg-emerald-700 p-5 shadow-lg">
                  <link.icon
                    className="h-6 w-6 text-white"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="text-xl font-medium text-gray-900">
                  {link.name}
                </h3>
                <p className="mt-4 text-base text-gray-500">
                  {link.description}
                </p>
              </div>
              <div className="rounded-bl-2xl rounded-br-2xl bg-gray-400 p-6 md:px-8">
                <a
                  href={link.href}
                  className="text-base font-medium text-cyan-200 hover:text-indigo-600"
                >
                  Take me there<span aria-hidden="true"> &rarr;</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
