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
