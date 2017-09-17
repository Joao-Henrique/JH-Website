$(document).ready(function(){
    
    // SHOW LOADER
    $("#loaderDiv").css("visibility", "visible");

	
    var startAnimations = function() {
        $("#loaderDiv").css("visibility", "collapse");
        $("body").css("visibility", "visible");
    }
	//CHANGE QUOTE EVERY 14 SECONDS
	window.setInterval(startAnimations, 10000);
});