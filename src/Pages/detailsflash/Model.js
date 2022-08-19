import React from 'react'
import { BiCopy,BiShareAlt } from "react-icons/bi";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { BsFacebook,BsLinkedin ,BsTwitter} from "react-icons/bs";
import { FaWhatsappSquare } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import {useState} from "react"
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Model = ({toggleModal,modal }) => {
    const [value, setValue] = useState(window.location.href);
   const [copied,setcopied] = useState(false)
    if(copied){
        toast.success("Copied To Clipboard")
    }
    

  return (
    <div >
      {modal && (
        <div className="modal w-full h-full fixed inset-0" >
          <div onClick={toggleModal} className="overlay w-full h-full fixed inset-0 bg-[rgba(49,49,49,0.8)] "></div>
          <div className="modal-content p-16 rounded-lg absolute top-2/4 left-2/4 -translate-y-1/2 -translate-x-1/2 leading-normal  bg-[#f1f1f1] w-3/6 
             md:w-9/12  xl:w-4/6 lg:p-8 sm:p-4 sm:w-5/6 xm:w-11/12  ">
            <h1 className="font-semibold text-black text-2xl" >Share</h1>
            <div className="flex text-lg my-6">
                <h3 className="text-lg xm:text-sm">Link</h3>
               
                <h3 className="mx-2 xm:text-sm " >{window.location.href} </h3> 
                
                <CopyToClipboard text={value}
                 onCopy={() => setcopied(true)}>
                     <BiCopy size={"20px"} className="cursor-pointer mx-1 xxm:w-10 " />
               </CopyToClipboard>

               
               <BiShareAlt size={"20px"} className="mx-1 cursor-pointer xxm:w-10" />

            </div>
            <div className="flex justify-between  ">
                <BsFacebook size={"30px"}  color='#1976d2' className ="cursor-pointer  " />
                <BsLinkedin size={"30px"} color='#0077b7' className ="cursor-pointer"  />
                <FaWhatsappSquare size={"30px"}  color= "#2ba81c" className ="cursor-pointer"  />
                <BsTwitter size={"30px"}  color= "#1d9bf0" className ="cursor-pointer" />
                <GrMail size={"30px"} />
                </div>
            <button className="close-modal absolute top-2.5 right-2.5 py-1 px-2 " onClick={toggleModal}>
              <AiOutlineCloseCircle size={"30px"} />
            </button>
            <ToastContainer position="top-right"
                         autoClose={1000}
                         hideProgressBar={false}
                         newestOnTop={false}
                         closeOnClick
                         rtl={false}
                         pauseOnFocusLoss
                         draggable
                        pauseOnHover />
          </div>
        </div>
      )}
    </div>
  )
}

export default Model