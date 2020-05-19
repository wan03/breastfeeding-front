import React, { useRef, useState, useEffect, useReducer } from 'react';
import { useAuth } from "../../config/Auth";
import { storage } from "../../config/firebase";
import CarouselImageItem from "../../components/carousel-image-item/CarouselImageItem"
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer } from "mdbreact";

const imageReducer = (images, payload) => {
    return [...images, payload]
}

const videoReducer = (videos, payload) => {
    return [...videos, payload]
}

function Slideshow() {

    const slideshow = useRef(),
    auth = useAuth(),
    user = auth.user,
    imageTypeCheck = /^image\/.*/,
    videoTypeCheck = /^video\/.*/,
    initialImagesValue = [],
    initialVideosValue = [],
    [images, dispatchImage] = useReducer(imageReducer, initialImagesValue),
    [videos, dispatchVideo] = useReducer(videoReducer, initialVideosValue),
    [lenght, setLength] = useState(0)


    const nextSlide = () => {
        slideshow.current.next()
      };





      useEffect(() => {
        
        const getUserMedia = () => {           
            const storageLocation = storage.ref(`userData/${user.uid}`);
            storageLocation.listAll().then(res => {
               setLength(res.items.length);
               console.log(res.items.length)
               res.items.forEach((itemRef, index) => {
                   itemRef.getMetadata().then(metadata => {
                    if (imageTypeCheck.test(metadata.contentType)){
                        let imageData = {
                            index: index + 1,
                            downloadURL: "",
                            name: metadata.name
                        }
                    itemRef.getDownloadURL().then(res => {imageData.downloadURL = res
                    
                        dispatchImage(imageData);
                    })
                    } else if (videoTypeCheck.test(metadata.contentType)){
                        let videoData = {
                            index: index + 1,
                            downloadURL: "",
                            name: metadata.name,
                            contentType: metadata.contentType
                        }
                    itemRef.getDownloadURL().then(res => {videoData.downloadURL = res
                    
                        dispatchVideo(videoData);
                    })
                    }
                   }).catch(error => console.log(error))
                   
               }) 
            })
   }
          if(user) {
            getUserMedia();
          }
        
      }, [user])

  return (
  <MDBContainer>
      <MDBCarousel
        ref={slideshow}
        activeItem={1}
        length={lenght}
        showControls={true}
        showIndicators={false}
        className="z-depth-1"
        interval={false}
      >
        <MDBCarouselInner>
        {images.map( image => {
   return (
    <MDBCarouselItem itemId={image.index} key={image.name}>
        <MDBView>
            <img
            className="d-block w-100"
            src={image.downloadURL}
            alt={image.name}
            />
        </MDBView>
    </MDBCarouselItem>
    )} )};
    {videos.map( video => {
   return (
    <MDBCarouselItem itemId={video.index} key={video.name}>
        <MDBView>
            <video
            className="d-block video-fluid"
            controls
            >
             <source src={video.downloadURL} type={video.contentType} />   
            </video>
        </MDBView>
    </MDBCarouselItem>
    )} )};
        </MDBCarouselInner>
      </MDBCarousel>
    </MDBContainer>
  );
}

export default Slideshow;