import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

import styles from './Skills.module.css';
import styles2 from './Skills2.module.css';

function Skills( theme ){
    const [componentStyles, setComponentStyles] = useState(styles);

    useEffect(() => {
        if (theme === 'minimal'){
            setComponentStyles(styles2);
        } else {
            setComponentStyles(styles);
        }
    }, [theme]);


    return(
        <div className="section" id="skills">
            <h2>
                <span className="blue">skills</span><span className="yellow">()</span><span className="yellow">{" {"}</span>
            </h2>

            <div className={componentStyles.skills}>
                <h3>Web Development</h3>
                <div>- HTML</div>
                <div>- CSS</div>
                <div>- Tailwind CSS</div>
                <div>- JavaScript</div>
                <div>- React</div>
                <div>- Node.js</div>
            </div>

            <div className={componentStyles.skills}>
                <h3>Software Development</h3>
                <div>- Java</div>
                <div>- Python</div>
            </div>

            <div className={componentStyles.skills}>
                <h3>Miscellaneous</h3>
                <div>- MySQL</div>
                <div>- GitHub</div>
                <div>- Amazon Web Services</div>
                <div>- Wix Website Builder</div>
            </div>

            <h2 className="yellow">{"}"}</h2>
        </div>
    );
}

// Define Prop Types
Skills.propTypes = {
    theme: PropTypes.string.isRequired,
}

export default Skills