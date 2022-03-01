import React from "react";
import { motion } from "framer-motion";
import { images } from "../../constants";
const Intro = () => {
  return (
    <>
      <div className="intro__header app__flex">
        <h1>WHY LAMSPAY?</h1>
      </div>
      <div className=" intro__container">
        <div className="intro__payment__container ">
          {[images.PESAPAL, images.AIRTEL, images.MTN].map((payment, index) => (
            <img src={payment} alt="profile_bg" key={index} />
          ))}
        </div>

        <div className="intro__payment__desc">
          <div></div>
          <img src={images.undraw_online_transactions_} alt="profile_bg" />
        </div>
      </div>
    </>
  );
};
export default Intro;
