import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

import styles from './Footer.module.css';
import styles2 from './Footer2.module.css';

function Footer({ theme }){
    const[componentStyles, setComponentStyles] = useState(styles);

    useEffect(() => {
        setComponentStyles(theme === 'minimal' ? styles2 : styles);
    }, [theme]);


    return(
        <footer className={componentStyles}>
            <p>&copy; {new Date().getFullYear()} Personal Portfolio - Joel Cooper</p>
        </footer>
    );
}

Footer.propTypes = {
    theme: PropTypes.string.isRequired,
}

export default Footer