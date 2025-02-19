import styles from './Skills.module.css';

function Skills(){

    return(
        <div className="section" id="skills">
            <h2>
                <span className="blue">skills</span><span className="yellow">()</span><span className="yellow">{" {"}</span>
            </h2>

            <div className={styles.skills}>
                <h3>Web Development</h3>
                <div>- HTML</div>
                <div>- CSS</div>
                <div>- Tailwind CSS</div>
                <div>- JavaScript</div>
                <div>- React</div>
                <div>- Node.js</div>
            </div>

            <div className={styles.skills}>
                <h3>Software Development</h3>
                <div>- Java</div>
                <div>- Python</div>
            </div>

            <div className={styles.skills}>
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

export default Skills