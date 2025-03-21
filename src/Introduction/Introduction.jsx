import PropTypes from 'prop-types';
import { useEffect, useState, useRef } from 'react';

import styles from './Introduction.module.css';  // Default styles
import styles2 from './Introduction2.module.css';  // Minimal styles

function Introduction({ theme, viewWork }) {
  const [componentStyles, setComponentStyles] = useState(styles); // Default styles
  const textRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    setComponentStyles(theme === 'minimal' ? styles2 : styles);
  }, [theme]);

  useEffect(() => {
    const text = "I am a full-stack web developer and software developer.";
    const color = "gray";
  
    let letterCount = 0;
    let typingForward = true;
    let visible = true;
  
    const target = textRef.current;
    if (!target) return;
  
    target.style.color = color;
  
    const typingInterval = setInterval(() => {
      if (isPaused) return; // Stop typing if paused
  
      if (typingForward) {
        // Typing Forward (adds one letter at a time)
        target.innerHTML = text.substring(0, letterCount) + "<span class='console-underscore'>_</span>";
        letterCount++;
  
        if (letterCount > text.length) {
          typingForward = false;
          setIsPaused(true);
          setTimeout(() => setIsPaused(false), 8000); // Pause for 5 seconds before deleting
        }
  
      } else {
        // Deleting Backward (removes one letter at a time)
        letterCount--; // <-- Fix: Now decrements one by one
        target.innerHTML = text.substring(0, letterCount) + "<span class='console-underscore'>_</span>";
  
        if (letterCount === 0) {
          typingForward = true;
          setIsPaused(true);
          setTimeout(() => setIsPaused(false), 2000); // Pause for 2 seconds before retyping
        }
      }
    }, 120); // Speed of typing & deleting
  
    const blinkInterval = setInterval(() => {
      visible = !visible;
      const underscore = document.querySelector('.console-underscore');
      if (underscore) {
        underscore.style.opacity = visible ? "1" : "0";
      }
    }, 400); // Cursor blinking
  
    return () => {
      clearInterval(typingInterval);
      clearInterval(blinkInterval);
    };
  
  }, [isPaused]);
 
  

  return (
    <div className={componentStyles.introduction}>

      <h1>
        <span className="red">Hey</span>, <span className="orange">I&apos;m</span> <span className="green">Joel</span>
      </h1>

      <div className='console-container'>
        <span ref={textRef}></span>
      </div>
            

      <button onClick={() => viewWork("projects")}>
        <span className="blue">View Work</span><span className="yellow">()</span>
      </button>

      <div className={componentStyles.arrow}>&#8595;</div>
    </div>
  );
}

// Define prop types
Introduction.propTypes = {
  viewWork: PropTypes.func.isRequired,  // viewWork must be a function
  theme: PropTypes.string.isRequired,   // theme must be a string (default or minimal)
};

export default Introduction;