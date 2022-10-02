import Image from "next/image";

import broken from "../public/images/broken.jpg";

export default function Cardlg() {
  return (
    <div className="ml-3 mr-3 border-dashed border border-black mt-2 rounded-xl w-94/100 h-72 flex flex-row justify-center items-center">
      <div className="p-2 basis-1/4">
        <Image
          src={broken}
          alt=""
          height={270}
          width={200}
          className="card-img"
        ></Image>
      </div>
      <h5 className="text-2xl font-bold text-emerald-700 basis-1/4 underline underline-offset-4">
        The Day Our Van Broke Down
      </h5>
      <p className="mr-5 font-normal text-black text-center  ml-5 basis-1/2">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum. It is a long established fact that a reader will be
        distracted by the readable content of a page when looking at its layout.
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum is simply dummy text of the printing and
        typesetting industry.
      </p>
    </div>
  );
}
