import React, { useState, useRef, useEffect } from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBProgress,
} from "mdbreact";
import bsCustomFileInput from "bs-custom-file-input";
import { storage } from "../../config/firebase";
import { logo } from "../../../src/logo.svg";
import { useAuth } from "../../config/Auth";

function AddPhoto() {
  const auth = useAuth(),
    [media, setMedia] = useState(null),
    [error, setError] = useState(""),
    [progress, setProgress] = useState(0),
    [url, setUrl] = useState(""),
    imageTypeCheck = /^image\/.*/,
    videoTypeCheck = /^video\/.*/,
    video = useRef();

  const handleChange = (event) => {
    const file = event.currentTarget.files[0];
    console.log(event.currentTarget.files[0])
    if (file) {
      const fileType = file["type"];
      if (imageTypeCheck.test(fileType) || videoTypeCheck.test(fileType)) {
        setError("");
        setMedia(file);
      } else {
        setError("Please select an image or video to upload");
        console.log("please select");
      }
    }
  };
  const handleUpload = () => {
    if (media && auth.user) {
      const uploadTask = storage
        .ref(`userData/${auth.user.uid}/${media.name}`)
        .put(media);
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
            })
            .then(() => {
              if (videoTypeCheck.test(media.type)) {
                video.current.addEventListener("loadedmetadata", () => {
                  let newMetadata = {
                    customMetadata: {
                      duration: video.current.duration.toString(),
                    },
                  };
                  console.log(newMetadata);
                  storage
                    .ref(`userData/${auth.user.uid}/${media.name}`)
                    .updateMetadata(newMetadata)
                    .then((metadata) => console.log(metadata))
                    .catch((error) => setError(error));
                });
              }
            });
        }
      );
    } else {
      setError("Error please choose an image or video to upload");
    }
  };

  useEffect(() => {
    bsCustomFileInput.init();
  }, [])

  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol>
          <h3>Add Photos or Videos</h3>
        </MDBCol>
      </MDBRow>

      <MDBRow>
        <MDBCol>
          <div className="custom-file">
            <input onChange={handleChange} type="file" className="custom-file-input" id="customFile" />
            <label className="custom-file-label" htmlFor="customFile">
              Choose file
            </label>
          </div>
          <MDBBtn onClick={handleUpload}>Upload</MDBBtn>
        </MDBCol>
      </MDBRow>

      <MDBRow>
        <MDBCol>
          {progress > 0 ? (
            <MDBProgress value={progress} max={100} animated material />
          ) : (
            ""
          )}
          {error}
        </MDBCol>
      </MDBRow>
      <MDBRow>
        <MDBCol>
          {url ? (
            imageTypeCheck.test(media.type) ? (
              <img src={url} alt="User content" />
            ) : (
              <video ref={video}>
                <source src={url} type={media.type} controls></source>
              </video>
            )
          ) : (
            <img src={logo} className="App-logo" alt="logo" />
          )}
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
export default AddPhoto;
