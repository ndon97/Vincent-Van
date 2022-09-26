/* This example requires Tailwind CSS v2.0+ */
import {
  GlobeAmericasIcon,
  ArrowPathIcon,
  CircleStackIcon,
} from "@heroicons/react/24/outline";

import Image from "next/image";
import Link from "next/link";
import van from "../public/images/background.jpeg";

const supportLinks = [
  {
    name: "Build",
    href: "build",
    description: "Every step of the build",
    icon: CircleStackIcon,
  },
  {
    name: "Adventures",
    href: "#",
    description: "Coming soon...",
    icon: GlobeAmericasIcon,
  },
  {
    name: "Updates",
    href: "updates",
    description: "Keep up to date with anything and everything Vincent",
    icon: ArrowPathIcon,
  },
];

export default function Hero() {
  return (
    <div className="bg-gray-400">
      {/* Header */}
      <div className="relative   pb-32">
        <div className="absolute inset-0">
          <Image
            className="h-full w-full object-cover bg-contain"
            src={van}
            alt=""
            height={1000}
          />
          <div
            className="absolute inset-0 bg-gray-700 mix-blend-multiply"
            aria-hidden="true"
          />
        </div>
        <div className="relative mx-auto max-w-7xl py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-emerald-700 md:text-5xl lg:text-6xl">
            Vincent
          </h1>
          <p className="mt-6 max-w-3xl text-xl text-gray-300">
            The simple life of Vin - the Van
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
              <div className="relative flex-1 px-6 pt-16 pb-8 md:px-8 bg-teal-700">
                <div className="absolute top-0 inline-block -translate-y-1/2 transform rounded-xl bg-emerald-700 p-5 shadow-lg">
                  <link.icon
                    className="h-6 w-6 text-white"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="text-xl font-medium text-black">{link.name}</h3>
                <p className="mt-4 text-base text-white">{link.description}</p>
              </div>
              <div className="rounded-bl-2xl rounded-br-2xl bg-teal-900 p-6 md:px-8">
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
