import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { urlFor, client } from "../../client";
// import { images } from "../../constants";

const Features = () => {
  const [features, setFeatures] = useState([]);

  useEffect(() => {
    const query = '*[_type == "features"]';

    client.fetch(query).then((data) => {
      setFeatures(data);
    });
  }, []);
  return (
    <>
      <div className="app__about">
        <h1 className="intro__header app__flex">FEATURES</h1>
        <div className="app__profiles ">
          {features.map((feature, index) => (
            <motion.div
              whileInView={{ opacity: 1 }}
              //   whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5, type: "tween" }}
              className="app__profile-item"
              key={feature.title + index}
            >
              <img src={urlFor(feature.imgUrl)} alt={feature.title} />
              <h2 className="bold-text black" style={{ marginTop: 10 }}>
                {feature.description}
              </h2>
              <p className="p-text black" style={{ marginTop: 10 }}>
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Features;
