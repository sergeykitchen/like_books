import React, { useState, useEffect, useCallback } from "react";
import "./styles.scss";

export const BookCover = ({ image }) => {
  const [pictureContainer, setPictureContainer] = useState(null);

  const loadImageHandler = useCallback(() => {
    let img = new Image(200, 300);
    img.src = image;
    img.className = "w-100 h-auto";
    img.onload = function() {
      const container = document.createElement("div");
      container.appendChild(img);
      setPictureContainer(container);
    };

    img.onerror = function() {
      console.log("Error loading image");
    };
  }, [image]);

  useEffect(loadImageHandler, []);

  return (
    <>
      {pictureContainer ? (
        <div dangerouslySetInnerHTML={{ __html: pictureContainer.innerHTML }} />
      ) : (
        <div className="placeholder" />
      )}
    </>
  );
};
