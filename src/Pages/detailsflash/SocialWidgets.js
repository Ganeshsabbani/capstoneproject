import React from 'react'
import { BsFacebook, BsLinkedin, BsTwitter } from "react-icons/bs";
import { FaWhatsappSquare } from "react-icons/fa";
import { GrMail } from "react-icons/gr";

const SocialWidgets = () => {
  return (
    <div>
            <div className="flex justify-between  ">
              <BsFacebook
                size={"30px"}
                color="#1976d2"
                className="cursor-pointer  "
              />
              <BsLinkedin
                size={"30px"}
                color="#0077b7"
                className="cursor-pointer"
              />
              <FaWhatsappSquare
                size={"30px"}
                color="#2ba81c"
                className="cursor-pointer"
              />
              <BsTwitter
                size={"30px"}
                color="#1d9bf0"
                className="cursor-pointer"
              />
              <GrMail size={"30px"} />
            </div>
    </div>
  )
}

export default SocialWidgets