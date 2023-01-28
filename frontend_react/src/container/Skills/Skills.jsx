import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Skills.scss';
import { v4 as uuidv4 } from 'uuid';

const Skills = () => {
  const [experiences, setExperiences] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const query = '*[_type == "experiences"]';
    const skillsQuery = '*[_type == "skills"]';

    client.fetch(query).then((data) => {
      setExperiences(data);
    });

    client.fetch(skillsQuery).then((data) => {
      setSkills(data);
    });
  }, []);

  return (
    < >
      <h2 key={uuidv4} className="head-text"> Skills & Experiences </h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div
                key={uuidv4()}
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img key={uuidv4()}  src={urlFor(skill.icon)} alt={skill.name} />
              </div>
              <p  key={uuidv4()} className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <div className="app__skills-exp">
          {experiences.map((experience) => (
            <>
            <motion.div
              className="app__skills-exp-item"
              key={uuidv4()}
            >
              <div className="app__skills-exp-year"
                  key={uuidv4()}>
                <p key={uuidv4()}
                className="bold-text">{experience.year}</p>
              </div>
              <motion.div 
              key = {experience.name} className="app__skills-exp-works">
                {experience.works.map((work) => (
                  <div  key={uuidv4()}>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__skills-exp-work"
                      data-tip
                      data-for={work.name}
                      key={uuidv4()}>
                    <h4 key={uuidv4()} className="bold-text">{work.name}</h4>
                    </motion.div>
                    <p  key={uuidv4()} className="p-text">{work.company}</p>
                  </div>
                ))}
              </motion.div>
            </motion.div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};


export default AppWrap(
  MotionWrap(Skills, 'app__skills'),
  'skills',
  'app__whitebg',
);

