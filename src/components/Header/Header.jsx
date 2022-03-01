import React from "react";
import { motion } from "framer-motion";
import { images } from "../../constants";

const Header = () => (
  <>
    <div className="app__header app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span>
              <img src={images.dots} alt="profile_bg" />
            </span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text discover">
                DISCOVER THE BEST RATES FOR YOUR EXCHANGE
              </p>
              <h1 className="head-text">
                GET <span className="naira-text">NAIRA</span> FASTER AND SAFER
              </h1>
            </div>
          </div>

          <div className="sign app__flex">
            <p className="app__flex ">SIGN UP FOR FREE</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-img"
      >
        <img src={images.undraw_transfer_money_rywa} alt="profile_bg" />
      </motion.div>

      {/* <motion.div
      variants={scaleVariants}
      whileInView={scaleVariants.whileInView}
      className="app__header-circles"
    >
      {[images.RIGHTCURVE].map((circle, index) => (
        <div className="circle-cmp app__flex" key={`circle-${index}`}>
          <img src={circle} alt="profile_bg" />
        </div>
      ))}
    </motion.div> */}
    </div>
  </>
);

export default Header;
