import React from "react";
import { useState, useMemo, useEffect } from "react";

//Term Image Preview Component
const TermPreview = ({ file }) => {
  const [preview, setPreview] = useState([]);

  const reader = new FileReader();
  reader.readAsDataURL(file);

  useEffect(() => {
    reader.onload = () => {
      setPreview(reader.result);
    };
  }, []);



  return (
    <div className="w-28 h-full p-2  xxm:w-full ">
      {preview ? <img src={preview} alt="preview" /> : "loading..."}
    </div>
  );
};

export default TermPreview;