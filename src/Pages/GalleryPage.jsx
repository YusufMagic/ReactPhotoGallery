import React from "react";
import ImageSearch from "../Components/ImageSearch";
import { useEffect, useRef, useState } from "react";
import config from "../config/api";
import Slider from "../Components/Slider";

const GalleryPage = (props) => {
  console.log(config);
  const [state, setState] = useState({
    images: [],
  });

  const handleMakeRequest = async (e) => {
    e.preventDefault();
    const searchValue = e.target.elements.searchValue.value;
    const request = await fetch(
      `https://pixabay.com/api/?key=${config["API-KEY"]}&q=${searchValue}&per_page=15`
    );
    const results = await request.json();
    if (!searchValue) {
      console.log("что-то не то со значением! Введите новое");
    } else {
      setState({ images: results.hits });
      console.log(state.images, results);
    }
  };

  console.log(state)

  return (
    <div>
      <ImageSearch handleMakeRequest={handleMakeRequest} />
      <Slider images={state.images} />
      {/* <ImageSearch handleMakeRequest={handleMakeRequest} />
      <Gallery images={state.images} /> */}
    </div>
  );
};

export default GalleryPage;
