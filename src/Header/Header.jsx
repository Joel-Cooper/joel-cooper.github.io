import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

import linkedInIcon from "../assets/icons/linkedin.png"
import gitHubIcon from "../assets/icons/github.png"
import hackerRankIcon from "../assets/icons/hackerrank.png"
import leetCodeIcon from "../assets/icons/leetcode.png"

import styles from './Header.module.css';
import styles2 from './Header2.module.css';

function Header({ theme, viewWork }){
    const [componentStyles, setComponentStyles] = useState(styles);

    useEffect(() => {
        setComponentStyles(theme === 'minimal' ? styles2 : styles);
    }, [theme]);

    return (
        <header className={componentStyles.header}>
            <h3><span className={componentStyles.redHover}>J</span>
                <span className={componentStyles.orangeHover}>o</span>
                <span className={componentStyles.greenHover}>e</span>
                <span className={componentStyles.blueHover}>l</span>
                <span> </span>  
                <span className={componentStyles.redHover}>C</span>
                <span className={componentStyles.orangeHover}>o</span>
                <span className={componentStyles.greenHover}>o</span>
                <span className={componentStyles.blueHover}>p</span>
                <span className={componentStyles.redHover}>e</span>
                <span className={componentStyles.orangeHover}>r</span>
            </h3>

            <nav className={componentStyles.navbar}>
                <button onClick={() => viewWork("about")}>About</button>
                <button onClick={() => viewWork("skills")}>Skills</button>
                <button onClick={() => viewWork("projects")}>Projects</button>
                <button onClick={() => viewWork("contact")}>Contact</button>
            </nav>

            {/* Social Media Icons */}
            <div className={componentStyles.icons}>
                <a href='https://www.linkedin.com/in/joel-cooper-224974269/' target='blank' rel='noopener noreferrer'>
                    <img src={linkedInIcon} alt='LinkedIn'></img>
                </a>
                <a href='https://github.com/Joel-Cooper' target='blank' rel='noopener noreferrer'>
                    <img src={gitHubIcon} alt='LinkedIn'></img>
                </a>
                <a href='https://www.hackerrank.com/profile/joel_cooper' target='blank' rel='noopener noreferrer'>
                    <img src={hackerRankIcon} alt='LinkedIn'></img>
                </a>
                <a href='https://leetcode.com/u/joel-cooper/' target='blank' rel='noopener noreferrer'>
                    <img src={leetCodeIcon} alt='LinkedIn'></img>
                </a>
            </div>
        </header>
    );
}

// Define prop types
Header.propTypes = {
    viewWork: PropTypes.func.isRequired,    // viewWork must be a function
    theme: PropTypes.string.isRequired,
};

export default Header