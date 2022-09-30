import Image from "next/image";

import van from "../public/images/van.jpg";

export default function PhotoCard(props) {
  return (
    <div className="max-w-sm mr-3 border-solid border border-black mt-2 rounded">
      <div className="p-1 rounded-lg">
        <Image src={props.image} alt="" height={300} width={500}></Image>
      </div>
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
        {props.title}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400 text-center pb-4">
        {props.description}
      </p>
    </div>
  );
}
