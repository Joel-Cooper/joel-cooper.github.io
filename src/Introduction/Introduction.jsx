import PropTypes from 'prop-types';
import styles from './Introduction.module.css';

function Introduction({ viewWork }){

    return(
        <div className={styles.introduction}>
            <h1>
                <span className="red">Hey</span>, <span className="orange">I&apos;m</span> <span className="green">Joel</span>
            </h1>
            
            <p>I am a full stack web developer and software developer.</p>

            <p><span className="yellow">*** </span>This website is a work in progress<span className="yellow"> ***</span></p>

            <button onClick={() => viewWork("projects")}>
                <span className="blue">View Work</span><span className="yellow">()</span>
            </button>

            <div className={styles.arrow}>&#8595;</div>
        </div>
    );
}

// Define prop types
Introduction.propTypes = {
    viewWork: PropTypes.func.isRequired,    // viewWork must be a function
}

export default Introduction