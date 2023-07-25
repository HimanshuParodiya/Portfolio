import React, { useEffect, useRef } from "react";
import "./AboutBanner.css";
import TypingAnimation from "../../../Utils/TypingAnimation/TypingAnimation";
import { motion, useScroll } from "framer-motion";
import { useSelector } from "react-redux";

const AboutBanner = () => {
  const theme = useSelector((state) => state.theme.appTheme);

  const textEleme = useRef(null);
  const { scrollYProgress } = useScroll();
  return (
    <div className="aboutBanner__container container">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="aboutBanner__intro"
      >
        {" "}
        I am
        <span className="aboutBanner__abilities">
          <TypingAnimation
            element={textEleme}
            text={[
              "Ambitious,",
              "Learner,",
              "Self-Disciplined,",
              "Self-Motivated,",
              //   "fearless,",
              "Supportive.",
            ]}
          />
        </span>
      </motion.div>

      <div className="aboutBanner__objective">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="vertical__progress"
        />
        <ul>
          <motion.p
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className={` ${theme ? "light" : ""}`}
          >
            I am an ambitious Frontend Developer with a background in mechanical
            engineering. Driven by curiosity and a passion for technology, I
            made the leap into frontend development and fully immersed myself
            with alot of practice with
            <span className="highlighted__text"> HTML, CSS, JavaScript, </span>
            and various frameworks like{" "}
            <span className="highlighted__text"> React.js and Redux.js</span>.
          </motion.p>
          <motion.p
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 1 }}
            className={` ${theme ? "light" : ""}`}
          >
            Crafting seamless user experiences and translating design into
            functional code became my true passion. My background in mechanical
            engineering adds a unique perspective to my approach, enabling me to
            approach <span className="highlighted__text"> problem-solving</span>{" "}
            systematically with attention to detail for harmonious outcomes.
          </motion.p>
          <motion.p
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className={` ${theme ? "light" : ""}`}
          >
            My educational journey began with a strong academic foundation,
            followed by a diploma in mechanical engineering. While exploring the
            world of machines and design, I discovered my passion for technology
            and problem-solving. This led me to embrace frontend development as
            my true calling, and I decided to pivot my career in this rapidly
            evolving domain.
          </motion.p>
          <motion.p
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.9, duration: 1 }}
            className={` ${theme ? "light" : ""}`}
          >
            My portfolio showcases my journey in frontend development with a
            collection of projects highlighting my dedication to intuitive and
            visually appealing web applications. I'm passionate about
            collaborating with creative and driven teams to create innovative
            digital experiences. If you share this enthusiasm for pushing
            technology and design boundaries, let's connect and shape the future
            together!
          </motion.p>
          <motion.p
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className={` ${theme ? "light" : ""}`}
          >
            Thank you for visiting my portfolio. If you have any questions or
            would like to explore potential opportunities, please don't hesitate
            to reach out. I look forward to connecting with you!
          </motion.p>
        </ul>
      </div>
    </div>
  );
};

export default AboutBanner;
