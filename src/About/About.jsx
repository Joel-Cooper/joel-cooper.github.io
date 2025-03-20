import { useState, useEffect } from "react";
import PropTypes from "prop-types";

import styles from "./About.module.css";
import styles2 from "./About2.module.css";

function About({ theme }){
    const [componentStyles, setComponentStyles] = useState(styles);

    useEffect(() => {
        if (theme === 'minimal'){
            setComponentStyles(styles2);
        } else {
            setComponentStyles(styles);
        }
    }, [theme]);

    return(
        <div id="about" className={componentStyles.section}>
            <h2>
                <span className={componentStyles.blue}>about</span><span className="yellow">()</span><span className="yellow">{" {"}</span>
            </h2>

            <p>
                I am a recent university graduate with a bachelor&apos;s degree in Information Technologies (Software Design & Development).  
                    My passion for programming stems from a love for problem-solving
                    and creating impactful, efficient solutions. Through my studies, I have developed a diverse skill 
                    set tailored to the evolving needs of the tech industry. I&apos;m excited to apply these skills and 
                    gain real-world experience.
            </p>
            
            <h2 className="yellow">{"}"}</h2>
        </div>
    );
}

About.propTypes = {
    theme: PropTypes.string.isRequired,
}

export default About