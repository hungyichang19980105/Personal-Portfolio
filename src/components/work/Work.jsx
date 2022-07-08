import React from "react";
import "./work.css";
import { VscDebugBreakpointLog } from "react-icons/vsc";

const Work = () => {
  return (
    <section id="work">
      <h5>Entry Level</h5>
      <h2>Experiences</h2>

      <div className="container work__container">
        <article className="work">
          <div className="work__head">
            <h2>Payability</h2>
            <h5>Machine Learning Engineer Intern</h5>
            <h6>2022 Jan - 2022 May</h6>
          </div>
          <ul className="work__list">
            <li>
              <VscDebugBreakpointLog className="work__list-icon" />
              <p>
                Write SQL to select tables that haven't been used in the past 90
                days from Google Big Query and use Looker to build dashboards
                about the table usage and delete the least used table to enhance
                efficiency and lower the cost of queries
              </p>
            </li>
            <li>
              <VscDebugBreakpointLog className="work__list-icon" />
              <p>
                Extract transactions from Google Big Query, do exploratory data
                analysis (EDA), and build machine learning models (LightGBM,
                ANN, RF) for fraud detection and achieve 99% accuracy and 91%
                recall
              </p>
            </li>
            <li>
              <VscDebugBreakpointLog className="work__list-icon" />
              <p>
                Clean the data, train data in different time spans, and tune
                hyperparameters to increase the recall rate from 64% to 91%
              </p>
            </li>
            <li>
              <VscDebugBreakpointLog className="work__list-icon" />
              <p>
                Use Hydra to pass arguments and poetry to manage dependencies
                and packages to make codes reusable
              </p>
            </li>
          </ul>
        </article>
        {/* END OF Payability */}
        <article className="work">
          <div className="work__head">
            <h2>Feng Chia University</h2>
            <h5>Data Scientist Intern</h5>
            <h6>2019 June - 2019 Aug</h6>
          </div>
          <ul className="work__list">
            <li>
              <VscDebugBreakpointLog className="work__list-icon" />
              <p>
                Extracted and processed 200k+ records of river bank details,
                water level & rainfall in xx region/river from the SQL database,
                cleansed & transformed the data using Python Pandas & NumPy
              </p>
            </li>
            <li>
              <VscDebugBreakpointLog className="work__list-icon" />
              <p>
                Conducted exploratory analysis, imputed missing values & treated
                outliers, created correlation plots with Seaborn
              </p>
            </li>
            <li>
              <VscDebugBreakpointLog className="work__list-icon" />
              <p>
                Performed PCA & KNN to reduce 68 features to 5 principal
                components and improved accuracy by 8% as compared to the
                baseline model
              </p>
            </li>
            <li>
              <VscDebugBreakpointLog className="work__list-icon" />
              <p>
                Built 4 ANN & RNN machine learning models using Keras &
                Tensorflow in Python to predict minimum height needed for river
                embankment, tuned model hyperparameters, and achieved 92%
                accuracy
              </p>
            </li>
            <li>
              <VscDebugBreakpointLog className="work__list-icon" />
              <p>
                Applied CRISP-DM methodology to streamline the data science
                initiative and communicated analytical insights with data-driven
                task visualizations to stakeholders
              </p>
            </li>
          </ul>
        </article>
        {/* END OF FCU DS*/}
        <article className="work">
          <div className="work__head">
            <h2>Feng Chia University</h2>
            <h5>Software Engineer Intern</h5>
            <h6>2018 Jun - 2018 Aug</h6>
          </div>
          <ul className="work__list">
            <li>
              <VscDebugBreakpointLog className="work__list-icon" />
              <p>
                Led a 7-member development team to build a responsive website
                for Taiwan National Water Resource Department
              </p>
            </li>
            <li>
              <VscDebugBreakpointLog className="work__list-icon" />
              <p>
                Built the frontend using React and Bootstrap and leveraged
                Google firebase for backend infrastructure
              </p>
            </li>
            <li>
              <VscDebugBreakpointLog className="work__list-icon" />
              <p>
                Streamlined system design, applied load balancing across
                multiple servers, optimized site traffic & decreased refresh
                rates by 20%
              </p>
            </li>
          </ul>
        </article>
        {/* END OF FCU-SWE */}
      </div>
    </section>
  );
};

export default Work;
