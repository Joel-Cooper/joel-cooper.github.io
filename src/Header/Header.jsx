import PropTypes from 'prop-types';

import linkedInIcon from "../assets/icons/linkedin.png"
import gitHubIcon from "../assets/icons/github.png"
import hackerRankIcon from "../assets/icons/hackerrank.png"
import leetCodeIcon from "../assets/icons/leetcode.png"

import styles from './Header.module.css';

function Header({ viewWork }){

    return (
        <header className={styles.header}>
            <h3>Joel Cooper</h3>

            <nav className={styles.navbar}>
                <button onClick={() => viewWork("about")}>About</button>
                <button onClick={() => viewWork("skills")}>Skills</button>
                <button onClick={() => viewWork("projects")}>Projects</button>
                <button onClick={() => viewWork("contact")}>Contact</button>
            </nav>

            {/* Social Media Icons */}
            <div className={styles.icons}>
                <a href='https://www.linkedin.com' target='blank' rel='noopener noreferrer'>
                    <img src={linkedInIcon} alt='LinkedIn'></img>
                </a>
                <a href='https://github.com' target='blank' rel='noopener noreferrer'>
                    <img src={gitHubIcon} alt='LinkedIn'></img>
                </a>
                <a href='https://www.hackerrank.com' target='blank' rel='noopener noreferrer'>
                    <img src={hackerRankIcon} alt='LinkedIn'></img>
                </a>
                <a href='https://leetcode.com' target='blank' rel='noopener noreferrer'>
                    <img src={leetCodeIcon} alt='LinkedIn'></img>
                </a>
            </div>
        </header>
    );
}

// Define prop types
Header.propTypes = {
    viewWork: PropTypes.func.isRequired,    // viewWork must be a function
}

export default Header