import styles from './Footer.module.css';

function Footer(){

    return(
        <footer className={styles}>
            <p>&copy; {new Date().getFullYear()} Personal Portfolio - Joel Cooper</p>
        </footer>
    );
}

export default Footer