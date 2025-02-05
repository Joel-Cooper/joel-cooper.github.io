'use strict';
       
window.onerror = function(message, url, line) {    
    alert(`Error: ${message}\n${url}: ${line}`);   
};

startSlideShow();

function startSlideShow(){
    let images = [{src: 'proj1-1.jpg', caption: 'Account Creation Screenshot'}, {src: 'proj1-2.jpg', caption: 'desc2'},
        {src: 'proj1-2.jpg', caption: 'desc3'}, {src: 'proj1-2.jpg', caption: 'desc4'}, 
        {src: 'proj1-2.jpg', caption: 'desc5'}
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
