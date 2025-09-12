import { useState, useEffect } from "react";

export default function BloodBag() {
  const [level, setLevel] = useState(0); //* State for blood bag level.
  const [pipeLevel, setPipeLevel] = useState(0); //* State for blood bag pipes level.

  useEffect(() => {
    //* Filling blood to Blood bag until level is 100/full.
    if (level < 100) {
      const levelTimer = setTimeout(() => setLevel(level + 1), 50);
      return () => clearTimeout(levelTimer);
    }

    //* Filling Blood Bag Pipes. After bag is 100/full and until pipes is 100/full
    if (level === 100 && pipeLevel < 100) {
      const pipeLevelTimer = setTimeout(() => setPipeLevel(pipeLevel + 1), 20);
      return () => clearTimeout(pipeLevelTimer);
    }

    //* Empty whole Blood bag after bag and pipes are 100/full.
    if (level === 100 && pipeLevel === 100) {
      const refilTimer = setTimeout(() => {
        setLevel(0);
        setPipeLevel(0);
      }, 500);
      return () => clearTimeout(refilTimer);
    }
  }, [level, pipeLevel]);

  return (
    <div>
      <div className="bg-blue-1 h-150 w-75 lg:flex flex-col justify-end items-center max-sm:hidden sm:hidden">
        {/* //? Plus symbol design with div's */}
        <div className="bg-blue-3 rounded-4xl w-50 h-50 top-100 z-2 absolute flex flex-col justify-center items-center">
          <div className="bg-white h-15 w-8"></div>
          <div className="bg-white h-8 w-40"></div>
          <div className="bg-white h-15 w-8"></div>
        </div>

        {/* //? Long blood pipe  */}
        <div className="bg-green-2 absolute top-19 w-3 z-2 flex items-end justify-center">
           <div
                className="bg-red-400 w-3 h-56 flex items-end justify-center border"
                
              >
                <div className="bg-red-600 w-3"
                style={{height:`${pipeLevel}%`}}>

                </div>
              </div>
        </div>

        {/* //? Small blood Pipes and Caps */}
        <div className="bg-blue-4 h-20 w-50 absolute top-62 flex justify-around">
          <div className="bg-green-5 h-15 w-8 flex flex-col items-center">
            <div className=" h-8 w-7 rounded-t-xl border"></div>
            <div className="bg-red-900 h-5 w-5 border-e-1 border-s-1 flex justify-center items-en">
              <div
                className="bg-red-400 w-3 h-5 flex items-end"
             
              >
                <div
                  className="bg-red-600 w-3 h-5"
                  style={{ height: `${pipeLevel}%` }}
                ></div>
              </div>
            </div>
          </div>
          <div className="bg-red-900 h-13 border-e-1 border-s-1 border-t-1 w-6"></div>
          <div className="bg-green-5 h-15 w-8 flex flex-col items-center">
            <div className=" h-8 w-7 rounded-t-xl border"></div>
            <div className="bg-red-900 h-5 w-5 border-e-1 border-s-1 flex justify-center items-end">
              <div
                className="bg-red-400 w-3 h-5 flex items-end"
            
              >
                <div
                  className="bg-red-600 w-3 h-5"
                  style={{ height: `${pipeLevel}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* //? Blood Bag */}
        <div className="bg-red-8 border-2 rounded-[30%] h-105 w-75 flex justify-center items-center">
          <div className="bg-red-400 border-1 rounded-[30%] h-100 w-70 flex items-end overflow-hidden">
            <div
              className="bg-red-600 h-150 w-70"
              style={{ height: `${level}%` }}
            >
              <div className="bg-red-800 h-2"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
