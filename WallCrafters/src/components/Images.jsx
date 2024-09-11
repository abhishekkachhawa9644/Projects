import React, { useContext } from "react";
import WallCraftersContext from "../Context/WallCraftersContext";

const Images = () => {
  const { imageData } = useContext(WallCraftersContext);

  return (
    <div className="container my-5">
      <div className="flex">
        {imageData.map((data) => (
          <div key={data.id}>
            <div className="item">
              <img src={data.largeImageURL} alt="Image" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Images;
