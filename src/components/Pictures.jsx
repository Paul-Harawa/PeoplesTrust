import { div } from "framer-motion/client";
import { useState} from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useSwipeable } from "react-swipeable";


const ImageGallery = () => {
  const images = [
    {
      src: "./src/assets/images/p1.jpg",
      text: "The Senior group Kumponda of  Traditional Authority Kapeni Blantyre along with his village chiefs has cerebrated and welcomed the coming of Peoples Trust organization in their area and promised their joint support for the organization cause.",
    },
    {
      src: "./src/assets/images/1.jpg",
      text: "The Peoples Trust hold a focus group discussion with the senior group Kumponda and 12 chiefs of his village group along with beneficiaries and other stakeholders.  ",
    },
    {
      src: "./src/assets/images/2.jpg",
      text: " Jalosi Mbeta, village Head man Kamwendo praised the organisation initiatives that it has taken special approach for older citizen’s lives to be changed completely.",
    },
    {
      src: "./src/assets/images/3.jpg",
      text: "Apart from brief introduction of the organization by Mrs. Alinafe Tsirizani the Secretary of the organization, the chairman of the organization, Mr. Paul Ngwendema briefed details of the project to be implemented in group Kumponda, Traditional Authority Kapeni, Blantyre. The vision, approach and nature of the elderly social economic empowerment program were discussed.",
    },
    {
      src: "./src/assets/images/4.jpg",
      text: "The Senior group Kumponda of  Traditional Authority Kapeni Blantyre along with his village chiefs has cerebrated and welcomed the coming of Peoples Trust organization in their area and promised their joint support for the organization cause.",
    },
    {
      src: "./src/assets/images/5.jpg",
      text: "The Peoples Trust hold a focus group discussion with the senior group Kumponda and 12 chiefs of his village group along with beneficiaries and other stakeholders.",
    },
    {
      src: "./src/assets/images/6.jpg",
      text: "Apart from brief introduction of the organization by Mrs. Alinafe Tsirizani the Secretary of the organization, the chairman of the organization, Mr. Paul Ngwendema briefed details of the project to be implemented in group Kumponda, Traditional Authority Kapeni, Blantyre. The vision, approach and nature of the elderly social economic empowerment program were discussed.",
    },
    {
      src: "./src/assets/images/7.jpg",
      text: "Apart from brief introduction of the organization by Mrs. Alinafe Tsirizani the Secretary of the organization, the chairman of the organization, Mr. Paul Ngwendema briefed details of the project to be implemented in group Kumponda, Traditional Authority Kapeni, Blantyre. The vision, approach and nature of the elderly social economic empowerment program were discussed.",
    },
  ];

  const [currentPage, setCurrentPage] = useState(0);
  const imagesPerPage = 3;

  // Calculate visible images
  const startIndex = currentPage * imagesPerPage;
  const visibleImages = images.slice(startIndex, startIndex + imagesPerPage);
  const totalPages = Math.ceil(images.length / imagesPerPage);

  const nextPage = () => {
    if (startIndex + imagesPerPage < images.length) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const selectedPage = (index) => {
    setCurrentPage(index);
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const handlers = useSwipeable({
    onSwipedLeft: nextPage,
    onSwipedRight: prevPage,
    trackMouse: true, // Enables swiping with a mouse
  });

  return (
    <div className="h-auto bg-white pb-16 pt-10" id="pictures">
      <div className="flex flex-col text-center py-12">
        <div className="flex flex-col">
          <h1 className="font-bold text-2xl ">In Pictures</h1>
          <span>______________</span>
        </div>
      </div>

      <div className="w-full flex flex-row justify-center pb-6">
        <p className="text-gray-600 px-4 text-center w-10/12">
          Below are some of the pictures from our projects and activities. We
          are committed to making a positive impact in the lives of those we
          serve.
        </p>
      </div>

      <div {...handlers} className="p-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {visibleImages.map((image, index) => (
            <div key={index} className="relative group flex flex-col">
              <img
                src={image.src}
                alt={image.text}
                className="rounded-lg shadow-md transition-transform duration-300 group-hover:scale-105 md:w-10/12"
              />

              <div className="absolute inset-0 flex items-center justify-center bg-black rounded-lg bg-opacity-60 text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 md:w-10/12 text-justify p-2">
                {image.text}
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Buttons */}
        <div className="flex justify-between mt-4">
          <button
            onClick={prevPage}
            className="bg-[#FF9292] text-white px-4 py-2 rounded disabled:opacity-50"
            disabled={currentPage === 0}
          >
            Previous
          </button>

          <div className="flex space-x-2 pt-5">
            {Array.from({ length: totalPages }).map((_, index) => (
              <div
                onClick={() => selectedPage(index)}
                key={index}
                className={`w-3 h-3 rounded-full ${
                  index === currentPage ? "bg-[#FF9292]" : "bg-gray-400"
                }`}
              ></div>
            ))}
          </div>

          <button
            onClick={nextPage}
            className="bg-[#FF9292] text-white px-4 py-2 rounded disabled:opacity-50"
            disabled={startIndex + imagesPerPage >= images.length}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
