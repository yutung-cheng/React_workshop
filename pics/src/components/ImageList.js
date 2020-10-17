import "./ImageList.css";
import React from "react";
import ImageCard from "./ImageCard";

const ImageList = props => {
  const images = props.images.map(image => {
    return <ImageCard key={image.id} image={image} />; //if we have <div>, we should add key in div instesad.
  });

  return <div className="image-list">{images}</div>;
};

export default ImageList;
