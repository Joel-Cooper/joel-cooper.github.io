'use strict';
       
window.onerror = function(message, url, line) {    
    alert(`Error: ${message}\n${url}: ${line}`);   
};

startSlideShow();

function startSlideShow(){
    let images = [{src: 'proj1-1.jpg', caption: 'Account Creation Screenshot'}, {src: 'proj1-2.jpg', caption: 'Form Submission'},
        {src: 'proj1-3.jpg', caption: 'Uploaded Forms'}, {src: 'proj1-4.jpg', caption: 'Uploaded Form'}
    ];

    doSlides(images, 'div#slides', 3000);

}

function viewWork(section){
    const aboutSection = document.querySelector('#about');
    const skillsSection = document.querySelector('#skills');
    const projectsSection = document.querySelector('#projects');
    const contactSection = document.querySelector('#contact')
    
    if (section === 'about'){
        aboutSection.scrollIntoView({ behavior: 'smooth'});
    } 
    else if (section === 'skills') {
        skillsSection.scrollIntoView({ behavior: 'smooth'});
    }
    else if (section === 'projects') {
        projectsSection.scrollIntoView({ behavior: 'smooth'});
    }
    else if (section === 'contact') {
        contactSection.scrollIntoView({ behavior: 'smooth'});
    }
}
