import React, { useEffect, useRef, useState } from "react";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";

const Highlight = ({type, text, color, delay}) => {
    const divRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    
    useEffect(() => {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setIsVisible(true);
              } else {
                setIsVisible(false)
              }
            });
          },
          {
            root: null, // Viewport
            threshold: 1, // Trigger when 10% of the element is visible
          }
        );
    
        if (divRef.current) observer.observe(divRef.current);
    
        return () => observer.disconnect(); // Cleanup observer on unmount
      }, []);

      return (
        <div ref={divRef} style={{display: "inline"}}>
            <RoughNotation  type={type} color={color} show={isVisible} >
                {text}
            </RoughNotation>
        </div>
        
      )
}

export default Highlight;