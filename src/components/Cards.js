import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/20/solid";
import Image from "next/image";

import soundDead from "../public/images/soundDead.jpg";
import fan from "../public/images/fan.jpg";

const people = [
  {
    name: "Sound Deadner",
    description: "Installing sound deadner to limit noise pollution",
    cost: "250",
    email: "janecooper@example.com", // images modal
    imageUrl: soundDead,
  },
  {
    name: "Sound Deadner",
    description: "Installing sound deadner to limit noise pollution",
    cost: "250",
    email: "janecooper@example.com", // images modal
    imageUrl: soundDead,
  },
  {
    name: "Fan",
    description: "Installing our roof fan!",
    cost: "550",
    email: "janecooper@example.com", // images modal
    imageUrl: fan,
  },
  {
    name: "Sound Deadner",
    description: "Installing sound deadner to limit noise pollution",
    cost: "250",
    email: "janecooper@example.com", // images modal
    imageUrl: soundDead,
  },
  {
    name: "Fan",
    description: "Installing our roof fan!",
    cost: "550",
    email: "janecooper@example.com", // images modal
    imageUrl: fan,
  },
  // More people...
];

export default function Example() {
  return (
    <ul
      role="list"
      className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-5 ml-5"
    >
      {people.map((person) => (
        <li
          key={person.email}
          className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow"
        >
          <div className="flex flex-1 flex-col p-8">
            <Image
              className="mx-auto h-32 w-32 flex-shrink-0 rounded-full"
              src={person.imageUrl}
              alt=""
            />
            <h3 className="mt-6 text-sm font-medium text-gray-900">
              {person.name}
            </h3>
            <dl className="mt-1 flex flex-grow flex-col justify-between">
              <dt className="sr-only">description</dt>
              <dd className="text-sm text-gray-500">{person.description}</dd>
              <dt className="sr-only">Cost</dt>
              <dd className="mt-3">
                <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800">
                  ${person.cost}
                </span>
              </dd>
            </dl>
          </div>
          <div>
            <div className="-mt-px flex divide-x divide-gray-200">
              <div className="flex w-0 flex-1">
                <a
                  href={`mailto:${person.email}`} // images modal
                  className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center rounded-bl-lg border border-transparent py-4 text-sm font-medium text-gray-400 hover:text-gray-500"
                >
                  <EnvelopeIcon
                    className="h-5 w-5 text-gray-200"
                    aria-hidden="true"
                  />
                  <span className="ml-3">Images</span>
                </a>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
