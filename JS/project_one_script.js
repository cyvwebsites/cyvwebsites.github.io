//Width and height of browser
var browser_width = window.innerWidth;
var browser_height = window.innerHeight;
//Width and height of screen
var screen_width = screen.width;
var screen_height = screen.height;

//function called to go back to home page
function go_home()
{
    'use strict';
    window.location.href = 'index.html';
}
// function called to go to project website
function go_to_project()
{
    'use strict';
    window.location.href = 'https://testingdacode.com/';
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
        document.getElementById("left_side_container").style.width = "100%";
        document.getElementById("right_side_container").style.width = "100%";                                  
    }
    //If screen or browser is greater then 1000
    //then change website back to regular view
    if((screen_width > 1000) && (browser_width > 1000))
    {
        document.getElementById("left_side_container").style.width = "50%";
        document.getElementById("right_side_container").style.width = "50%";
                          
                           
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