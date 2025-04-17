import React, { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import './styles/projects.css';
import { motion, useInView } from 'framer-motion';

const projectData = [
    {
        title: "Compiler",
        description: "... coming soon",
        techStack: [
            "java",
        ]
    },
    {
        title: "Interpreter",
        description: "Created an interpreter for a Mandarin-inspired, python-like, programming language.",
        techStack: [
            "java",
        ]
    },
    {
        title: "Tetris Game",
        description: "Featured packed tetris game ",
        techStack: [
            "C++"
        ]
    },
    {
        title: "8 cups",
        description: "mobile app that notifies users to drink water 8 times/day. Verifies each log with tensorflow obj detection model.",
        techStack: [
            "react",
            "SQL",
            "node",
        ]
    },
    {
        title: "Snake AI",
        description: "Used Genetic Algorithm to train neural netowrk to perfectly play snake game.",
        techStack: [
            "python"
        ]
    },
    {
        title: "Language conversion",
        description: "created auto-encoder model from sratch with pytorch and used it to translate english to italian",
        techStack: [
            "pytorch",
        ]
    },
    {
        title: "Chiconomics",
        description: "...coming soon. Get the top clothing picks to recreate the most outfits from your Pinterest.",
        techStack: [
            "react",
            "node",
            "python",
        ]
    },
    // {
    //     title: "Snake Game AI",
    //     description: "Classic snake game with an AI that learns to play using reinforcement learning",
    //     techStack: [
    //     ]
    // },
    // {
    //     title: "Chinese Interpreter",
    //     description: "Created an interpreter for a Mandarin-inspired programming language",
    //     techStack: [
    //     ]
    // },
    // {
    //     title: "Tetris Game",
    //     description: "Built a classic Tetris game with modern features and smooth animations",
    //     techStack: [
    //     ]
    // },
    // {
    //     title: "Water Tracker",
    //     description: "Full-stack application for tracking daily water intake with ML-powered recommendations",
    //     techStack: [
            
    //     ]
    // },
    // {
    //     title: "Snake Game AI",
    //     description: "Classic snake game with an AI that learns to play using reinforcement learning",
    //     techStack: [
    //     ]
    // },
    // {
    //     title: "Chinese Interpreter",
    //     description: "Created an interpreter for a Mandarin-inspired programming language",
    //     techStack: [
    //     ]
    // },
    // {
    //     title: "Tetris Game",
    //     description: "Built a classic Tetris game with modern features and smooth animations",
    //     techStack: [
    //     ]
    // },
    // {
    //     title: "Water Tracker",
    //     description: "Full-stack application for tracking daily water intake with ML-powered recommendations",
    //     techStack: [

    //     ]
    // },
    // {
    //     title: "Snake Game AI",
    //     description: "Classic snake game with an AI that learns to play using reinforcement learning",
    //     techStack: [

    //     ]
    // }
];

const Projects = () => {
    const projectRefs = useRef([]);
    const containerRef = React.useRef(null);
    const [inViewStatuses, setInViewStatuses] = React.useState(
        Array(projectData.length).fill(false)
    );

    React.useEffect(() => {
        if (!containerRef.current || !projectRefs.current) return;
        
        const observers = [];
        
        projectRefs.current.forEach((projectEl, index) => {
            if (!projectEl) return;
            
            const observer = new IntersectionObserver(
                ([entry]) => {
                    setInViewStatuses(prev => {
                        const newState = [...prev];
                        newState[index] = entry.isIntersecting;
                        return newState;
                    });
                },
                { threshold: 0.3 }
            );
            
            observer.observe(projectEl);
            observers.push(observer);
        });
        
        return () => {
            observers.forEach((observer, index) => {
                if (projectRefs.current[index]) {
                    observer.unobserve(projectRefs.current[index]);
                }
                observer.disconnect();
            });
        };
    }, [projectData.length]);

    return (
        <div id="projects" className="projects-container" ref={containerRef}>
            {projectData.map((project, index) => (
                <motion.div 
                    key={index} 
                    className="project-card"
                    ref={el => projectRefs.current[index] = el}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: inViewStatuses[index] ? 1 : 0 }}
                    transition={{ 
                        duration: 0.8, 
                        delay: 0.1
                    }}
                >
                    <h1 id="title">{project.title}</h1>
                    <h1 id="description">{project.description}</h1>
                    <div className="tech-stack">
                        <FontAwesomeIcon icon={faGithub} style={{fontSize: '1.8rem', alignSelf: 'center'}}/>
                        {project.techStack.map((stack, stackIndex) => (
                            <div className="tech-stack-item" key={stackIndex}>
                                <h1>{stack}</h1>
                            </div>
                        ))}
                    </div>
                </motion.div>
            ))}
        </div>
    );
};

export default Projects; 