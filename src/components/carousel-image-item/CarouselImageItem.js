import React from "react";
import { MDBCarouselItem, MDBView } from "mdbreact";

/**
 * Reusable Carousel Image Item Component.
 * @param index
 * @param downloadURL
 * @param name
 */
const CarouselImageItem = ({ images }) => (
  <>
    {images.map((image) => {
      return (
        <MDBCarouselItem itemId={image.index} key={image.index}>
          <MDBView>
            <img
              className="d-block w-100"
              src={image.downloadURL}
              alt={image.name}
            />
          </MDBView>
        </MDBCarouselItem>
      );
    })}
    ;
  </>
);

export default CarouselImageItem;
