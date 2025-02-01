import React from "react";
import './page.css'
import plane1 from './plane1.png'
import plane2 from './plane2.png'
import {motion} from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faJava } from '@fortawesome/free-brands-svg-icons';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { faNode } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import { faPython } from '@fortawesome/free-brands-svg-icons';
import  tensorFlow  from './tensorflow.png'
import cpp  from './c-icon-1820x2048-2ys190xs.png'

import AnimatedDiv from "./AnimatedDiv";
import Highlight from "./Highlight";
import bp from './uw_blueprint_logo.jpeg'
import rm from './retailmint_logo.jpeg'
import h from './hatch-logo.png.webp'
import {useState, useRef, useEffect} from 'react'
import headshot from "./headshot.webp"
import interpreter from "./Keyboard_layout_Chinese_Traditional.png"
import tetris from "./sddefault.jpg"
import water from "./drink-more-water-set-h2o-illustration-cartoon-water-bottles-sports-and-glass-bottle-and-glasses-with-liquids-vector.jpg"
import snake from "./snake.jpg"



export default function Page() {
    const sections = [
        { id: "welcome", text: "Welcome" },
        { id: "experience", text: "Experience" },
        { id: "projects", text: "Projects" },
      ];
    const [activeSection, setActiveSection] = useState(sections[0].text);
    
  
    useEffect(() => {
      const handleScroll = () => {
        let currentSection = sections[0].text;
        sections.forEach(({ id, text }) => {
          const element = document.getElementById(id);
          if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
              currentSection = text;
            }
          }
        });
        setActiveSection(currentSection);
      };
  
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="page">
            <motion.div id="welcome" className="section1">
                <motion.div
                    transition={{ duration: 2 }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="nav-bar"
                >
                    <div className="logo">
                        <h3>{activeSection}</h3>
                    </div>
                </motion.div>

                <motion.div
                    transition={{ duration: 2 }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="body"
                >
                    <div className="body-text">
                        
                        <div className="lines">
                            <div className="socials">
                                <a href="https://github.com/Astoriaaaa" target="_blank">
                                    <FontAwesomeIcon icon={faGithub} style={{ color: '#c7395f', height: 'max(1rem, 3vw)', maxHeight: '2.5rem' }} />
                                </a>
                                <a href="https://www.linkedin.com/in/aayushma-sapkota-8401a4252/" target="_blank">
                                    <FontAwesomeIcon icon={faLinkedin} style={{ color: '#c7395f', height: 'max(1rem, 3vw)', maxHeight: '2.5rem'}}/>
                                </a>
                                <a href="mailto:aysapkota@gmail.com" target="_blank">
                                    <FontAwesomeIcon icon={faEnvelope} style={{ color: '#c7395f', height: 'max(1rem, 3vw)', maxHeight: '2.5rem' }}/>
                                </a>
                            </div>
                            <div id="firstline">
                                <p>MY NAME IS</p>
                            </div>
                            <div id="secondline">
                                <p>Aayushma</p>
                            </div>
                            <div id="thirdline">
                                <p>
                                    I study math @ uwaterloo, I'm learning  <br/>
                                    chinese And I'm a fullstack developer :))
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="photo">
                            <img id="headshot" src={headshot}></img>
                    </div>
                </motion.div>

                <motion.div
                    transition={{ duration: 2 }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="plane-animation"
                >
                    <div className="plane1-container">
                        <div className="plane1">
                            <img alt="plane with actress text" id="plane1" src={plane1} />
                        </div>
                    </div>
                    <div className="plane3-container">
                        <div className="plane3">
                            <img alt="plane with actress text" id="plane3" src={plane2} />
                        </div>
                    </div>
                </motion.div>
            </motion.div>

            <div id="experience" className="section2">
                <div className="timeline">
                    <div className="container right">
                        <img src={bp} />
                        <AnimatedDiv position="odd" name="animated-div">
                            <h1>SWD @ UW Blueprint</h1>
                            <p>Nov 2024 -- Present</p>
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
                        <img src={rm} />
                        <AnimatedDiv position="even" name="animated-div">
                            <h1>Full-stack @ InvestMint Inc.</h1>
                            <p>Jan 2025 -- April 2025</p>
                            <div className="description">
                                <ul>
                                    <li>
                                        Incomming Winter 2025
                                    </li>
                                </ul>
                            </div>
                        </AnimatedDiv>
                    </div>
                    <div className="container right">
                        <img src={h} />
                        <AnimatedDiv position="odd" name="animated-div">
                            <h1>SWE @ Hatch</h1>
                            <p>May 2024 -- Aug 2024</p>
                            <div className="description">
                                <ul>
                                    <li>
                                    Created a <Highlight text="JavaScript" type="highlight" color="#c7395f2d"> </Highlight> program that automates river schematics with <Highlight text="80% accuracy, cutting process time by 90%" color="#c7395f"> </Highlight> 
                                    </li>
                                    <li>
                                    Utilized <Highlight text="Pandas" type="highlight" color="#c7395f2d"> </Highlight> and <Highlight text="Numpy" type="highlight" color="#c7395f2d"> </Highlight> for feature size reduction through principal component analysis and correlation matrix, enhancing data efficiency
                                    </li>
                                    <li>
                                    Leveraged <Highlight text="Keras" type="highlight" color="#c7395f2d"> </Highlight> Tuner for hyperparameter tuning of LSTM model <Highlight text="reducing loss by 15%" color="#c7395f"> </Highlight> 
                                    </li>
                                    <li>
                                    Gained foundational knowledge of <Highlight text="LSTM models," color="#c7395f"> </Highlight> <Highlight text="extreme gradient," color="#c7395f"> </Highlight> <Highlight text="natural gradient boosting" color="#c7395f"> </Highlight>   and  algorithms
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
            <div id="projects" class="projects-container">
                <div class="project-card">
                    <div class="thumbnail">
                        <img src={interpreter} alt="Project Thumbnail"/>
                        <div class="tech-stack">
                            <FontAwesomeIcon icon={faJava} style={{ color: '#90AEAD', height: 'max(1rem, 3vw)', maxHeight: '2.5rem' }} />                    </div>
                        </div>
                    <div class="description-proj">
                        <h3>hi</h3>
                    </div>
                </div>
                
                <div class="project-card">
                    <div class="thumbnail">
                        <img src={tetris} alt="Project Thumbnail"/>
                        <div class="tech-stack">
                            <img src={cpp} />
                        </div>
                    </div>
                    <div class="description-proj">
                        <h3>hi</h3>
                    </div>
                    
                </div>
                <div class="project-card">
                    <div class="thumbnail">
                        <img src={water} alt="Project Thumbnail"/>
                        <div class="tech-stack">
                            <FontAwesomeIcon icon={faReact} style={{ color: '#90AEAD', height: 'max(1rem, 3vw)', maxHeight: '2.5rem' }} />                   
                            <FontAwesomeIcon icon={faNode} style={{ color: '#90AEAD', height: 'max(1rem, 3vw)', maxHeight: '2.5rem' }} />                   
                            <FontAwesomeIcon icon={faDatabase} style={{ color: '#90AEAD', height: 'max(1rem, 3vw)', maxHeight: '2.5rem' }} />                   
                            <img src={tensorFlow} />
                        </div>
                    </div>
                    <div class="description-proj">
                        <h3>hi</h3>
                    </div>
                </div>
                <div class="project-card">
                    <div class="thumbnail">
                        <img src={snake} alt="Project Thumbnail"/>
                        <div class="tech-stack">
                            <FontAwesomeIcon icon={faPython} style={{ color: '#90AEAD', height: 'max(1rem, 3vw)', maxHeight: '2.5rem' }} />                   
                        </div>
                    </div>
                    <div class="description-proj">
                        <h3>hi</h3>
                    </div>
                </div>
                
            </div>
        </div>
    )

}