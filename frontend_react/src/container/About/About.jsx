import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// import { AppWrap, MotionWrap } from '../../wrapper';
import './About.scss';
// import { urlFor, client } from '../../client';
import {images} from '../../constants';

const About = () => {
  // const [abouts, setAbouts] = useState([]);

  const abouts = [
    {title: 'Fullstack Development', description: 'I am a fullstack developer',imgUrl: images.about01},
    {title: 'Backend Development', description: 'I am a backend developer', imgUrl: images.about02},
    {title: 'frontend Development', description: 'I am a frontend developer',imgUrl: images.about03},
    {title: 'UI/UX  Development', description: 'I am a design developer',imgUrl: images.about04},
  ]

  // useEffect(() => {
  //   const query = '*[_type == "abouts"]';

  //   client.fetch(query).then((data) => {
  //     setAbouts(data);
  //   });
  // }, []);

  return (
    <>
      <h2 className="head-text">I Know that <span>Hard Work</span> <br />Brings <span>Superior Results</span></h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={about.imgUrl} alt={about.title} />
            {/* <img src={urlFor(about.imgUrl)} alt={about.title} /> */}
            <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2>
            <p className="p-text" style={{ marginTop: 10 }}>{about.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

// export default AppWrap(
//   MotionWrap(About, 'app__about'),
//   'about',
//   'app__whitebg',
// );

export default About;