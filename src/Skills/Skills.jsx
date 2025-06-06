import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

import styles from './Skills.module.css';
import styles2 from './Skills2.module.css';

import htmlIcon from '../assets/skills/html-icon.png';
import cssIcon from '../assets/skills/css-icon.png';
import javascriptIcon from '../assets/skills/javascript-icon.png';
import angularIcon from '../assets/skills/angular-icon.png';
import reactIcon from '../assets/skills/react-icon.png';
import nodejsIcon from '../assets/skills/nodejs-icon.png';
import javaIcon from '../assets/skills/java-icon.png';
import springBootIcon from '../assets/skills/springboot-icon.png';
import pythonIcon from '../assets/skills/python-icon.png';
import mysqlIcon from '../assets/skills/mysql-icon.png';
import firebaseIcon from '../assets/skills/firebase-icon.png';
import githubIcon from '../assets/skills/github-icon.png';
import awsIcon from '../assets/skills/aws-icon.png';
import wixIcon from '../assets/skills/wix-icon.png';

function Skills({ theme }){
    const [componentStyles, setComponentStyles] = useState(styles);

    useEffect(() => {
        setComponentStyles(theme === 'minimal' ? styles2 : styles);
    }, [theme]);


    return(
        <div className={componentStyles.section}>
            <h2>
                <span className="blue">skills</span><span className="yellow">()</span><span className="yellow">{" {"}</span>
            </h2>

            <div className={componentStyles.skills}>
                <h3>Web Development</h3>
                <div><img src={htmlIcon} alt='HTML Icon'/><p className='caption'>HTML</p></div>
                <div><img src={cssIcon} alt='CSS Icon'/><p className='caption'>CSS</p></div>
                <div><img src={javascriptIcon} alt='JavaScript Icon'/><p className='caption'>JavaScript</p></div>
                <div><img src={angularIcon} alt='Angular Icon'/><p className='caption'>Angular</p></div>
                <div><img src={reactIcon} alt='React Icon'/><p className='caption'>React</p></div>
                <div><img src={nodejsIcon} alt='Node.js Icon' className='rectangle'/><p className='caption'>Node.js</p></div>
            </div>

            <div className={componentStyles.skills}>
                <h3>Software Development</h3>
                <div><img src={javaIcon} alt='Java Icon'/><p className='caption'>Java</p></div>
                <div><img src={springBootIcon} alt='Spring Boot Icon'/><p className='caption'>Spring Boot</p></div>
                <div><img src={pythonIcon} alt='Python Icon'/><p className='caption'>Python</p></div>
            </div>
            

            <div className={componentStyles.otherSkills} id='misc'>
                <h3>Miscellaneous</h3>
                <div><img src={mysqlIcon} alt='MySQL Icon' className='rectangle'/><p className='caption'>MySQL</p></div>
                <div><img src={firebaseIcon} alt='Firebase Icon' className='rectangle'/><p className='caption'>Firebase</p></div>
                <div><img src={githubIcon} alt='GitHub Icon'/><p className='caption'>GitHub</p></div>
                <div><img src={awsIcon} alt='Amazon Web Services Icon' className='rectangle'/><p className='caption'>Amazon Web Services</p></div>
                <div><img src={wixIcon} alt='Wix Website Builder Icon' className='rectangle'/><p className='caption'>Wix Website Builder</p></div>
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