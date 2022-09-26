import Image from "next/image";

import van from "../public/images/van.jpg";
import van2 from "../public/images/van2.jpg";

const products = [
  {
    id: 1,
    name: "First day",
    description: "First day we bought the Vincent",
    options: "8 colors",
    imageSrc: van,
    imageAlt: "",
  },
  {
    id: 2,
    name: "Peaceful",
    price: "$32",
    description: "Beautiful picture of Vincent",
    options: "Black",
    imageSrc: van2,
    imageAlt: "",
  },
  // More products...
];

export default function Photos() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white"
            >
              <div className="aspect-w-3 aspect-h-4 bg-gray-200 group-hover:opacity-75 sm:aspect-none sm:h-96">
                <Image
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center sm:h-full sm:w-full"
                />
              </div>
              <div className="flex flex-1 flex-col space-y-2 p-4">
                <h3 className="text-sm font-medium text-gray-900">
                  <span aria-hidden="true" className="absolute inset-0" />
                  {product.name}
                </h3>
                <p className="text-sm text-gray-500">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
