import React, { useState, useRef } from "react";
import { render } from "react-dom";
import { Form, Button, ProgressBar, Image } from "react-bootstrap";
import bsCustomFileInput from 'bs-custom-file-input'
import { storage } from "../../config/firebase";
import { logo } from "../../../src/logo.svg";
import { useAuth } from "../../config/Auth";

function AddPhoto() {
  bsCustomFileInput.init();
  const auth = useAuth(),
  [media, setMedia] = useState(null),
  [error, setError] = useState(""),
  [progress, setProgress] = useState(0),
  [url, setUrl] = useState(""),
  imageTypeCheck = /^image\/.*/,
  videoTypeCheck = /^video\/.*/,
  video = useRef();
  

  const handleChange = (e) => {
  const file = e.target.files[0];
    if (file) {
      const fileType = file["type"];
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
            }).then(() =>{
              if (videoTypeCheck.test(media.type)) {
              video.current.addEventListener('loadedmetadata', () => {
              let newMetadata = {customMetadata: {"duration": video.current.duration.toString()}};
              console.log(newMetadata)
              storage.ref(`userData/${auth.user.uid}/${media.name}`)
              .updateMetadata(newMetadata).then(metadata => console.log(metadata))
              .catch( error => setError(error))
          })
        };
      })
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
        imageTypeCheck.test(media.type) ? (<Image src={url} alt="User image" />):
        (<video ref={video}><source src={url} type={media.type} controls></source></video>)
        ) : (
          <Image src={logo} className="App-logo" alt="logo" />
        )}
      </div>
    </div>
  );
}
export default AddPhoto;
