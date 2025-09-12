import BloodBag from "./BloodBottle";
import HowItWorks from "./HowItWorks";
import HeroSection from "./HeroSection";
import ContactUs from "./ContactUs";
import About from "./About";
import { useState } from "react";

const Home = ({ get_donors_state }) => {
  const [showDonorsCards, setShowDonorsCards] = useState(false);

  return (
    <>
      <main className="flex flex-col w-screen justify-evenly items-center">
        <HeroSection
          get_donors_state_from_HomeDotJSX={get_donors_state}
          get_showDonorsCards_state={showDonorsCards}
          get_setShowDonorsCards_state={setShowDonorsCards}
        />

        {showDonorsCards === false && <HowItWorks />}
        {showDonorsCards === false && <About />}
        {showDonorsCards === false && (
          <div className="bg-slate-900/30 max-w-310 rounded-2xl mb-5">
            <ContactUs />
          </div>
        )}
      </main>
    </>
  );
};

export default Home;
