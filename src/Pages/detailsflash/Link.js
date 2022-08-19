import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { BiCopy, BiShareAlt } from "react-icons/bi";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Link = () => {
  const [value, setValue] = useState(window.location.href); //getting link of current page
  const [copied, setcopied] = useState(false);

  
  if (copied) {
    toast.success("Copied To Clipboard");
  }


  return (
    <div>
      <div className="flex text-lg my-6">
        <h3 className="text-lg xm:text-sm">Link</h3>

        <h3 className="mx-2 xm:text-sm ">{window.location.href} </h3>

        <CopyToClipboard text={value} onCopy={() => setcopied(true)}>
          <BiCopy size={"20px"} className="cursor-pointer mx-1 xxm:m-px " />
        </CopyToClipboard>

        <BiShareAlt size={"20px"} className="mx-1 cursor-pointer xxm:m-px" />
      </div>
      <ToastContainer
              position="top-right"
              autoClose={1000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
    </div>
  );
};

export default Link;
