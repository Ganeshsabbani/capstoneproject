import React from "react";
import {
  MdArrowBack,
  MdShare,
  MdOutlineFileDownload,
  MdPrint,
} from "react-icons/md";
import { Link } from "react-router-dom";
import { useState } from "react";
import Model from "./Model";
import Pagination from "./Pagination";

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
      <div className="w-screen bg-[rgba(245,241,236,255)] flex justify-center ">
        <div className="w-4/5  bg-[rgba(245,241,236,255)] mt-5 ">
          <h3 className="font-semibold">Create Flashcard</h3>
          <div className="flex  my-4 ">
            <Link to="/">
              <h4 className="text-[rgba(212,62,61,255)] ">Create New</h4>
            </Link>
            <h4 className="ml-7 text-[rgba(135,146,164,255)] ">My Flashcard</h4>
          </div>
          <div className="w-full h-1 bg-[#e3e0de]  ">
            <div className="w-24 h-1 bg-[rgba(212,62,61,255)] rounded-lg "></div>
          </div>
        </div>
      </div>

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
              <div className=" flex gap-y-4 flex-col sm:flex-row sm:justify-between xm:flex-wrap">
                <div
                  className=" flex flex-row items-center justify-center bg-white rounded-lg drop-shadow-md px-6 py-2 cursor-pointer active:translate-y-px hover:scale-110 hover:transition-all"
                  onClick={() => toggleModal()}
                >
                  <MdShare size={"20px"} />
                  <h3 className=" font-medium pl-2">Share</h3>
                </div>
                <div className=" flex flex-row items-center justify-center bg-white rounded-lg drop-shadow-md px-6 py-2 sm:ml-8  xm:ml-4 cursor-pointer active:translate-y-px hover:scale-110 hover:transition-all xxm:ml-0">
                  <MdOutlineFileDownload size={"20px"} />
                  <h3 className=" font-medium pl-2">Download</h3>
                </div>
                <div className="share flex flex-row items-center justify-center bg-white rounded-lg drop-shadow-md px-6 py-2 sm:ml-8 xm:ml-0 cursor-pointer active:translate-y-px hover:scale-110 hover:transition-all">
                  <MdPrint size={"20px"} />
                  <h3 className=" font-medium pl-2">Print</h3>
                </div>
              </div>
            </div>
          </div>
          <Model toggleModal={toggleModal} modal={modal} />
        </div>
      ) : (
        <div>
          <h1>Loading...</h1>
        </div>
      )}
    </div>
  );
};

export default MainDetail;
