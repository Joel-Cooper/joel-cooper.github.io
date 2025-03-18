import PropTypes from "prop-types";
import { useState, useEffect } from "react";

import styles from "./Projects.module.css";
import styles2 from "./Projects2.module.css";

import project1ScreenShot1 from "../assets/project1/proj1-1.jpg";
import project1ScreenShot2 from "../assets/project1/proj1-2.jpg";
import project1ScreenShot3 from "../assets/project1/proj1-3.jpg";
import project1ScreenShot4 from "../assets/project1/proj1-4.jpg";

const images = [
    { src: project1ScreenShot1, caption: "Account Creation" },
    { src: project1ScreenShot2, caption: "Form Submission" },
    { src: project1ScreenShot3, caption: "Filtered Database Search for Completed Forms" },
    { src: project1ScreenShot4, caption: "Completed Form" }
]

function Projects({ theme }){
    const [componentStyles, setComponentStyles] = useState(styles);

    useEffect(() => {
        if (theme === 'minimal'){
            setComponentStyles(styles2);
        } else {
            setComponentStyles(styles);
        }
    }, [theme]);

    const [lightboxIndex, setLightboxIndex] = useState(null);

    const openLightbox = (index) => {
        setLightboxIndex(index);
    };

    const closeLightbox = () => {
        setLightboxIndex(null);
    };

    const showNext = () => {
        setLightboxIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const showPrev = () => {
        setLightboxIndex((prevIndex) => prevIndex === 0 ? images.length - 1 : prevIndex - 1);
    };

    return(
        <div id="projects" className="section">
            <h2>
                <span className="blue">projects</span><span className="yellow">()</span><span className="yellow">{" {"}</span>
            </h2>

            <div className="project">
                <h3>VTCA Website</h3>
                <div>
                    <a href="https://www.vtca.com.au/">Victorian Turf Cricket Association (VTCA)</a>
                    <p> - Work experience during my time as a student.</p>
                    <p>- Worked as a part of a team with four other students.</p>   
                    <p>- Used Wix Website Buidler which included learning Velo.</p>    
                    <p>- Took part in regular team/stakeholder meetings.</p>    
                    
                    <div id="catalogue">

                        {images.map((image, index) => (
                            <img
                                key={index}
                                src={image.src}
                                title={image.caption}
                                width="200"
                                height="150"
                                onClick={() => openLightbox(index)}
                                className={componentStyles.thumbnail}
                                alt={image.caption}
                            />                            
                        ))}
                    </div>
                </div>
            </div>

            <h2 className="yellow">{"}"}</h2>

            {/* Lightbox Modal */}
            {lightboxIndex !== null && (
                <div className={componentStyles.lightboxBackground} onClick={closeLightbox}>
                <div className={componentStyles.lightbox} onClick={(e) => e.stopPropagation()}>
                    <button className={componentStyles.close} onClick={closeLightbox}>×</button>
                    <button className={componentStyles.prev} onClick={showPrev}>&lt;</button>
                    <img src={images[lightboxIndex].src} alt={images[lightboxIndex].caption} />
                    <p className={componentStyles.caption}>{images[lightboxIndex].caption}</p>
                    <button className={componentStyles.next} onClick={showNext}>&gt;</button>
                </div>
                </div>
            )}
        </div>
    );
}

// Define Prop Types
Projects.propTypes = {
    theme: PropTypes.string.isRequired,
}

export default Projects