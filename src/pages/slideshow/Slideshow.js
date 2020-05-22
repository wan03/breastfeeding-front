import React, { useRef, useState, useEffect, useReducer } from "react";
import { useAuth } from "../../config/Auth";
import { storage } from "../../config/firebase";
import CarouselImageItem from "../../components/carousel-image-item/CarouselImageItem";
import CarouselVideoItem from "../../components/carousel-video-item/CarouselVideoItem";
import { MDBCarousel, MDBCarouselInner, MDBContainer } from "mdbreact";

function Slideshow() {
  const imageReducer = (images, payload) => {
    return [...images, payload];
  };

  const videoReducer = (videos, payload) => {
    return [...videos, payload];
  };
  const durationReducer = (duration, payload) => {
    return duration + payload;
  };
  const activeItemReducer = (activeItem, action) => {
    return action === "increment" ? activeItem + 1 : 1;
  };

  const slideshow = useRef(),
    auth = useAuth(),
    user = auth.user,
    imageTypeCheck = /^image\/.*/,
    videoTypeCheck = /^video\/.*/,
    initialImagesValue = [],
    initialVideosValue = [],
    [images, dispatchImage] = useReducer(imageReducer, initialImagesValue),
    [videos, dispatchVideo] = useReducer(videoReducer, initialVideosValue),
    [duration, dispatchDuration] = useReducer(durationReducer, 0),
    [activeItem, dispatchActiveItem] = useReducer(activeItemReducer, 1),
    [length, setLength] = useState(0),
    [imageInterval, setImageInterval] = useState(0);

  let imageTimer = undefined,
    videoTimer = undefined;

  /**
   * Controls setting the active item, clearing the timeouts and moving to the
   * next slide.
   */
  const nextSlide = () => {
    if (activeItem < length) {
      dispatchActiveItem("increment");
    } else {
      dispatchActiveItem("reset");
    }
    clearTimeout(imageTimer);
    clearTimeout(videoTimer);
    slideshow.current.next();
  };

  /**
   * Calculates the interval for the images based on 15 minutes
   */
  const calculateTiming = () => {
    console.log(images.length, "images lenght");
    console.log(duration, "duration");
    if (images.length) {
        //TODO change back to 900 to calculate based on 15 min.
      let temp = 60 - duration;
      let value = Math.floor(temp / images.length) * 1000;
      setImageInterval(value);
    }
  };

  /**
   * Controls the timing for changing the slides
   */

  const slideshowController = () => {
    console.log(imageInterval, "image interval");
    if (imageInterval) {
      console.log(activeItem, "Active item");
      let currentVideo = videos.filter((video) => video.itemId === activeItem);
      console.log(currentVideo, "Current video");
      if (currentVideo.length === 1) {
        let currentInterval = currentVideo[0].duration * 1000;
        console.log(currentInterval);
        let currentVideoNode = document.getElementById(currentVideo[0].name);
        currentVideoNode.play();
        videoTimer = setTimeout(() => {
          nextSlide();
        }, currentInterval);
      } else {
        imageTimer = setTimeout(() => {
          nextSlide();
        }, imageInterval);
      }
    }
  };

  useEffect(() => {
    /**
     * Gets all user media from user folder and places it in an array in state to be rendered.
     */
    const getUserMedia = () => {
      const storageLocation = storage.ref(`userData/${user.uid}`);
      storageLocation.listAll().then((res) => {
        setLength(res.items.length);
        res.items.forEach((itemRef, index) => {
          itemRef
            .getMetadata()
            .then((metadata) => {
              if (imageTypeCheck.test(metadata.contentType)) {
                let imageData = {
                  itemId: index + 1,
                  downloadURL: "",
                  name: metadata.name,
                };
                itemRef.getDownloadURL().then((res) => {
                  imageData.downloadURL = res;

                  dispatchImage(imageData);
                });
              } else if (videoTypeCheck.test(metadata.contentType)) {
                let videoData = {
                  itemId: index + 1,
                  downloadURL: "",
                  name: metadata.name,
                  contentType: metadata.contentType,
                  duration: parseFloat(metadata.customMetadata.duration),
                };
                itemRef.getDownloadURL().then((res) => {
                  videoData.downloadURL = res;
                  dispatchVideo(videoData);
                  dispatchDuration(videoData.duration);
                });
              }
            })
            .catch((error) => console.log(error));
        });
      });
    };
    if (user) {
      getUserMedia();
    }
  }, [user]);

  useEffect(() => {
    calculateTiming();
  }, [images, duration]);

  useEffect(() => {
    slideshowController();
    return () => {
      clearTimeout(imageTimer);
      clearTimeout(videoTimer);
    };
  }, [imageInterval, activeItem]);

  return (
      <MDBContainer>
        <MDBCarousel
          ref={slideshow}
          activeItem={1}
          length={length}
          showControls={false}
          showIndicators={false}
          className="z-depth-1"
          interval={false}
        >
          <MDBCarouselInner>
            <CarouselImageItem images={images} />
            <CarouselVideoItem videos={videos} />
          </MDBCarouselInner>
        </MDBCarousel>
      </MDBContainer>
  );
}

export default Slideshow;
