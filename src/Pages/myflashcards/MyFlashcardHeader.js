import React from 'react'
import { Link } from "react-router-dom";

const MyFlashcardHeader = () => {
  return (
    <div>
         <div className="w-full bg-[rgba(245,241,236,255)] flex justify-center ">
        <div className="w-4/5  bg-[rgba(245,241,236,255)] mt-5 ">
          <h3 className="font-semibold">Create Flashcard</h3>
          <div className="flex  my-4 ">
            <Link to="/">
              <h4 className="text-[rgba(135,146,164,255)] ">Create New</h4>
            </Link>
            <h4 className="ml-7 text-[rgba(212,62,61,255)] ">My Flashcard</h4>
          </div>
          <div className="w-full h-1 bg-[#e3e0de] ">
            <div className="w-32 h-1 ml-24 bg-[rgba(212,62,61,255)] rounded-lg "></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyFlashcardHeader