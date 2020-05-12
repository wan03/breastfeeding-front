import React, { useState } from "react";
import { render } from "react-dom";
import { storage } from "../../config/firebase";
import { logo } from "../../../src/logo.svg";

function AddPhoto() {
  const [image, setImage] = useState(null);
  const [error, setError] = useState("");
  const [progress, setProgress] = useState(0);
  const [url, setUrl] = useState("");
  const handleChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const fileType = file["type"];
      const validImageTypes = ["image/gif", "image/jpeg", "image/png"];
      if (validImageTypes.includes(fileType)) {
        setError("");
        setImage(e.target.files[0]);
      } else {
        setError("Please selet an image to upload");
        console.log("please select");
      }
    }
  };
  const handleUpload = () => {
    if (image) {
      const uploadTask = storage.ref(`images/${image.name}`).put(image);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setProgress(progress);
        },
        (error) => {
          setError(error);
        },
        () => {
          storage
            .ref("images")
            .child(image.name)
            .getDownloadURL()
            .then((url) => {
              setUrl(url);
              setProgress(0);
            });
        }
      );
    } else {
      setError("Error please choose an image to upload");
    }
  };
  return (
    <div>
      <p>Add Photos</p>
      <input type="file" onChange={handleChange} />
      <button onClick={handleUpload}>Upload</button>

      <p>
        {progress > 0 ? <progress value={progress} max="100" /> : ""}
        {error}
      </p>
      <div>
        {url ? (
          <img src={url} alt="logo" />
        ) : (
          <img src={logo} className="App-logo" alt="logo" />
        )}
      </div>
    </div>
  );
}
export default AddPhoto;
