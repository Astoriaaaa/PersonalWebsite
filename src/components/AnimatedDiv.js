import React, { useEffect, useRef, useState } from "react";

const AnimatedDiv = ({ children, position, name }) => {
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
        threshold: 0.1, // Trigger when 10% of the element is visible
      }
    );

    if (divRef.current) observer.observe(divRef.current);

    return () => observer.disconnect(); // Cleanup observer on unmount
  }, []);

  return (
    <div
      ref={divRef}
      className={`${name} ${position == "odd" ? "odd" : "" } ${isVisible ? "visible" : ""} `}
    >
      {children}
    </div>
  );
};

export default AnimatedDiv;