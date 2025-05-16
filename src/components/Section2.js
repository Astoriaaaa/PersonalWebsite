import React from 'react';
import AnimatedDiv from './AnimatedDiv';
import Highlight from './Highlight';
import bp from './images/uw_blueprint_logo.jpeg';
import rm from './images/retailmint_logo.jpeg';
import h from './images/hatch-logo.png.webp';
import './styles/section2.css';

const Section2 = () => {
    return (
        <div id="experience" className="section2">
            <div className="timeline">
                <div className="container right">
                    <img src={bp} alt="Blueprint Logo" />
                    <AnimatedDiv position="odd" name="animated-div">
                        <h1 className="container-title">SWD @ UW Blueprint</h1>
                        <p className="container-title">Nov 2024 -- Present</p>
                        <div className="description">
                            <ul>
                                <li>
                                    Created API endpoints in <Highlight text="Node.js" type="highlight" color="#c7395f2d"> </Highlight> to manage user invitations, incorporating authorization checks and data creation with <Highlight text="MongoDB" type="highlight" color="#c7395f2d"> </Highlight>
                                </li>
                                <li>
                                    Integrated <Highlight text="Firebase" type="highlight" color="#c7395f2d"></Highlight> storage functionality into an API endpoint, enabling image uploads with base64 encoding
                                </li>
                            </ul>
                        </div>
                    </AnimatedDiv>
                </div>

                <div className="container left">
                    <img src={rm} alt="RetailMint Logo" />
                    <AnimatedDiv position="even" name="animated-div">
                        <h1 className="container-title">Full-stack @ InvestMint Inc.</h1>
                        <p className="container-title">Jan 2025 -- April 2025</p>
                        <div className="description">
                            <ul>
                                <li>
                                    <li>
                                        Built and deployed end-to-end ETL pipelines with <Highlight text="Airflow on AWS MWAA" type="highlight" color="#c7395f2d"> </Highlight>, processing <Highlight text="3,000" color="#c7395f"> </Highlight> transactions/min with <Highlight text="Pandas" type="highlight" color="#c7395f2d"> </Highlight>, speeding up data collection process by <Highlight text="90%" color="#c7395f"> </Highlight>
                                    </li>
                                    <li>
                                        Created RESTful API routes in <Highlight text="Node.js" type="highlight" color="#c7395f2d"> </Highlight> and used service layer pattern to develop 5 core backend services and used <Highlight text="Auth 2.0" type="highlight" color="#c7395f2d"> </Highlight> to integrate QuickBooks service
                                    </li>
                                    <li>
                                        Utilized modern <Highlight text="React" type="highlight" color="#c7395f2d"> </Highlight> features such as hooks, Context API, and Routers to create modular and responsive frontend features, reducing code volume by <Highlight text="50%" color="#c7395f"> </Highlight> and improving responsiveness by <Highlight text="30%" color="#c7395f"> </Highlight>
                                    </li>
                                    <li>
                                        Built cash analytics and forecasting models using <Highlight text="TensorFlow" type="highlight" color="#c7395f2d"> </Highlight>, applying STL decomposition, <Highlight text="ARIMA" color="#c7395f"> </Highlight>, and <Highlight text="LSTM" color="#c7395f"> </Highlight> models, improving long-term forecast accuracy by <Highlight text="34%" color="#c7395f"> </Highlight>
                                    </li>
                                </li>
                            </ul>
                        </div>
                    </AnimatedDiv>
                </div>

                <div className="container right">
                    <img src={h} alt="Hatch Logo" />
                    <AnimatedDiv position="odd" name="animated-div">
                        <h1 className="container-title">SWE @ Hatch</h1>
                        <p className="container-title">May 2024 -- Aug 2024</p>
                        <div className="description">
                            <ul>
                                <li>
                                    Created a <Highlight text="JavaScript" type="highlight" color="#c7395f2d"> </Highlight> program that automates river schematics with <Highlight text="80%" color="#c7395f"> </Highlight> accuracy, cutting process time by <Highlight text="90%" color="#c7395f"> </Highlight>
                                </li>
                                <li>
                                    Utilized <Highlight text="Pandas" type="highlight" color="#c7395f2d"> </Highlight> and <Highlight text="Numpy" type="highlight" color="#c7395f2d"> </Highlight> for feature size reduction through principal component analysis and correlation matrix, enhancing data efficiency
                                </li>
                                <li>
                                    Leveraged <Highlight text="Keras" type="highlight" color="#c7395f2d"> </Highlight> Tuner for hyperparameter tuning of LSTM model reducing loss by <Highlight text="15%" color="#c7395f"> </Highlight>
                                </li>
                                <li>
                                    Gained foundational knowledge of <Highlight text="LSTM" color="#c7395f"> </Highlight> models <Highlight text="extreme gradient," color="#c7395f"> </Highlight> and <Highlight text="natural gradient" color="#c7395f"> </Highlight> boosting algorithms
                                </li>
                                <li>
                                    Utilized Pandas to intricately reshape Excel datasets with <Highlight text="30,000+" type="highlight" color="#c7395f2d"> </Highlight> entries. Created visualizations with PowerBI
                                </li>
                            </ul>
                        </div>
                    </AnimatedDiv>
                </div>
            </div>
        </div>
    );
};

export default Section2; 