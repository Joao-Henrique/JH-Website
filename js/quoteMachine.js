const quotes = ["“Some interesting quote 1.”","- Some Author 1", "“Some interesting quote 2.”", "- Some Author 2", "“Some interesting quote 3.”", "- Some Author 3", "“Some interesting quote 4.”","- Some Author 4", "“Some interesting quote 5.”","- Some Author 5", "“Some interesting quote 6.”","- Some Author 6",]

$(document).ready(function(){
	
	//DISPLAY QUOTE WITH FADE EFFECT
	var autoQuoter = function() {
		//USING VANILA JS - UNABLE TO USE FADE EFFECT
		//document.getElementById("quote").innerHTML = quotes[i]
		//document.getElementById("author").innerHTML = quotes[i+1]
		$("#quote").html(quotes[i]).fadeIn(3000).delay(8000).fadeOut(3000);
		$("#author").html(quotes[i+1]).fadeIn(3000).delay(8000).fadeOut(3000);
	};
	
	//VARIABLE HANDLER
	var i = -2;
	var quoteReset = function(){
		i = -2;
	}
	
	//LOOP THROUGHT QUOTES
	var displayQuotes = function(){

		if  ( i == quotes.length ){
			quoteReset()
		}
//		console.log("Total=" + quotes.length, "Current=" + (i/2+1)) //TEST

		autoQuoter()
		i=i+2
		
	}

	//CHANGE QUOTE EVERY 14 SECONDS
	window.setInterval(displayQuotes, 14000);
});