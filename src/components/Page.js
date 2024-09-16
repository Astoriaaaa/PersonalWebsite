import React from "react";
import './page.css'
import img from './img.png' 
import plane1 from './plane1.png'
import plane2 from './plane2.png'
import {motion} from 'framer-motion'
import linkden from './linkden.png'
import email from './email.png'
import github from './github.png'


export default function Page() {
    return (
        <div className="page">
            <motion.div  className="section1">
                <motion.div transition={{duration: 2}} initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} className="nav-bar">
                    <div className="logo">
                        <h3>welcome</h3>
                    </div>
                    <div className="headers">
                        <a href="https://github.com/Astoriaaaa" target="_blank"> <img src={github}/> </a>
                        <a href="https://www.linkedin.com/in/aayushma-sapkota-8401a4252/" target="_blank"> <img src={linkden}/> </a>
                        <a href="mailto:aysapkota@gmail.com" target="_blank"> <img src={email}/> </a>
                    </div>
                </motion.div>

                <motion.div transition={{duration: 2}} initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} className="body">
                    <div className="body-container">
                        <div className="body-text">
                            <div className="lines">
                                <p id="firstline">Hi, my name is</p>
                                <p id="secondline">Aayushma</p>
                                <p id="thirdline">I'm a second year mathematics and computing student @ University of Waterloo</p>
                                <a href="www.youtube.com" id="resume" target="_blank">Resume</a>
                            </div>
                        </div>
                        <div className="body-image">
                            <img id="img" src={img} alt="" />
                        </div>
                    </div>

                </motion.div>
                <motion.div transition={{duration: 2}} initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} className="plane-animation">
                    <div className="plane1-container">
                        <div className="plane1">
                            <img alt="plane with actress text" id="plane1" src={plane1}/>
                        </div>
                    </div>
                    <div className="plane3-container">
                        <div className="plane3">
                                <img alt="plane with actress text" id="plane3" src={plane2}/>
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
    )
    
}