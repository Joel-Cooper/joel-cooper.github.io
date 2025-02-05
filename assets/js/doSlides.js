/*  doSlides(images, containerSelector)
     
    ================================================

              
    Turns a container element into an slide show

              
    with a collection of images.

              
    ================================================ */

              
    function doSlides(images, containerSelector, delay=3000) {

        // Elements
        let container = document.querySelector(containerSelector);

        let img = container.querySelector('img');

        let prefetch = new Image();
        


        // Add Button
        let button = document.createElement('button');
        button.id = 'run-button';       
        button.textContent = 'Start';
        container.insertAdjacentElement('beforeend', button);

        
        // Add Caption             
        let caption = document.createElement('p');  
        container.insertAdjacentElement('beforeend', caption);
         

        // Variables
        let slideNumber = 0;
        let running;    // undefined
        
        //img.addEventListener('click', toggle);
        button.addEventListener('click', toggle);

        next();


        document.onkeypress = event => {
            if(event.key == ' ') {
                toggle();
                event.preventDefault();
            }                

                
        };
    


        function toggle() {
            if(!running){
                running = setInterval(next, delay);
                next(); 
                button.textContent = 'Stop';
                container.classList.add('running');
            }
            else{
                running = clearInterval(running);
                button.textContent = 'Start';
                container.classList.remove('running');
            }
        }


        function next(){
            //Populate Image
            //img.src = `images/slides/${images[slideNumber++]}`;
            img.src = `images/project_1/${images[slideNumber].src}`;
            caption.textContent = images[slideNumber].caption;
            img.title = images[slideNumber].caption;
            img.alt = images[slideNumber].caption;
            slideNumber++;
            
            // Wrap around
            if (slideNumber >= images.length) slideNumber = 0;

            // Predetch
            //prefetch.src = `images/slides/${images[slideNumber]}`;
            prefetch.src = `images/project_1/${images[slideNumber].src}`;
        }

              
    }
