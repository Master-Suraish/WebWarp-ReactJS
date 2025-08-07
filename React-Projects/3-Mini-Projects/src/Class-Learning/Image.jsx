import React, { useState } from "react";

const Image = () => {
  const [hideImage, setHideImage] = useState(false);

  function hideImageByButton() {
    setHideImage(!hideImage); // toggle false to true and true to false.
  }
  return (
    <>
      <div>
        {hideImage === false && (
          <img
            src="https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630"
            height={"200px"}
            alt="nature"
            srcset=""
          />
        )}
        <button onClick={hideImageByButton}>
          {hideImage === false ? "Hide Imgae" : "Show Image"}
        </button>
      </div>
    </>
  );
};

export default Image;
