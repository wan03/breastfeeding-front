import React, { useState } from "react";
import { render } from "react-dom";
import { storage } from "../../config/firebase";

function AddPhoto() {
  const [image, setImage] = useState(null);

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };
  const handleUpload = () => {
    console.log(image);
  };
  return (
    <div>
      <p>Add Photos</p>
      <input type="file" onChange={handleChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
}
export default AddPhoto;
