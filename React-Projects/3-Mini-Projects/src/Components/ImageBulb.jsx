import React, { useState } from "react";

const ImageBulb = ({ changeBulbImage, setchangeBulbImage }) => {
  function bulbToggler() {
    setchangeBulbImage(!changeBulbImage);
  }
  return (
    <>
      <div className="Image-Bulb-Container">
        <img
          style={
            changeBulbImage ? { marginTop: "30px" } : { marginTop: "41px" }
          }
          className="bulbImg"
          src={changeBulbImage ? "bulb-on.png" : "bulb-off.png"}
          alt=""
        />

        <div className="wire1"></div>
        <div className="buttonBulb-Container">
          <button
            className={`ImgBulbButtonTag ${
              changeBulbImage === false ? "bulb-button-shadow" : ""
            }`}
            onClick={bulbToggler}
          >
            {changeBulbImage === false ? "On" : "Off"}
          </button>
        </div>
        <div className="wire2"></div>
      </div>
    </>
  );
};

export default ImageBulb;

//!--------------------------------------------------------------------------------------------------------------------

//* Codes with notes :

// import React, { useState } from "react";

// //? Note about commented code : check and read "DivBulb.jsx" compoenent "Code with notes" section

// const ImageBulb = ({ changeMainBg, changeBulbImage, setchangeBulbImage }) => {
//   // const [changeBulbImage, setChangeBulbImage] = useState(false);

//   function bulbToggler() {
//     // changeBulbImage ? changeMainBg("") : changeMainBg("#fff764");

//     setchangeBulbImage(!changeBulbImage);
//   }
//   return (
//     <>
//       <div className="Image-Bulb-Container">
//         <img
//           style={
//             changeBulbImage
//               ? { margin: "30px 0px 0px 0px" }
//               : { margin: "40px 0px 0px 0px" }
//           }
//           className="bulbImg"
//           src={changeBulbImage ? "bulb-on.png" : "bulb-off.png"}
//           alt=""
//         />

//         <div className="wire1"></div>
//         <div className="buttonBulb-Container">
//           <button
//             className={`ImgBulbButtonTag ${
//               changeBulbImage === false ? "bulb-button-shadow" : ""
//             }`}
//             onClick={bulbToggler}
//           >
//             {changeBulbImage === false ? "On" : "Off"}
//           </button>
//         </div>
//         <div className="wire2"></div>
//       </div>
//     </>
//   );
// };

// export default ImageBulb;
