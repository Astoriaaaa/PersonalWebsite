import React from "react";
import './page.css'
import plane1 from './plane1.png'
import plane2 from './plane2.png'
import {motion} from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';


export default function Page() {
    return (
        <div className="page">
            <motion.div className="section1">
                <motion.div
                    transition={{ duration: 2 }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="nav-bar"
                >
                    <div className="logo">
                        <h3>welcome</h3>
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
                                    <FontAwesomeIcon icon={faGithub} style={{ color: '#90AEAD', height: 'max(1rem, 3vw)', maxHeight: '2.5rem' }} />
                                </a>
                                <a href="https://www.linkedin.com/in/aayushma-sapkota-8401a4252/" target="_blank">
                                    <FontAwesomeIcon icon={faLinkedin} style={{ color: '#90AEAD', height: 'max(1rem, 3vw)', maxHeight: '2.5rem'}}/>
                                </a>
                                <a href="mailto:aysapkota@gmail.com" target="_blank">
                                    <FontAwesomeIcon icon={faEnvelope} style={{ color: '#90AEAD', height: 'max(1rem, 3vw)', maxHeight: '2.5rem' }}/>
                                </a>
                            </div>
                            <div id="firstline">
                                <p>Hi, my name is</p>
                            </div>
                            <div id="secondline">
                                <p>Aayushma</p>
                            </div>
                            <div id="thirdline">
                                <p>
                                    I'm a second year mathematics and <br />
                                    computing student @ uwaterloo
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="photo">
                            hi
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

            <div className="section2">
                <div className="expereince-container">
                    <div className="blueprint">
                        <h1>test1</h1>
                    </div>
                    <div className="hatch">
                        <h2>text2</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}