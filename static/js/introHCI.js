'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("Kandarp Khandwala");
		$('#testjs').text("I just stole this page!");
// any difference between ' and "?
		$(".jumbotron p").toggleClass("active");
	});

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
	$("a.thumbnail").click(projectClick);

	$("#submitBtn").click(upd); 
}

function upd() { // why is there an "e" in the solution?
   var projectID = $('#project').val();
   $(projectID).animate({ width: $('#width').val() }); // see if you can substitute
   var replacement = $('#description').val();
   $(projectID+" .project-description").text(replacement); // space reqd.?!
}

// function projectClick(e) { 
//     // prevent the page from reloading      
// 	console.log("Project clicked");
//     e.preventDefault();
//     // In an event handler, $(this) refers to      
//     // the object that triggered the event      
//     $(this).css("background-color", "#A3D9FF");
// }

function projectClick(e) {
	// Cancel the default action, which prevents the page from reloading
    e.preventDefault();

	// In an event listener, $(this) is the element that fired the event
    var projectTitle = $(this).find("p").text();
    var jumbotronHeader = $(".jumbotron h1");
    /* see if this works if placed after the "erratic" function call
    console.log("count of matching items: "+jumbotronHeader.length); */
    jumbotronHeader.text(projectTitle);

    var containingProject = $(this).closest(".project");
    var description = $(containingProject).find(".project-description");
    if (description.length == 0) {
       $(containingProject).append("<div class='project-description'><p>Description of the project.</p></div>");
    } else {
       // description.html("<p>Stop clicking on me! You just did it at " + (new Date()) + ".</p>");
       //$(containingProject).append("<div class='project-description'><p>Accidental click?</p></div>");
       $('.project-description').fadeToggle();
    }
}