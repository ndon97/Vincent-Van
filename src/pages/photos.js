import PhotoCard from "../components/PhotoCard";
import Navbar from "../components/Navbar";
import Photos from "../components/Photos";

import van from "../public/images/van.jpg";
import van2 from "../public/images/van2.jpg";

const photoCards = [
  {
    id: 1,
    image: van,
    title: "First Day of Getting the Van",
    description:
      "What a joyous day getting the van, the adventure was just beggining",
  },

  {
    id: 2,
    image: van2,
    title: "Putting the fan in",
    description: "Beautiful day working on the fan putting the fan in",
  },
  {
    id: 1,
    image: van,
    title: "First Day of Getting the Van",
    description:
      "What a joyous day getting the van, the adventure was just beggining",
  },

  {
    id: 2,
    image: van2,
    title: "Putting the fan in",
    description: "Beautiful day working on the fan putting the fan in",
  },
  {
    id: 1,
    image: van,
    title: "First Day of Getting the Van",
    description:
      "What a joyous day getting the van, the adventure was just beggining",
  },

  {
    id: 2,
    image: van2,
    title: "Putting the fan in",
    description: "Beautiful day working on the fan putting the fan in",
  },
];

const photos = () => {
  const cards = photoCards.map((item) => {
    return <PhotoCard key={item.id} image={item.image} {...item} />;
  });

  return (
    <div className="bg-gray-200">
      <Navbar />
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-5 ml-5 ">
        {cards}
      </div>
    </div>
  );
};

export default photos;
