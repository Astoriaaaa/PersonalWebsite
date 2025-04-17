import React, { useState, useEffect } from 'react';
import Section1 from './Section1';
import Section2 from './Section2';
import Projects from './Projects';
import Footer from './Footer';
import './styles/global.css';


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
            <Section1 activeSection={activeSection} />
            <Section2 />
            <Projects />
            <Footer />
        </div>
    );
}