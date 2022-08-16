import React from "react";
import { useState } from "react";

//Group Image Preview Component
const Preview = ({ file }) => {
  const [preview, setPreview] = useState(null);

  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => {
    setPreview(reader.result);
  };

  return (
    <div className="w-48 h-48 flex sm:mb-7">
      {preview ? <img src={preview} alt="preview" /> : "loading..."}
    </div>
  );
};

export default Preview;
