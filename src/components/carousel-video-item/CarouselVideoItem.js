import React from "react";
import { MDBCarouselItem, MDBView } from "mdbreact";

/**
 * Reusable Carousel Video Item Component.
 * @param index
 * @param downloadURL
 * @param name
 * @param contentType
 */
const CarouselVideoItem = ({ videos }) => (
  <>
    {videos.map((video) => {
      return (
        <MDBCarouselItem itemId={video.itemId} key={video.name} id={video.name} duration={video.duration}>
          <MDBView>
            <video className="d-block video-fluid" controls>
              <source src={video.downloadURL} type={video.contentType} />
            </video>
          </MDBView>
        </MDBCarouselItem>
      );
    })}
    ;
  </>
);

export default CarouselVideoItem;
