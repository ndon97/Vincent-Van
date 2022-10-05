import Image from "next/image";

import van from "../public/images/van.jpg";

export default function PhotoCard(props) {
  return (
    <div className="max-w-sm border-solid border border-black mt-2 rounded-xl bg-teal-700 basis-1/4 shadow-sm">
      <div className="p-2">
        <Image
          src={props.image}
          alt=""
          height={300}
          width={500}
          className="card-img"
        ></Image>
      </div>
      <h5 className="text-2xl font-bold tracking-tight text-teal-200 text-center">
        {props.title}
      </h5>
      <p className="font-normal text-gray-700text-white text-center pb-10 pt-4">
        {props.description}
      </p>
    </div>
  );
}
