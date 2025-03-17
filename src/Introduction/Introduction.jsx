import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

import styles from './Introduction.module.css';  // Default styles
import styles2 from './Introduction2.module.css';  // Minimal styles

function Introduction({ theme, viewWork }) {
  const [componentStyles, setComponentStyles] = useState(styles); // Default styles

  useEffect(() => {
    // Update component styles based on the theme
    if (theme === 'minimal') {
      setComponentStyles(styles2);  // Minimal theme styles
    } else {
      setComponentStyles(styles);  // Default theme styles
    }
  }, [theme]);  // Trigger update when theme changes

  return (
    <div className={componentStyles.introduction}>
      <h1>
        <span className="red">Hey</span>, <span className="orange">I&apos;m</span> <span className="green">Joel</span>
      </h1>
      
      <p>I am a full-stack web developer and software developer.</p>

      

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