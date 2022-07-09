import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { defaultUploadTag, cloudName } from "./cloudinary/cloudinaryConfig";
import GalleryContext from "./context/GalleryContext";
import { BrowserRouter } from "react-router-dom";

/* eslint-disable */
const myGallery = cloudinary.galleryWidget({
  container: "#gallery",
  cloudName: cloudName,
  mediaAssets: [
    { tag: defaultUploadTag }, // by default mediaType: "image"
    { tag: defaultUploadTag, mediaType: "video" },
  ],
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <GalleryContext.Provider value={myGallery}>
        <App />
      </GalleryContext.Provider>
    </BrowserRouter>
  </React.StrictMode>
);
