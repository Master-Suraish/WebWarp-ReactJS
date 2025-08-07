import { useState } from "react";
import "./App.css";

import Counter from "./Class-Learning/Counter";
import Image from "./Class-Learning/Image";
import MyCounter from "./Components/MyCounter";
import DivBulb from "./Components/DivBulb";
import ImageBulb from "./Components/ImageBulb";

function App() {
  const [divBulbOn, setDivBulbOn] = useState(false);
  const [changeBulbImage, setchangeBulbImage] = useState(false);

  let myMainBg = "#e5e5e5";

  if (divBulbOn && changeBulbImage) {
    myMainBg = "#ede20aff";
  } else if (divBulbOn) {
    myMainBg = "yellow";
  } else if (changeBulbImage) {
    myMainBg = "#fff764";
  }

  return (
    <>
      <main style={{ backgroundColor: myMainBg }}>
        <MyCounter />
        <DivBulb divBulbOn={divBulbOn} setDivBulbOn={setDivBulbOn} />
        <ImageBulb
          changeBulbImage={changeBulbImage}
          setchangeBulbImage={setchangeBulbImage}
        />
      </main>
    </>
  );
}

export default App;

//!------------------------------------------------------------------------------------------------------------------------------

// import { useState } from "react";
// import "./App.css";

// //* Class Learning import ---------------------------------------------------------------------------------------
// import Counter from "./Class-Learning/Counter";
// import Image from "./Class-Learning/Image";

// //* project import --------------------------------------------------------------------------------------------------
// import MyCounter from "./Components/MyCounter";
// import DivBulb from "./Components/DivBulb";
// import ImageBulb from "./Components/ImageBulb";

// //? Note : all commented code is used to change "main" bgColor according to bulb's on and off by sending useState as a prop.

// function App() {
//   // const [mainBgColor, setMainBgColor] = useState(""); //* useState for main bgColor changes.
//   const [divBulbOn, setDivBulbOn] = useState(false); //* useState For "DivBulb.jsx"
//   const [changeBulbImage, setchangeBulbImage] = useState(false); //* useState For "ImageBulb.jsx"

//   //* Change "main" bgColor by above useState's :
//   let myMainBg = "aliceblue";

//   if (divBulbOn && changeBulbImage) {
//     myMainBg = "#ede20aff";
//   } else if (divBulbOn) {
//     myMainBg = "yellow";
//   } else if (changeBulbImage) {
//     myMainBg = "#fff764";
//   }

//   return (
//     <>
//       {/* <main style={{ backgroundColor: mainBgColor }}> */}
//       <main style={{ backgroundColor: myMainBg }}>
//         <MyCounter />
//         <DivBulb
//           // changeMainBg={setMainBgColor} //* sending "main" useState as prop
//           divBulbOn={divBulbOn}
//           setDivBulbOn={setDivBulbOn}
//         />
//         <ImageBulb
//           // changeMainBg={setMainBgColor}
//           changeBulbImage={changeBulbImage}
//           setchangeBulbImage={setchangeBulbImage}
//         />
//       </main>
//     </>
//   );
// }

// export default App;
