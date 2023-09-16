import React, { useState, useEffect } from "react";

const Typewriter = ({ text, speed, initialDelay }) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startTyping, setStartTyping] = useState(false);

  useEffect(() => {
    if (!startTyping) {
      const timer = setTimeout(() => {
        setStartTyping(true);
      }, initialDelay);

      return () => clearTimeout(timer);
    }
  }, [startTyping, initialDelay]);

  useEffect(() => {
    if (startTyping && currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, speed);

      return () => clearTimeout(timer);
    }
  }, [currentIndex, text, speed, startTyping]);

  return <React.Fragment>{displayText}</React.Fragment>;
};

export default Typewriter;
