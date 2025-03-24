import PropTypes from "prop-types";
import { useEffect, useState } from "react";

import styles from './Contact.module.css';
import styles2 from './Contact2.module.css';

function Contact({ theme }){
    const [componentStyles, setComponentStyles] = useState(styles);

    useEffect(() => {
        setComponentStyles(theme === 'minimal' ? styles2 : styles);
    }, [theme])

    return(
        <div id="contact" className="section">
            <h2>
                <span className="blue">contact</span><span className="yellow">()</span><span className="yellow">{" {"}</span>
            </h2>

            <div className={componentStyles.contact}>
                <p>Feel free to contact me using my email address:</p>

                <a href="mailto:joel.cooper@hotmail.com">joel.cooper@hotmail.com</a>
            </div>
            
            <h2 className="yellow">{"}"}</h2>
        </div>
    );
}

Contact.propTypes = {
    theme: PropTypes.string.isRequired,
}

export default Contact