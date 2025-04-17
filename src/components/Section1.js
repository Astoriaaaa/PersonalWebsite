import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import plane1 from './images/plane1.png';
import plane2 from './images/plane2.png';
import headshot from "./images/headshot.webp";
import './styles/section1.css';

const Section1 = ({ activeSection }) => {
    return (
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
                            <a href="https://github.com/Astoriaaaa" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faGithub} style={{ color: '#c7395f', height: 'max(1rem, 3vw)', maxHeight: '2.5rem' }} />
                            </a>
                            <a href="https://www.linkedin.com/in/aayushma-sapkota-8401a4252/" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faLinkedin} style={{ color: '#c7395f', height: 'max(1rem, 3vw)', maxHeight: '2.5rem'}} />
                            </a>
                            <a href="mailto:aysapkota@gmail.com" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faEnvelope} style={{ color: '#c7395f', height: 'max(1rem, 3vw)', maxHeight: '2.5rem' }} />
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
                                I study math @ uwaterloo, I'm learning <br/>
                                chinese And I'm a fullstack developer :))
                            </p>
                        </div>
                    </div>
                </div>
                <div className="photo">
                    <img id="headshot" src={headshot} alt="Profile" />
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
    );
};

export default Section1; 

