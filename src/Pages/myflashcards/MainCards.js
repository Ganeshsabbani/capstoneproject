import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";
import DateFeature from "./DateFeature";
import { useDispatch } from "react-redux";
import { delCard } from "../../redux/actions";
import { useSelector } from "react-redux";
import { AiOutlineCloseCircle } from "react-icons/ai";

const MainCards = () => {
  const [image, setimage] = useState(JSON.parse(localStorage.getItem("URLS")));
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [del, setDel] = useState(false);

  const [flashData, setFlashData] = useState(
    JSON.parse(localStorage.getItem("STORE"))
  );

  if (!del) {
    if (flashData.length === 0) {
      //As data do not persist in store
      setFlashData(JSON.parse(localStorage.getItem("values")));
    }
  }

  const handleCards = (card) => {
    localStorage.setItem("cards", JSON.stringify(card));
    navigate(`/details/${card.groupName} `);
  };

  

  const handleDel = (card) => {
    setDel(true);
    dispatch(delCard(card));
    setFlashData(storeArr);
    localStorage.setItem("STORE", JSON.stringify(storeArr));
    if (storeArr.length === 0) {
      setFlashData(JSON.parse(localStorage.getItem("values")));
    }
  };

  const storeValues = useSelector((state) => state);
  const storeArr = getUniqueListBy(
    storeValues.handleDetails.flat(),
    "groupName"
  );

  function getUniqueListBy(arr, key) {
    return [...new Map(arr.map((item) => [item[key], item])).values()];
  }
  console.log(del);
  return (
    <div className="bg-[rgba(245,241,236,255)] h-screen">
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

      <div className="w-full bg-[rgba(245,241,236,255)] flex justify-center">
        <div className="main flex justify-start flex-wrap p-3 gap-20 gap-y-10 bg-[rgba(245,241,236,255)] pt-10 relative w-4/5 pl-0 md:justify-center">
          {flashData !== null ? (
            flashData.map((card, i) => (
              <div className="bg-[#fff] w-56 h-62  items-center p-3 flex flex-col rounded-lg relative hover:scale-110 hover:transition-all transition-shadow drop-shadow-2xl">
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
                    onClick={() => handleDel(card)}
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
