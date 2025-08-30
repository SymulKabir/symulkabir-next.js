"use client";
import React from "react";
import Image from "next/image";

const Index = ({ thumbnails = "", img = "" }) => {
  const viewFullScreen = () => {
    const src = `/images/project images/full/${img}`;
    const imgElement = document.createElement("img");
    imgElement.src = src;
    imgElement.alt = "Fullscreen image";
    imgElement.style.position = "fixed";
    imgElement.style.top = "0";
    imgElement.style.left = "0";
    imgElement.style.width = "100%";
    imgElement.style.height = "100%";
    imgElement.style.objectFit = "contain";
    imgElement.style.backgroundColor = "black";
    imgElement.style.zIndex = "9999";
    document.body.appendChild(imgElement);
    imgElement.requestFullscreen({ navigationUI: "show" });

    imgElement.addEventListener("fullscreenchange", () => {
      if (!document.fullscreenElement) {
        imgElement.remove();
      }
    });
  };

  return (
    <Image
      src={`/images/project images/thumbnails/${thumbnails}`}
      height={100}
      width={100}
      alt=""
      onClick={viewFullScreen}
    />
  );
};

export default Index;
