import PropTypes from "prop-types";
import { useState, useEffect } from "react";

import styles from "./Projects.module.css";
import styles2 from "./Projects2.module.css";

import project1ScreenShot1 from "../assets/project1/proj1-1.jpg";
import project1ScreenShot2 from "../assets/project1/proj1-2.jpg";
import project1ScreenShot3 from "../assets/project1/proj1-3.jpg";
import project1ScreenShot4 from "../assets/project1/proj1-4.jpg";

import project2ScreenShot1 from "../assets/project2/sc1.jpg";
import project2ScreenShot2 from "../assets/project2/sc2.jpg";
import project2ScreenShot3 from "../assets/project2/sc3.jpg";
import project2ScreenShot4 from "../assets/project2/sc4.jpg";
import project2ScreenShot5 from "../assets/project2/sc5.jpg";

const proj1Images = [
    { src: project1ScreenShot1, caption: "Account Creation" },
    { src: project1ScreenShot2, caption: "Form Submission" },
    { src: project1ScreenShot3, caption: "Filtered Database Search for Completed Forms" },
    { src: project1ScreenShot4, caption: "Completed Form" }
];

const proj2Images = [
    { src: project2ScreenShot1, caption: "Initial State" },
    { src: project2ScreenShot2, caption: "Song Uploaded" },
    { src: project2ScreenShot3, caption: "Playing Song" },
    { src: project2ScreenShot4, caption: "Changing Volume with Slider" },
    { src: project2ScreenShot5, caption: "Skipping forward in Song using Duration Bar" }
];

function Projects({ theme }) {
    const [componentStyles, setComponentStyles] = useState(styles);

    useEffect(() => {
        setComponentStyles(theme === 'minimal' ? styles2 : styles);
    }, [theme]);

    const [lightbox, setLightbox] = useState({ index: null, project: null });

    const openLightbox = (index, project) => {
        setLightbox({ index, project });
    };

    const closeLightbox = () => {
        setLightbox({ index: null, project: null });
    };

    const showNext = () => {
        setLightbox(prev => ({
            ...prev,
            index: (prev.index + 1) % (prev.project === "proj1" ? proj1Images.length : proj2Images.length)
        }));
    };

    const showPrev = () => {
        setLightbox(prev => ({
            ...prev,
            index: prev.index === 0 ? (prev.project === "proj1" ? proj1Images.length - 1 : proj2Images.length - 1) : prev.index - 1
        }));
    };

    const getCurrentImages = () => {
        return lightbox.project === "proj1" ? proj1Images : proj2Images;
    };

    return (
        <div id="projects" className="section">
            <h2>
                <span className="blue">projects</span><span className="yellow">()</span><span className="yellow">{" {"}</span>
            </h2>

            {/* Project 1 */}
            <div className={componentStyles.project}>
                <h3>VTCA Website</h3>
                <div>
                    <a href="https://www.vtca.com.au/">Victorian Turf Cricket Association (VTCA)</a>
                    <p>- Work experience during my time as a student.</p>
                    <p>- Worked as a part of a team with four other students.</p>   
                    <p>- Used Wix Website Builder which included learning Velo.</p>    
                    <p>- Took part in regular team/stakeholder meetings.</p>    

                    <div id="catalogue">
                        {proj1Images.map((image, index) => (
                            <img
                                key={index}
                                src={image.src}
                                title={image.caption}
                                width="200"
                                height="150"
                                onClick={() => openLightbox(index, "proj1")}
                                className={componentStyles.thumbnail}
                                alt={image.caption}
                            />                            
                        ))}
                    </div>
                </div>
            </div>
            
            <div className={componentStyles.projectSpacer}>

            </div>

            {/* Project 2 */}
            <div className={componentStyles.project}>
                <h3>Audio File Player (Java)</h3>
                <div>
                    <p>- Personal Project.</p>
                    <p>- Used JavaFX to create application.</p>    
                    <p>- Allows user to upload and listen to mp3 files.</p>    

                    <div id="catalogue">
                        {proj2Images.map((image, index) => (
                            <img
                                key={index}
                                src={image.src}
                                title={image.caption}
                                width="200"
                                height="150"
                                onClick={() => openLightbox(index, "proj2")}
                                className={componentStyles.thumbnail}
                                alt={image.caption}
                            />                            
                        ))}
                    </div>
                </div>
            </div>

            <h2 className="yellow">{"}"}</h2>

            {/* Lightbox Modal */}
            {lightbox.index !== null && (
                <div className={componentStyles.lightboxBackground} onClick={closeLightbox}>
                    <div className={componentStyles.lightbox} onClick={(e) => e.stopPropagation()}>
                        <button className={componentStyles.close} onClick={closeLightbox}>×</button>
                        <button className={componentStyles.prev} onClick={showPrev}>&lt;</button>
                        <img src={getCurrentImages()[lightbox.index].src} alt={getCurrentImages()[lightbox.index].caption} />
                        <p className={componentStyles.caption}>{getCurrentImages()[lightbox.index].caption}</p>
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
};

export default Projects;
