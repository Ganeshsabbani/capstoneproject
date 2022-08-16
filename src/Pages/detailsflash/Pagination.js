import React from "react";
import ReactPaginate from "react-paginate";
import { useState, useMemo } from "react";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";

function Items({ currentItems, clickTerm }) {
  return (
    <>
      {clickTerm ? (
        <div>
          <div className="flex  bg-white rounded p-6 h-80  ">
            {clickTerm.termFile ? (
              <div className="bg-white w-2/4">
                <img
                  src={clickTerm.termFile}
                  alt="images"
                  className="h-full"
                ></img>
              </div>
            ) : null}

            <div className=" bg-white w-2/4 p-3 overflow-y-scroll scrollbar-thin  scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-thumb-red-500  ">
              <h1>{clickTerm.termDefination.slice(0, 400)} </h1>
            </div>
          </div>
        </div>
      ) : (
        currentItems.map((item) => (
          <div>
            <div className="flex  bg-white rounded p-6 h-80  ">
              {item.termFile ? (
                <div className="bg-white w-2/4">
                  <img
                    src={item.termFile}
                    alt="images"
                    className="h-full"
                  ></img>
                </div>
              ) : null}

              <div className=" bg-white w-2/4 p-3 overflow-y-scroll scrollbar-thin  scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-thumb-red-500  ">
                <h1>{item.termDefination.slice(0, 400)} </h1>
              </div>
            </div>
          </div>
        ))
      )}
    </>
  );
}

function Pagination({ itemsPerPage = 1, flashData, clickTerm, setClickTerm }) {
  // We start with an empty list of items.
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.

  const [itemOffset, setItemOffset] = useState(0);

  useMemo(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;

    setCurrentItems(flashData.term.slice(itemOffset, endOffset));

    setPageCount(Math.ceil(flashData.term.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % flashData.term.length;
    setClickTerm(false);
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items currentItems={currentItems} clickTerm={clickTerm} />
      <ReactPaginate
        className="flex justify-center gap-x-6 text-xl mt-3"
        nextLabel={<BsArrowRightShort size={"35px"} />}
        onPageChange={handlePageClick}
        pageRangeDisplayed={1}
        pageCount={pageCount}
        previousLabel={<BsArrowLeftShort size={"35px"} />}
        renderOnZeroPageCount={null}
        activeClassName="text-white bg-[rgba(212,62,61,255)] rounded-full p-2 "
      />
    </>
  );
}

export default Pagination;
