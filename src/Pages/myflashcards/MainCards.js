import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import DateFeature from "./DateFeature";
import { useDispatch } from "react-redux";
import { delCard } from "../../redux/actions";
import { useSelector } from "react-redux";
import { AiOutlineCloseCircle } from "react-icons/ai";
import MyFlashcardHeader from "./MyFlashcardHeader";
import { useEffect } from "react";
import { formDetails } from "../../redux/actions";

const MainCards = () => {
  const [image, setimage] = useState(JSON.parse(localStorage.getItem("URLS")));
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const storeValues = useSelector((state) => state);
  const [flashData, setFlashData] = useState(
    Array.from(new Set(storeValues.handleDetails.flat()))
  );

  if (flashData.length === 0) {
    //As data do not persist in store
    setFlashData(JSON.parse(localStorage.getItem("values")));
  }

  //Navigating to details page
  const handleCards = (card) => {
    localStorage.setItem("cards", JSON.stringify(card));
    navigate(`/details/${card.groupName} `);
  };

  //Getting updated store values after delete

  const storeArr = Array.from(new Set(storeValues.handleDetails.flat()));

  if (storeArr) {
    localStorage.setItem("STORE", JSON.stringify(storeArr));
  }

  window.onload = () => {
    dispatch(formDetails(JSON.parse(localStorage.getItem("values"))));
  };

  useEffect(() => {
    const storeArr = Array.from(new Set(storeValues.handleDetails.flat()));
    localStorage.setItem("STORE", JSON.stringify(storeArr));
  }, [storeArr]);

  //Dispatching selected term to store
  const handleDel = (card) => {
    dispatch(delCard(card));
    setFlashData(storeArr);
  };

  return (
    <div className="bg-[rgba(245,241,236,255)] h-screen">
      <MyFlashcardHeader />

      <div className="w-full bg-[rgba(245,241,236,255)] flex justify-center">
        <div className="main flex justify-start flex-wrap p-3 gap-20 gap-y-10 bg-[rgba(245,241,236,255)] pt-10 relative w-4/5 pl-0 md:justify-center">
          {flashData !== null ? (
            flashData.map((card, i) => (
              <div
                key={i}
                className="bg-[#fff] w-56 h-62  items-center p-3 flex flex-col rounded-lg relative hover:scale-110 hover:transition-all transition-shadow drop-shadow-2xl"
              >
                {image ? (
                  <div className="w-14 h-14  rounded-full absolute -top-6">
                    <img
                      src={image && image[i]}
                      className="rounded-full absolute w-14 h-14"
                    ></img>
                  </div>
                ) : null}

                <div>
                  <AiOutlineCloseCircle
                    size={"30px"}
                    color={"#d43e3d"}
                    className="absolute right-2 top-2 cursor-pointer"
                    onClick={() => {
                      handleDel(card);
                    }}
                  />
                </div>
                <h3 className="mb-3 mt-5 font-semibold ">{card.groupName} </h3>
                <h5 className="mb-3">{card.description.slice(0, 100)}... </h5>
                <h6 className="mb-3">{card.term.length} Card</h6>

                <button
                  className="w-10/12 h-8 text-[rgba(212,62,61,255)] border-[#d43e3d] border-2 outline-4 rounded font-semibold mb-6"
                  type="button"
                  onClick={() => {
                    handleCards(card);
                  }}
                >
                  View cards
                </button>
                <DateFeature />
              </div>
            ))
          ) : (
            <h1>No Cards To Show</h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default MainCards;
