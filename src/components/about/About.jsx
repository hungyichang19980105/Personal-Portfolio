import React from "react";
import "./about.css";
import ME from "../../assets/aboutme.jpg";
import { FaGraduationCap } from "react-icons/fa";
import { AiOutlineProject } from "react-icons/ai";

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaGraduationCap className="about__icon" />
              <h5>Boston University</h5>
              <small>Bachelors in CS</small>
            </article>

            <article className="about__card">
              <FaGraduationCap className="about__icon" />
              <h5>New York University</h5>
              <small>Masters in CS</small>
            </article>

            <article className="about__card">
              <AiOutlineProject className="about__icon" />
              <h5>Experiences</h5>
              <small>New Grad</small>
            </article>
          </div>

          <p>
            I enjoy solving real world problems and love to learn new
            technologies. I have experiences with various languages such as
            Python, SQL, JavaScripts and React. I also have data science
            knowledges includes machine learning models and algorithms, data
            analysis and deployment with Python Flask. Now I'm opening to any
            potential jobs to leverage my skills.
          </p>

          <a href="#contact" className="btn btn-primary">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
