import React from "react";
import Footer from "../Footer/Footer";
import FifthPart from "./FifthPart";
import FirstPart from "./FirstPart";
import FourthPart from "./FourthPart";
import SecondPart from "./SecondPart";
import SeventhPart from "./SeventhPart";
import SixthPart from "./SixthPart";
import ThirdPart from "./ThirdPart";
const Home = () => {
  const bgColor = {
    backgroundColor: "#edede9",
  };

  return (
    <>
      <FirstPart />

      <SecondPart />

      <ThirdPart />

      <FourthPart bgColor={bgColor} />

      <FifthPart />

      <SixthPart />

      <SeventhPart />

      <Footer />
    </>
  );
};

export default Home;
