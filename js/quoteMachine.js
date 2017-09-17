$(document).ready(function(){
	
	const quotes = ["“The best way to predict the future is to invent it”","― Alan Kay", "“If somebody offers you an amazing opportunity but you are not sure you can do it, say yes – then learn how to do it later”", "― Richard Branson", "“Live as if you were to die tomorrow. Learn as if you were to live forever”", "― Mahatma Gandhi", "“Impossible is something that should be a lot of fun disproving”","― Richard Branson", "“If you are not embarrassed by the first version of your product, you’ve launched too late”","- Reid Hoffman", "“Whenever you find youself on the side of the majority, it is time to pause and reflect”","― Mark Twain", "“The most impressive people I know spent their time with their head down getting shit done for a long, long time”","― Sam Altman", "“Our industry does not respect tradition, it only respects inovation”","― Satya Nadella", "“It is not the strongest of the spicies that survive, nor the most inteligent, but the one most responsive to chage”","― Charles Darwin", "“Money is like gasoline in a roadtrip. You dont whant to run out of gas on the trip, but you're not doing a tour of gas stations”","― Tim O'Reilly"]
	
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