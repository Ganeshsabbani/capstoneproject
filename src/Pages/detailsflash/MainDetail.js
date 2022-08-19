import React from "react";
import { MdArrowBack} from "react-icons/md";
import { Link } from "react-router-dom";
import { useState } from "react";
import Model from "./Model";
import Pagination from "./Pagination";
import DetailsHeader from "./DetailsHeader";
import SharingButtons from "./SharingButtons";

const MainDetail = () => {
  const [flashData, setFlashData] = useState(
    JSON.parse(localStorage.getItem("cards"))
  );
  const [image, setImage] = useState(JSON.parse(localStorage.getItem("URLS")));
  const [clickTerm, setClickTerm] = useState(null);
  const [modal, setModal] = useState(false);
  const [index, setIndex] = useState();

  const toggleModal = () => {
    setModal(!modal);
  };

  const handleClick = (card, i) => {
    setClickTerm(card);
    setIndex(i);
  };
  if (image) {
    const arr = flashData.term.map((file, i) => (file.termFile = image[i]));
  }

  return (
    <div>
     <DetailsHeader />

      {flashData ? (
        <div className="pt-5 px-16 bg-[rgba(245,241,236,255)] lg:px-8 md:px-3 sm:px-1 h-screen ">
          <div className="px-20 flex flex-col gap-y-8 justify-between pb-20 xl:px-10 md:px-5 sm:bg-[rgba(245,241,236,255)] ">
            <div className="flex gap-x-4 flex-row ">
              <div>
                <Link to="/flashcards">
                  <MdArrowBack size={28} className="cursor-pointer" />
                </Link>
              </div>
              <div className="flex gap-y-4 flex-col ">
                <div className="group-name font-bold text-2xl ">
                  {flashData.groupName}{" "}
                </div>

                <div className="group-desc text-[rgba(135,146,164,255)]">
                  {flashData.description}
                </div>
              </div>
            </div>
            <div className="flex gap-x-4 flex-row text-[rgba(135,146,164,255)] drop-shadow-md  sm:flex-col sm:gap-y-4  ">
              <div className="basis-1/4 bg-white rounded h-fit p-4">
                <div className="bg-white font-semibold text-gray-400  my-2">
                  Flashcards
                </div>
                <hr />
                <div className="flex flex-col gap-y-4 bg-white py-4 ">
                  {flashData.term.map((card, i) => (
                    <div
                      key={i}
                      className="cursor-pointer"
                      onClick={() => {
                        handleClick(card, i);
                      }}
                    >
                      {card.termName}{" "}
                    </div>
                  ))}
                </div>
              </div>
              <div className="  content-between w-3/4 drop-shadow-md justify-center sm:w-full">
                <Pagination
                  clickTerm={clickTerm}
                  setClickTerm={setClickTerm}
                  className="block justify-center"
                  flashData={flashData}
                />
              </div>
           <SharingButtons toggleModal={toggleModal}/>
            </div>
          </div>
          <Model toggleModal={toggleModal} modal={modal} />
        </div>
      ) : (
        <div>
          <h1>Please Create Cards</h1>
        </div>
      )}
    </div>
  );
};

export default MainDetail;
