import React, { useState } from "react";
import { render } from "react-dom";
import { Form, Button, ProgressBar, Image } from "react-bootstrap";
import bsCustomFileInput from 'bs-custom-file-input'
import { storage } from "../../config/firebase";
import { logo } from "../../../src/logo.svg";
import { useAuth } from "../../config/Auth";

function AddPhoto() {
  const auth = useAuth();
  bsCustomFileInput.init();
  const [media, setMedia] = useState(null);
  const [error, setError] = useState("");
  const [progress, setProgress] = useState(0);
  const [url, setUrl] = useState("");
  const handleChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const fileType = file["type"];
      console.log(fileType)
    const imageTypeCheck = /^image\/.*/;
    const videoTypeCheck = /^video\/.*/;
      if (imageTypeCheck.test(fileType) || videoTypeCheck.test(fileType)) {
        setError("");
        setMedia(e.target.files[0]);
      } else {
        setError("Please select an image or video to upload");
        console.log("please select");
      }
    }
  };
  const handleUpload = () => {
    if (media && auth.user) {
      const uploadTask = storage.ref(`userData/${auth.user.uid}/${media.name}`).put(media);
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
            .ref(`userData/${auth.user.uid}`)
            .child(media.name)
            .getDownloadURL()
            .then((url) => {
              setUrl(url);
              setProgress(0);
            });
        }
      );
    } else {
      setError("Error please choose an image or video to upload");
    }
  };
  return (
    <div>
      <h3>Add Photos or Videos</h3>
      <Form>
        <Form.Group>
          <Form.File onChange={handleChange} label="Upload images or videos." custom />
          <Button onClick={handleUpload}>Upload</Button>
        </Form.Group>
      </Form>
      <div>
        {progress > 0 ? <ProgressBar now={progress} max="100" animated /> : ""}
        {error}
      </div>
      <div>
        {url ? (
          <Image src={url} alt="User image" />
        ) : (
          <Image src={logo} className="App-logo" alt="logo" />
        )}
      </div>
    </div>
  );
}
export default AddPhoto;
