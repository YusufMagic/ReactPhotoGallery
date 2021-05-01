import React from "react";

const ImageSearch = (props) => {
  return (
    <div className="imageSearch">
      <form onSubmit={props.handleMakeRequest} className="imageSearch__form">
        <input
          autoComplete="off"
          name="searchValue"
          type="text"
          placeholder="Find Image"
        />
        <button>Search</button>
      </form>
    </div>
  );
};

export default ImageSearch;
