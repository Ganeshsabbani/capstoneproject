import React from 'react'
import {
    MdShare,
    MdOutlineFileDownload,
    MdPrint,
  } from "react-icons/md";

const SharingButtons = ({toggleModal}) => {
  return (
    <div>
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
  )
}

export default SharingButtons