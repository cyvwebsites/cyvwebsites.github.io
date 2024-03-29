//Width and height of browser
var browser_width = window.innerWidth;
var browser_height = window.innerHeight;
//Width and height of screen
var screen_width = screen.width;
var screen_height = screen.height;

//function called to visit linked profile when left side pic/logo is clicked
function go_to_linkein()
{
    'use strict';
    window.location.href = 'https://www.linkedin.com/in/cristian-ventura-43531a168/';
}
//function called when top button is called, which will go to the designated page
// to show the projects
function button_one()
{
    'use strict';
    window.location.href = 'project_one.html';
}
//function called when middle button is called, which will go to the designated page
// to show the projects
function button_two()
{
    'use strict';
    window.location.href = 'project_two.html';
}
//function called when bottom button is called, which will go to the designated page
// to show the projects
function button_three()
{
    'use strict';
    window.location.href = 'project_three.html';
}
//function called when bottom button is called, which will go to the designated page
// to show the projects
function button_four()
{
    'use strict';
    window.location.href = 'project_four.html';
}

//Function used to make website work with whatever screen/browser width is used
// It changes some style properties to make sure website is readable
// the width it changes at is 1000
function checkScreen()
{
    //If screen or browser is less then or equal to 1000
    // then adjust website to smaller screen or browser
    'use strict';
    if((screen_width <= 1000) || (browser_width <= 1000))
    {
        document.getElementById("left_side_intro").style.width = "100%";
        document.getElementById("right_side_intro").style.width = "100%";                                  
    }
    //If screen or browser is greater then 1000
    //then change website back to regular view
    if((screen_width > 1000) && (browser_width > 1000))
    {
        document.getElementById("left_side_intro").style.width = "50%";
        document.getElementById("right_side_intro").style.width = "50%";
                          
                           
    }

}
// call function to check screen right when user opens website
checkScreen();

//Here we set a listener to call function check screen when browser or screen changes
//size
window.addEventListener('resize', 
    function(event){    
                        //Here gets new values of width and height for 
                        // browser and screen
                        browser_width = window.innerWidth;
                        browser_height = window.innerHeight;
                        
                        screen_width = screen.width;
                        screen_height = screen.height;
                        
                        //calls checkscreen function to ajust view if neccessary
                        checkScreen();
                        
                    });