import React, { useState } from "react";

const DivBulb = ({ divBulbOn, setDivBulbOn }) => {
  function bulbToggler() {
    setDivBulbOn(!divBulbOn);
  }

  let bulb_JSX = (
    <div
      className={`bulb-container ${
        divBulbOn === true ? "bulb-container-border" : ""
      }`}
    >
      <div className={`bulb-case ${divBulbOn ? "bulb-case-Color" : ""}`}>
        <div className="bulb"></div>
      </div>
      <div className="bulb-connector"></div>
    </div>
  );

  return (
    <div className="main-container">
      {bulb_JSX}

      <button className="bulb-buttonTag" onClick={bulbToggler}>
        {divBulbOn === false ? "Turn On" : "Turn Off"}
      </button>
    </div>
  );
};

export default DivBulb;

//!----------------------------------------------------------------------------------------------------------------------

//* Code with Notes :

// import React, { useState } from "react";

// //? Note about commented code : First i create useState and this component runs from it but read below.
// const DivBulb = ({ changeMainBg, divBulbOn, setDivBulbOn }) => {
//   // const [turnOn, setTurnOn] = useState(false); //? I create this useState and all this component code runs on this and fine but i need to chnage "main" bgColor according to this and other "ImageBulb.jsx" component so i create both components useState in "App.jsx" and used it by props

//   function bulbToggler() {
//     // turnOn ? changeMainBg("") : changeMainBg("yellow"); //? Change "main" bgColor according to above useState.
//     setDivBulbOn(!divBulbOn);
//   }

//   let bulb_JSX = (
//     <div
//       className={`bulb-container ${
//         divBulbOn === true ? "bulb-container-border" : ""
//       }`}
//     >
//       <div className={`bulb-case ${divBulbOn ? "bulb-case-Color" : ""}`}>
//         <div className="bulb"></div>
//       </div>
//       <div className="bulb-connector"></div>
//     </div>
//   );

//   return (
//     <div className="main-container">
//       {bulb_JSX}

//       <button className="bulb-buttonTag" onClick={bulbToggler}>
//         {divBulbOn === false ? "Turn On" : "Turn Off"}
//       </button>
//     </div>
//   );
// };

// export default DivBulb;
