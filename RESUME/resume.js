var navMenuAnchorTags= document.querySelectorAll('.nav-menu a');

// console.log(navMenuAnchorTags);

for(var i=0 ; i < navMenuAnchorTags.length ; i++){

    navMenuAnchorTags[i].addEventListener('click',function(event){
        event.preventDefault();
        var targetSectionID = this.textContent.trim().toLowerCase();
       
        // console.log(targetSectionID);
      
        var targetSection = document.getElementById(targetSectionID);
      
        console.log(targetSection);
       
        var interval = setInterval(function(){
        var targetSectionCoordinates = targetSection.getBoundingClientRect();
            if(targetSectionCoordinates.top<=0){
                clearInterval(interval);
                return;
            }
            window.scrollBy(0,80);
        },20);
});
    }


// |||****ANOTHER APPROACH****|||


    // var navMenuAnchorTags= document.querySelectorAll('.nav-menu a');
    // var interval;
// console.log(navMenuAnchorTags);

// for(var i=0 ; i < navMenuAnchorTags.length ; i++){

//     navMenuAnchorTags[i].addEventListener('click',function(event){
//         event.preventDefault();
//         var targetSectionID = this.textContent.trim().toLowerCase();
       
        // console.log(targetSectionID);
      
        // var targetSection = document.getElementById(targetSectionID);
      
        // console.log(targetSection);
       
    //   **this line can also be written** -->>>interval = setInterval(scrollVertically,10,targetSection);

    //     interval= setInterval(function(){
    //         scrollVertically(targetSection);
    //           },10);  
    // });
    // }

    // function scrollVertically(targetSection){
    // var targetSectionCoordinates = targetSection.getBoundingClientRect();
    //         if(targetSectionCoordinates.top<=0){
    //             clearInterval(interval);
    //             return;
    //         }
    //         window.scrollBy(0,80);
    //     }



// ****SKILLS PROGRESS ANIMATION****

// Handle scroll event on window
// Check that skills section container is visible or not
// ensure that initial width of colored skill divs is zero -> initialised/reset to - width value
// Start aniamtion on every skill -> increase skill width from 0 to skill level at regular intervals
// Store skill level -> html with the help of data attribute


var progressBars = document.querySelectorAll('.skill-progress > div');
var skillsContainer = document.getElementById('skills-container');
window.addEventListener('scroll', checkScroll);
var animationDone = false;


function initialiseBars(){
   for(let bar of progressBars){
       bar.style.width = 0 + '%';
   }
}

initialiseBars();

function fillBars(){
   
    for(let bar of progressBars){
        let targetWidth = bar.getAttribute('data-bar-width');
        let currentWidth = 0;
        let interval = setInterval(function(){
            if(currentWidth > targetWidth){
                clearInterval(interval);
                return;
            }
            currentWidth++;
            bar.style.width = currentWidth + '%';
        },3);
    }
}

function checkScroll(){

    // check whether skills container is visible or not
    var coordinates = skillsContainer.getBoundingClientRect();
    if(!animationDone && coordinates.top <= window.innerHeight){
        animationDone = true;
        console.log('Skills Section Visible');
        fillBars();
    }

    else if(coordinates.top > window.innerHeight){
        animationDone = false;
        initialiseBars();
    }
}