import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import Link from "./Link";
import SocialWidgets from "./SocialWidgets";


const Model = ({ toggleModal, modal }) => {
  
 
  return (
    <div>
      {modal && (
        <div className="modal w-full h-full fixed inset-0">
          <div
            onClick={toggleModal}
            className="overlay w-full h-full fixed inset-0 bg-[rgba(49,49,49,0.8)] "
          ></div>
          <div
            className="modal-content p-16 rounded-lg absolute top-2/4 left-2/4 -translate-y-1/2 -translate-x-1/2 leading-normal  bg-[#f1f1f1] w-3/6 
             md:w-9/12  xl:w-4/6 lg:p-8 sm:p-4 sm:w-5/6 xm:w-11/12  "
          >
            <h1 className="font-semibold text-black text-2xl">Share</h1>
            <Link />
            <SocialWidgets />
            <button
              className="close-modal absolute top-2.5 right-2.5 py-1 px-2 "
              onClick={toggleModal}
            >
              <AiOutlineCloseCircle size={"30px"} />
            </button>
         
          </div>
        </div>
      )}
    </div>
  );
};

export default Model;
