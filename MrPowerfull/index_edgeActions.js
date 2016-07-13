/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         $('head').append('<link rel="stylesheet" href="css/style.css" type="text/css" />'); // connect css file
         
         //// GLOBAL VARIABLES
         sym.setVariable("wave", 1); // set variable "wave" to 1, what is the level
         sym.setVariable("intro2", 1); // set variable "intro2" to 1, if intro2 is 0, the game intros will not be shown
         sym.setVariable("time", 18); // set variable "time" to 18, the time in the game when will go down each level
         sym.setVariable("stress", 1); // set variable "stress" to 1, this is the stresslevel
         sym.setVariable("game_part", 1); // set variable "game_part" to 1, this is the part of the game its in now
         sym.setVariable("win_game_1", false); // set variable "win_game_1" to false, this is a variable for game 1
         sym.setVariable("lose_game_1", false); // set variable "lose_game_1" to false, this is a variable for game 1
         sym.setVariable("angry", 20); // set variable "angry" to 20, volume for angry sound game 1 ( starts with 20% )
         sym.setVariable("banner1", 0); // set variable "banner1" to 0, will turn to one when 1 when its correct, game 1
         sym.setVariable("banner2", 0); // set variable "banner2" to 0, will turn to one when 1 when its correct, game 1
         sym.setVariable("banner3", 0); // set variable "banner3" to 0, will turn to one when 1 when its correct, game 1
         sym.setVariable("banner4", 0); // set variable "banner4" to 0, will turn to one when 1 when its correct, game 1
         
         sym.setVariable("game_2_klik", 1); // set variable "game_2_klik" to 1, this enables clicking in game 1, when is 0 clicking is disabled, game 2
         sym.setVariable("game_2_win2", false); // set variable "game_2_win2" to false, game 2
         sym.setVariable("game_2_lose2", false); // set variable "game_2_lose2" to false, game 2
         sym.setVariable("game_2_h1", false); // set variable "game_2_h1" to false,this is the variable of mouth 1 if this is true, mounth 1 got hit , game 2
         sym.setVariable("game_2_h2", false); // set variable "game_2_h2" to false,this is the variable of mouth 2 if this is true, mounth 2 got hit , game 2
         sym.setVariable("game_2_h3", false); // set variable "game_2_h3" to false,this is the variable of mouth 3 if this is true, mounth 3 got hit , game 2
         

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================

   //=========================================================
   
   //Edge symbol: 'faster'
   (function(symbolName) {   
   
      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         ////// time 
         	var time = sym.getComposition().getStage().getVariable("time"); // get current global variable of the current time
         		console.log("time " + time);
         		if(time < 2 ) // if time is less then 2 seconds already 
         		{ // if yes
         		sym.getComposition().getStage().setVariable("time",0); // set variable to 0 seconds
         		}else{ // if no
         			var b = time - 6; // current time - 6 seconds
         			console.log("new time " + b);
         
         			sym.getComposition().getStage().setVariable("time",b); // set variable for the time with the new time
         /////// time end 
         		}
         ////// no intro anymore
         
         	sym.getComposition().getStage().setVariable("intro2",0); // set variable of intro2 to disable all game intros
         
         /////////////
         
         ////// reloop
         
         	var game_c = sym.getComposition().getStage().createChildSymbol("game_1", "Stage");  // go back to game 1 again
         	game_c.play();
         	sym.deleteSymbol(); // delete this symbol
         
         /////////////

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         var wave = sym.getComposition().getStage().getVariable("wave"); // get global variable of the current level 
         var wavetext = "Level "+ wave; // how to show the text ( level 1 )
         
         // Change the text in an element
         sym.$("wave").html(wavetext); // show text  of the current level
         
         var newwave = wave + 1; // + 1 level 
         
         // RESET ALL GLOBAL VARIABLES
         sym.getComposition().getStage().setVariable("wave", newwave);
         sym.getComposition().getStage().setVariable("win_game_1", false);
         sym.getComposition().getStage().setVariable("lose_game_1", false);
         sym.getComposition().getStage().setVariable("angry", 20);
         sym.getComposition().getStage().setVariable("happy", 0);
         sym.getComposition().getStage().setVariable("banner1", 0);
         sym.getComposition().getStage().setVariable("banner2", 0);
         sym.getComposition().getStage().setVariable("banner3", 0);
         sym.getComposition().getStage().setVariable("banner4", 0);
         sym.getComposition().getStage().setVariable("game_2_klik", 1);
         sym.getComposition().getStage().setVariable("game_2_win2", false);
         sym.getComposition().getStage().setVariable("game_2_lose2", false);
         sym.getComposition().getStage().setVariable("game_2_h1", false);
         sym.getComposition().getStage().setVariable("game_2_h2", false);
         sym.getComposition().getStage().setVariable("game_2_h3", false);

      });
      //Edge binding end

   })("faster");
   //Edge symbol end:'faster'

   //=========================================================
   
   //Edge symbol: 'win'
   (function(symbolName) {   
   
      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         var foo2 = sym.getComposition().getStage().getVariable("intro2");
          // get variables
         	var game_count = sym.getComposition().getStage().getVariable("game_part");
         	var c = game_count + 1;
         
         if(game_count == 3) // get game count
         {
         
         		sym.getComposition().getStage().createChildSymbol("faster", "Stage"); // create symbol faster
         		sym.getComposition().getStage().setVariable("game_part",1); // get part back
         
         }else{ // if not is 3rd game 
         
         
         
         if(foo2 == 1) // if intro needs to be show
         {
         		var b = "intro_game_"+ c; // get intro_game_ text
         		var game_a = sym.getComposition().getStage().createChildSymbol(b, "Stage");  // create this symbol 
         
         		sym.getComposition().getStage().setVariable("game_part", c); // get variable game_part 
         
         
         }else { // if not 1
         
         
         		var b = "game_"+ c; // get game_
         		var game_a = sym.getComposition().getStage().createChildSymbol(b, "Stage");  // create this symbol
         
         		sym.getComposition().getStage().setVariable("game_part", c); // set new game_part
         
         	game_a.play();
         }
         }
            sym.deleteSymbol(); // delete this symbol

      });
      //Edge binding end

   })("win");
   //Edge symbol end:'win'

   //=========================================================
   
   //Edge symbol: 'game_1'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${won}", "click", function(sym, e) {
         // insert code for mouse click here
         var game_1 = sym.getComposition().getStage().createChildSymbol("win", "Stage");  
          sym.deleteSymbol();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${lose}", "click", function(sym, e) {
         // insert code for mouse click here
         var game_1 = sym.getComposition().getStage().createChildSymbol("lose", "Stage");  
          sym.deleteSymbol();
         

      });
      //Edge binding end

      

      

      Symbol.bindElementAction(compId, symbolName, "${_Rectangle}", "click", function(sym, e) {
         console.log("before game_1_ready");
         
         function game_1_ready() { // function ready game 1 
         ////
         									// RESET GLOBAL VARIABLES OF GAME 1
         									sym.getComposition().getStage().setVariable("win_game_1", false);
         									sym.getComposition().getStage().setVariable("lose_game_1", false);
         									sym.getComposition().getStage().setVariable("angry", 20);
         									sym.getComposition().getStage().setVariable("happy", 0);
         									sym.getComposition().getStage().setVariable("banner1", 0);
         									sym.getComposition().getStage().setVariable("banner2", 0);
         									sym.getComposition().getStage().setVariable("banner3", 0);
         									sym.getComposition().getStage().setVariable("banner4", 0);
         
             console.log("%%%%%%%%%%%%%%%%------ FUNCTION GAME_1_READY CALLED -----%%%%%%%%%%%%%");
         
             //////////
             var time = sym.getComposition().getStage().getVariable("time"); // get current time
         
         	var count = 2 + time; // 2 seconds + current time seconds
         	var totaltime = count * 1000; // get current time seconds 
         	var angry = sym.getComposition().getStage().getVariable("angry"); // get current angry variable
            var newangry = angry / 100; // make variable angry to 1/100, so 20 will be 0.2
         			console.log("angry start = " + newangry);
         
         				var win2 = sym.getComposition().getStage().getVariable("game_1_win"); // get variable game_1_win
         				var lose2 = sym.getComposition().getStage().getVariable("game_1_lose");  // get variable game_1_lose
         
         		$( ".bar_line1" ).animate({ // animate timebar to 0% width with the new totaltime, if completed it runs the function lose
         			width: "0%" 
         		  }, totaltime, function() {
         
         			lose(); // lose function called
         
         
         		 }); // end animate bar
         
         		 /// begin lose
         
         		 function lose() { // function lose
         						if(! lose2 ){ // if didnt lose yet
         							lose2 = 1; // set lose to 1
         									console.log("### Lose Game 1 ###");
         									$( ".bar_line1" ).stop(); // stop timebar
         
         
         								/*
         								var childSymbols = sym.getChildSymbols(); 
         								for(var i=0; i<childSymbols.length; i++) { // Return the number of direct children    
         								childSymbols[i].stop(); // Stop all of the children
         								}*/
         
         									sym.$("angry_protest")[0].pause(); // pause sound
         
         									/// RESET ALL GLOBAL VARIABLES
         									sym.getComposition().getStage().setVariable("win_game_1", false);
         									sym.getComposition().getStage().setVariable("lose_game_1", false);
         									sym.getComposition().getStage().setVariable("angry", 20);
         									sym.getComposition().getStage().setVariable("happy", 0);
         									sym.getComposition().getStage().setVariable("banner1", 0);
         									sym.getComposition().getStage().setVariable("banner2", 0);
         									sym.getComposition().getStage().setVariable("banner3", 0);
         									sym.getComposition().getStage().setVariable("banner4", 0);
         
         
         							var game_2 = sym.getComposition().getStage().createChildSymbol("lose", "Stage"); // create symbol lose 
         
         							sym.deleteSymbol(); // delete current symbol (game 1
         
         						}
         				};
         
         		 // end lose
         		
         	// play angry protest sound with new volume
         	sym.$("angry_protest")[0].currentTime = 0;
         	sym.$("angry_protest")[0].volume = newangry;
         	sym.$("angry_protest")[0].play();
         	//sym.$("happy_protest_long")[0].currentTime = 0;
         	//sym.$("happy_protest_long")[0].play();
         	//sym.$("happy_protest_long")[0].volume = 0.0;
         
         
         	}
         
         game_1_ready(); // start function game 1
         
         sym.$("Rectangle").hide(); // hide start screen game 1
         

      });
      //Edge binding end

   })("game_1");
   //Edge symbol end:'game_1'

   //=========================================================
   
   //Edge symbol: 'intro_game_3'
   (function(symbolName) {   
   
      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6592, function(sym, e) {
         var game_3 = sym.getComposition().getStage().createChildSymbol("game_3", "Stage");  
         game_3.play();
         sym.deleteSymbol();

      });
      //Edge binding end

   })("intro_game_3");
   //Edge symbol end:'intro_game_3'

   //=========================================================
   
   //Edge symbol: 'game_2'
   (function(symbolName) {   
      
      Symbol.bindElementAction(compId, symbolName, "${lose}", "click", function(sym, e) {
         var game_2 = sym.getComposition().getStage().createChildSymbol("lose", "Stage");  
          sym.deleteSymbol();
      
      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${won}", "click", function(sym, e) {
         var game_2 = sym.getComposition().getStage().createChildSymbol("win", "Stage");  
          sym.deleteSymbol();
      
      });
      //Edge binding end

      

      

      Symbol.bindElementAction(compId, symbolName, "${_group}", "click", function(sym, e) {
         //  click to shoot //
         
         // get variables that are needed
         var klik2 = sym.getComposition().getStage().getVariable("game_2_klik");
         var win2 = sym.getComposition().getStage().getVariable("game_2_win2");
         var lose2 = sym.getComposition().getStage().getVariable("game_2_lose2");
         
         if(klik2 == 1) // if already clicked 
         {
         
         				klik2 = 0; // set click to 0 to disable the click 
         				sym.getComposition().getStage().setVariable("game_2_klik", 0); // set global variable to 0 to disable the click 
         
         				$(".circle001").hide(); // hide the paperball at the bottom
         
         				var gen =  sym.createChildSymbol("game_2_prop", "container"); // create symbol prop
         
         				var a2 = $(".tracker").css("transform"); // get the css of the arrow 
         				
         				/// javascript to get the angle out of the transform
         				var values = a2.split('(')[1];
         					 values = values.split(')')[0];
         					 values = values.split(',');
         				var a = values[0];
         				var b = values[1];
         				var c = values[2];
         				var d = values[3];
         
         				var scale = Math.sqrt(a*a + b*b);
         
         				// arc sin, convert from radians to degrees, round
         				// DO NOT USE: see update below
         				var sin = b/scale;
         				var angle = Math.round(Math.asin(sin) * (180/Math.PI)); // current angle of the arrow
         
         					
         				//////////////
         				gen.$("line").css({ 
         				"-webkit-transform-origin": "50% 100%",
         				"transform-origin": "50% 100% 0px",
         				"-webkit-transform-style": "preserve-3d",
         				"-webkit-transform": "translate(0px, 0px) translateZ(0px) rotate(" + angle + "deg) scale(1, 1)",
         				"transform": "translate(0px, 0px) translateZ(0px) rotate("+ angle +"deg) scale(1, 1)"
         				}); // inside the symbol, align the shoot angle with the arrow angle
         
         				gen.getSymbolElement().css({ 
         				"left": "496px",
         				"top": "-110px"
         				}); // set posistion to middle of the symbol
         				gen.play(); 
         
         				 sym.getSymbol("game_2_Symbol_1").$("prop_total").hide(); // hide prop_total
         
         				sym.$("shoot")[0].play(); // play game shoot sound
         
         				function win() { // function win, what happens when they win
         						if(! win2){
         							win2 = 1;
         												$( ".bar_line2" ).stop(); // stop timeline
         												$( ".circle0001" ).stop(); // stop animation mouth
         												$( ".circle0002" ).stop(); // stop animation mouth
         												$( ".circle0003" ).stop(); // stop animation mouth
         												
         												
         												// RESET Variables to default
         												sym.getComposition().getStage().setVariable("game_2_klik", 1);
         												sym.getComposition().getStage().setVariable("game_2_win2", false);
         												sym.getComposition().getStage().setVariable("game_2_lose2", false);
         												sym.getComposition().getStage().setVariable("game_2_h1", false);
         												sym.getComposition().getStage().setVariable("game_2_h2", false);
         												sym.getComposition().getStage().setVariable("game_2_h3", false);
         												
         												// Pause all sounds
         												sym.$("voiceover1_freedomofspeech")[0].pause();
         												sym.$("voiceover2_wewanttobefree")[0].pause();
         												sym.$("voiceover3_censorship")[0].pause();
         											
         											// STOP all child symbols animation
         											var childSymbols = sym.getChildSymbols(); 
         											for(var i=0; i<childSymbols.length; i++) { // Return the number of direct children    
         											childSymbols[i].stop(); // Stop all of the children
         											}
         
         							clearInterval(collision); // stop function interval collision
         							clearTimeout(timeout); // stop function timeout
         							var game_2 = sym.getComposition().getStage().createChildSymbol("win", "Stage");    // create win symbol
         							sym.deleteSymbol(); // delete current symbol
         							
         						}
         				};
         				/////
         				var rotate; // set empty rotate variable
         				var circle1; // set empty circle1 variable
         				var win2 = sym.getComposition().getStage().getVariable("game_2_win2");
         				// get global variables mouths
         				var h1 = sym.getComposition().getStage().getVariable("game_2_h1");
         				var h2 = sym.getComposition().getStage().getVariable("game_2_h2");
         				var h3 = sym.getComposition().getStage().getVariable("game_2_h3");
         
         
         				var collision = window.setInterval(function(){ // collision interval 
         
         
         				var lose3 = sym.getComposition().getStage().getVariable("game_2_lose2"); // variable lose2 
         
         					var rotate = $(".tracker").offset().left; // get offset left arrow
         
         					$(".circle001").each(function () { // prop 
         					if($(this).lenght == 0 ){ // if not moving
         					// noting
         					}else{ // if moving 
         					console.log("yes circle"); // log
         					}
         					var px2 = $(this).offset().left;
         				   var py2 = $(this).offset().top;
         
         					 circle1 = {radius: 55, x: px2, y: py2};  // set arrays 
         
         				});
         //////////////////////////////////////////////////////////////
         					$(".circle0001").each(function () { // mouth 1 
           
         					var px = $(this).offset().left;  
         				   var py = $(this).offset().top;
         			
         						var circle2 = {radius: 70, x: px, y: py};
         						// detect collision 
         						var dx = (circle1.x + circle1.radius) - (circle2.x + circle2.radius);
         						var dy = (circle1.y + circle1.radius) - (circle2.y + circle2.radius);
         						var distance = Math.sqrt(dx * dx + dy * dy);
         					
         						if (distance < circle1.radius + circle2.radius) {
         							
         							 if(! h1){ // if didnt got hit yet
         							 $(".circle001").hide(); // hide prop
         							 sym.getSymbol("game_2_mouth").play("fill"); // play animation mouth 1 
         
         							 // Pause an audio track 
         								sym.$("voiceover1_freedomofspeech")[0].pause(); // pause this talk sound
         								sym.$("fullmouth")[0].play(); // play sound mouth filled
         
         							 }
         							 h1 = true; // set variable of this mouth to filled
         							 sym.getComposition().getStage().setVariable("game_2_h1", true); // set variable of this mouth to filled
         						}
         				});
         
         				///////
         				$(".circle0002").each(function () { // mouth 2 
         
         					var px = $(this).offset().left;
         				   var py = $(this).offset().top;
         
         						var circle2 = {radius: 70, x: px, y: py};
         						// detect collision 
         						var dx = (circle1.x + circle1.radius) - (circle2.x + circle2.radius);
         						var dy = (circle1.y + circle1.radius) - (circle2.y + circle2.radius);
         						var distance = Math.sqrt(dx * dx + dy * dy);
         
         						if (distance < circle1.radius + circle2.radius) {
         
         							 if(! h2){ // if didnt got hit yet
         							 $(".circle001").hide();  // hide prop
         							 sym.getSymbol("game_2_mouth2").play("fill"); // play animation mouth 2 
         
         							   sym.$("voiceover2_wewanttobefree")[0].pause();  // pause this talk sound
         								sym.$("fullmouth")[0].play(); // play sound mouth filled
         
         							 }
         							 h2 = true;// set variable of this mouth to filled
         							 sym.getComposition().getStage().setVariable("game_2_h2", true); // set variable of this mouth to filled
         						}
         				});
         				///////
         				$(".circle0003").each(function () { // mouth 3 
         
         					var px = $(this).offset().left;
         				   var py = $(this).offset().top;
         
         						var circle2 = {radius: 70, x: px, y: py};
         						// detect collision 
         						var dx = (circle1.x + circle1.radius) - (circle2.x + circle2.radius);
         						var dy = (circle1.y + circle1.radius) - (circle2.y + circle2.radius);
         						var distance = Math.sqrt(dx * dx + dy * dy);
         
         						if (distance < circle1.radius + circle2.radius) {
         
         							 if(! h3){ // if didnt got hit yet
         							 $(".circle001").hide(); // hide prop
         							 sym.getSymbol("game_2_mouth3").play("fill"); // play animation mouth 2 
         
         							   sym.$("voiceover3_censorship")[0].pause(); // pause this talk sound
         								sym.$("fullmouth")[0].play(); // play sound mouth filled
         							 }
         							 h3 = true; // set variable of this mouth to filled
         							 sym.getComposition().getStage().setVariable("game_2_h3", true); // set variable of this mouth to filled
         						}
         				});
         
         
          if(h1 && h2 && h3){ // if all mouths are filled 
         
         	clearInterval(collision); // clear collision 
         	sym.getComposition().getStage().setVariable("game_2_klik", 0); // // set variable to 0 
         	win(); // run function win 
         
          }
         	/////////////
         
         },8); // end collision interval ( interval is 64 frames a sec )
         
         
         
         
         				var timeout = setTimeout(function(){ sym.getComposition().getStage().setVariable("game_2_klik", 1);  sym.getSymbol("game_2_Symbol_1").$("prop_total").show(); clearInterval(collision);  }, 1500); // after 1,5 seconds clearinterval, make it clickable again and show prop
         };
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_background}", "click", function(sym, e) {
         // insert code for mouse click here
         
         function game_2_ready() { // function ready game 2 
         				
         				// reset global variables to default 
         				sym.getComposition().getStage().setVariable("game_2_klik", 1); 
         				sym.getComposition().getStage().setVariable("game_2_win2", false);
         				sym.getComposition().getStage().setVariable("game_2_lose2", false);
         				
         				
         				// get variables 
         				var win2 = sym.getComposition().getStage().getVariable("game_2_win2");
         				var lose2 = sym.getComposition().getStage().getVariable("game_2_lose2");
         
         
         				// Hide an element 
         				function reloop1() { // loop animation of mouth 1 , moving right to left in 6 seconds, if at the end, reset the loop 
         				$( ".circle0001" ).animate({
         					 left: "-140px" 
         				  }, 6000,"linear", function() {
         						console.log("done");
         						if(! lose2 || ! win2 ){
         						$(this).css({"left":"980px"});
         						reloop1();
         						}
         				  });
         				};
         
         				reloop1(); // run function reloop1 
         				///////
         				function reloop2() {   // loop animation of mouth 2 , moving right to left in 7 seconds, if at the end, reset the loop 
         				$( ".circle0002" ).animate({
         					 left: "-140px" 
         				  }, 7000,"linear", function() {
         						console.log("done");
         						if(! lose2 || ! win2 ){
         						$(this).css({"left":"980px"});
         						reloop2();
         						}
         				  });
         				};
         
         				reloop2(); // run function reloop2
         				///////
         				function reloop3() {  // loop animation of mouth 3 , moving right to left in 6 seconds, if at the end, reset the loop 
         				$( ".circle0003" ).animate({
         					 left: "-140px" 
         				  }, 9000,"linear", function() {
         						console.log("done");
         						if(! lose2 || ! win2 ){
         						$(this).css({"left":"980px"});
         						reloop3();
         						}
         				  });
         				};
         
         				reloop3(); // run function reloop3
         				//////
         
         				////// timer
         				var time = sym.getComposition().getStage().getVariable("time"); // get variable time for the seconds 
         				var count = 4 + time ; // 4 seconds default + time of the variable 
         				var totaltime = count * 1000; // 
         
         				$( ".bar_line2" ).animate({ // animate time bar , if end run function lose
         					 width: "0%" 
         				  }, totaltime, function() {
         						lose();
         				  }); 
         
         				////////
         				function lose() { // function lose
         						if(! lose2 ){
         							lose2 = 1;
         
         									// STOP EVERytHing and reset to default
         									sym.getComposition().getStage().setVariable("game_2_klik", 0);
         									sym.getComposition().getStage().setVariable("game_2_lose2", true);
         									$( ".bar_line2" ).stop();
         									$( ".circle0001" ).stop();
         									$( ".circle0002" ).stop();
         									$( ".circle0003" ).stop();
         									$( ".bar_line2" ).css({"width":"100%"});
         									$( ".circle0001" ).css({"left":"960px"});
         									$( ".circle0002" ).css({"left":"1324px"});
         									$( ".circle0003" ).css({"left":"1581px"});
         
         									sym.$("voiceover1_freedomofspeech")[0].pause();
         									sym.$("voiceover2_wewanttobefree")[0].pause();
         									sym.$("voiceover3_censorship")[0].pause();
         
         								var childSymbols = sym.getChildSymbols(); 
         								for(var i=0; i<childSymbols.length; i++) { // Return the number of direct children    
         								childSymbols[i].stop(); // Stop all of the children
         								}
         
         									sym.getComposition().getStage().setVariable("game_2_klik", 1);
         									sym.getComposition().getStage().setVariable("game_2_win2", false);
         									sym.getComposition().getStage().setVariable("game_2_lose2", false);
         									sym.getComposition().getStage().setVariable("game_2_h1", false);
         									sym.getComposition().getStage().setVariable("game_2_h2", false);
         									sym.getComposition().getStage().setVariable("game_2_h3", false);
         
         							var game_2 = sym.getComposition().getStage().createChildSymbol("lose", "Stage"); // create symbol lose 
         
         							//sym.deleteSymbol(); // delete symbol
         							setTimeout(function(){ sym.deleteSymbol(); }, 3000); // delete current symbol after 3 seconds( to prefent bugs) 
         
         						}
         				};
         
         
         				// Play sounds
         				sym.$("voiceover1_freedomofspeech")[0].currentTime = 0;
         				sym.$("voiceover2_wewanttobefree")[0].currentTime = 0;
         				sym.$("voiceover3_censorship")[0].currentTime = 0;
         
         				sym.$("voiceover1_freedomofspeech")[0].play(); // mouth 1 sound
         
         
         				setTimeout(function(){ sym.$("voiceover2_wewanttobefree")[0].play(); }, 2000); // play mouth 2 sound after 2 seconds
         				setTimeout(function(){ sym.$("voiceover3_censorship")[0].play(); }, 3000); // play mouth 3 sound after 3 seconds
         
         	}
         
         game_2_ready(); // play function game_2_ready
         
         sym.$("background").hide(); // background hide

      });
      //Edge binding end

   })("game_2");
   //Edge symbol end:'game_2'

   //=========================================================
   
   //Edge symbol: 'lose'
   (function(symbolName) {   
   
      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         // trigged after 3 seconds on symbol lose
         var foo2 = sym.getComposition().getStage().getVariable("intro2"); // get variable intro2, to see if intro is now enabled
         
         	var game_count = sym.getComposition().getStage().getVariable("game_part"); // get game_part variable 
         	var c = game_count + 1; // add 1 game_part 
         
         var f = sym.getComposition().getStage().getVariable("stress"); // get stresslevel
         if(f > 4 ) // if stresslevel is higher then 4, end game
         {
         sym.getComposition().getStage().createChildSymbol("end", "Stage"); // create symbol end game
         }else // if not higher than 4
         {
         if(game_count == 3) // if game count is 3 ( 3 games have been played ) 
         {
         
         		sym.getComposition().getStage().createChildSymbol("faster", "Stage"); // create symbol faster
         		sym.getComposition().getStage().setVariable("game_part",1); // reset game_part to 1 
         		
         
         }else{ // if 3 games have not been played yet 
         
         
         
         if(foo2 == 1) // is a game_intro needed to play? //yes
         {
         		var b = "intro_game_"+ c; // create text intro_game_ with the number of gamepart, example intro_game_3
         		var game_a = sym.getComposition().getStage().createChildSymbol(b, "Stage"); // create this symbol 
         
         		sym.getComposition().getStage().setVariable("game_part", c); // set new game_part
         
         
         }else { // no 
         
         
         		var b = "game_"+ c; // create text game_ with the number
         		var game_a = sym.getComposition().getStage().createChildSymbol(b, "Stage"); // create this symbol
         
         		sym.getComposition().getStage().setVariable("game_part", c); // set new game_part
         
         	game_a.play(); // play this symbol
         }
         }
         }
            sym.deleteSymbol(); // delete this symbol 

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         var stress = sym.getComposition().getStage().getVariable("stress");
          var c = "stage_" + stress;
         sym.getSymbol("stressbar").stop(c);
         
         var newstress = stress + 1;
         sym.getSymbol("stressbar").play(c);
         
         sym.getComposition().getStage().setVariable("stress", newstress);
         // Change the text in an element
         

      });
      //Edge binding end

   })("lose");
   //Edge symbol end:'lose'

   //=========================================================
   
   //Edge symbol: 'end'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${button}", "click", function(sym, e) {
         sym.getComposition().getStage().setVariable("intro2", 1);
         sym.getComposition().getStage().setVariable("time", "20");
         sym.getComposition().getStage().setVariable("stress", "100");
         sym.getComposition().getStage().setVariable("game_part", 1);
         
         
         var game_d = sym.getComposition().getStage().createChildSymbol("intro", "Stage");  
         game_d.play();
         sym.deleteSymbol();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_newpowers}", "click", function(sym, e) {
         
         sym.play("new_char"); // play timeline label "new_char"
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_playagain}", "click", function(sym, e) {
         location.reload();
         // Page reload ( everything reset )

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4750, function(sym, e) {
         // insert code here
         // Hide an element 
         console.log("ending label called");
         sym.$("Rectangle").hide();
         
         // Hide an element 
         sym.$("DIEdieDictator").hide();
         sym.$("Group2").hide();
         sym.$("Group").show();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5500, function(sym, e) {
         // insert code here
         
         
         // Hide an element 
         sym.$("Group").hide();
         
         sym.$("Group2").show();
         console.log("ending label called");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 17000, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_back}", "click", function(sym, e) {
         
         sym.play("ending"); // play timeline label ending

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         
         sym.$("Group2").hide(); // hide group div Group2
         
         // Hide an element 
         sym.$("Group").hide(); // hide group div Group
         sym.stop(); // stop the current timeline 
         
         sym.$("DIEdieDictator")[0].play(); // play video DIEdieDictator
         
         sym.$("DIEdieDictator")[0].onended = function(e) { // if video has ended
               
         		sym.$("Group").show(); // Show group div Group
         		sym.play("ending"); // play timeline from label ending 
         };

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5000, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_DONATE}", "click", function(sym, e) {
         
         window.open("https://www.amnesty.nl/steun-amnesty/word-lid?utm_source=amnestysite&utm_medium=banner&utm_campaign=versie1", "_blank");
         
         // open URL 

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_PETITION}", "click", function(sym, e) {
         // insert code for mouse click here
         // Navigate to a new URL in a new window
         // (replace "_blank" with appropriate target attribute)
         window.open("https://spoedacties.amnesty.nl/?utm_source=website&utm_medium=actiebanner&utm_content=individuals&utm_campaign=spoedacties", "_blank");
         
         // open URL 

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_LETTER}", "click", function(sym, e) {
         // insert code for mouse click here
         // Navigate to a new URL in a new window
         // (replace "_blank" with appropriate target attribute)
         window.open("https://www.amnesty.nl/schrijfeenbrief", "_blank");
         
         // open URL 

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_SHARE}", "click", function(sym, e) {
         // insert code for mouse click here
         // Navigate to a new URL in a new window
         // (replace "_blank" with appropriate target attribute)
         window.open("https://www.facebook.com/sharer/sharer.php?app_id=309437425817038&u=https%3A%2F%2Fspoedacties.amnesty.nl%2F%3Futm_source%3Dwebsite%26utm_medium%3Dactiebanner%26utm_content%3Dindividuals%26utm_campaign%3Dspoedacties&display=popup&ref=plugin", "_blank");
         
         // open URL 

      });
      //Edge binding end

   })("end");
   //Edge symbol end:'end'

   //=========================================================
   
   //Edge symbol: 'game_3'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${loseCopy3}", "click", function(sym, e) {
         var game_3 = sym.getComposition().getStage().createChildSymbol("lose", "Stage");  
          sym.deleteSymbol();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${wonCopy}", "click", function(sym, e) {
         var game_3 = sym.getComposition().getStage().createChildSymbol("win", "Stage");  
          sym.deleteSymbol();

      });
      //Edge binding end

      

      

      Symbol.bindElementAction(compId, symbolName, "${_Rectangle3}", "click", function(sym, e) {
         
         
         function game_3_ready() {
         
         			var draggables = Draggable.create(".paper", {type:"x,y", edgeResistance:1, bounds:".container"}); // allow paperdrag on x and y withing the div with the class container
         			var lose2;
         			var win2;
         			var jam2 = false;
         
         
         			// Play an audio track 
         			sym.$("shreddingpaper_long")[0].play(); // play shredder sound
         
         
         			var clone = setInterval(function(){ // set interval clone, still will be mirrored on the dragged paper, to get the shredder paper effect 
         
         							var pwidth3 = $(".paper").width();
         							var pheight3 = $(".paper").height();
         							var px2 = $(".paper").offset().left;
         							var py2 = $(".paper").offset().top;
         
         							var a = px2 - pwidth3 + 200 ;
         							var b = py2 - pheight3 - 130 ;
         							sym.$( "brief2" ).css({ 
         
         							"left": a ,
         							"top" : b
         
         							}); 
         							
         
         			},16);
         
         			var collision2 = setInterval(function(){ // if collision with paper and sides interval 
         								// location paper
         								var pwidth3 = $(".paper").width();
         								var pheight3 = $(".paper").height();
         								var px2 = $(".paper").offset().left;
         								var py2 = $(".paper").offset().top;
         
         
         								var rect1 = {x: px2, y: py2, width: pwidth3, height: pheight3}
         								
         			/////////////////////////
         			//					// location badwall
         							$(".badwall").each(function () {
         								var pwidth2 = $(this).width();
         								var pheight2 = $(this).height();
         								var px = $(this).offset().left;
         								var py = $(this).offset().top;
         
         								var rect3 = {x: px, y: py, width: pwidth2, height: pheight2}
         
         								if (rect1.x < rect3.x + rect3.width &&
         								rect1.x + rect1.width > rect3.x &&
         								rect1.y < rect3.y + rect3.height &&
         								rect1.height + rect1.y > rect3.y) {
         								jam(); // run function jam 
         							}
         
         							});
         							/////////////
         
         							$(".goodwall").each(function () { // position goodwall
         								var pwidth2 = $(this).width();
         								var pheight2 = $(this).height();
         								var px = $(this).offset().left;
         								var py = $(this).offset().top;
         
         								var rect3 = {x: px, y: py, width: pwidth2, height: pheight2}
         
         								if (rect1.x < rect3.x + rect3.width &&
         								rect1.x + rect1.width > rect3.x &&
         								rect1.y < rect3.y + rect3.height &&
         								rect1.height + rect1.y > rect3.y) {
         								clearInterval(collision2); // clear collision interval
         								win(); // run function win 
         							}
         
         							});
         
         			},8); // 64fps interval 
         
         			sym.$( "voorkant" ).css({ 
         
         			"z-index": "9000"
         
         			}); // will place voorkant always on top 
         
         						////// timer
         			var time = sym.getComposition().getStage().getVariable("time");
         			var count = 1 + time; // 1 second default + time of variable 
         			var totaltime = count * 1000;
         
         			$( ".bar_line3" ).animate({ // animate within the time , if end run function lose
         				 width: "0%" 
         			  }, totaltime, function() {
         					lose();
         			  });
         
         	
         
         			///// jam state 
         
         			  function jam() { // function jam
         					if(! jam2 ){ // if isnt jammed yet
         
         						sym.getSymbol("game_3_case").play(); // play symbol case ( shredder case ) 
         						sym.$("shreddingpaper_long")[0].pause(); // pause shredder sound 
         						sym.$("jammedpaper")[0].play(); // play jammed paper 
          
         						jam2 = true; // jammed now 
         						draggables = Draggable.create(".paper", {type:"x", edgeResistance:1, bounds:".container"}); // draggable only for x 
         						setTimeout(function(){ // timeout 1 seconds 
         						draggables = Draggable.create(".paper", {type:"x,y", edgeResistance:1, bounds:".container"}); // draggable back to normal y and x 
         						jam2 = false; // not jammed anymore 
         						sym.$("shreddingpaper_long")[0].play(); // play shredder sound 
         						}, 1000);
         
         					}
         
         			};
         
         
         			function lose() { // function lose 
         					if(! lose2 ){ // if didnt lose yet
         						lose2 = 1; // lose 
         						draggables[0].disable(); // disable draggables
         						$( ".bar_line3" ).stop(); // stop bl
         						 setTimeout(function(){ // after 1 second run function
         
         						 clearInterval(collision2); // clear collisions
         						 clearInterval(clone); // stop clone 
         						 var game_3 = sym.getComposition().getStage().createChildSymbol("lose", "Stage");  // create symbol lose 
         						 sym.deleteSymbol(); // delete current symbol
         
         						}, 1000);
         					}
         
         			};
         
         			//// win state
         
         			function win() { // function win 
         					if(! win2){
         						win2 = 1; // won 
         						$( ".bar_line3" ).stop(); // stop timebar
         						draggables[0].disable(); // disable draggable 
         						$( ".paper" ).css({  
         							"transform": "translate3d(0px,  660px, 0px)",
         							"transition-duration" : "1s",
         							"-webkit-transition-duration" : "1s" /* Safari */
         						}); // paper to all the way down
         						
         						sym.getSymbol("game_3_arms").play(); // arms up
         						sym.getSymbol("game_3_thumbs").play(); // thumbs up 
         						sym.getSymbol("game_3_win").play();
         						sym.$("shreddingpaper_long")[0].pause(); // pause sound shredder 
         
         						setTimeout(function(){ // run code after 1 sec 
         						 clearInterval(collision2);// stop and clear collision function
         						 clearInterval(clone);// stop and clear clone function
         						 var game_3 = sym.getComposition().getStage().createChildSymbol("win", "Stage");  // symbol win create 
         						 sym.deleteSymbol(); // delete current symbol
         			 }, 1000);
         
         					}
         
         			};
         
         	}
         
         game_3_ready(); // run function game_3_ready
         
         sym.$("Rectangle3").hide(); // hide Rectangle3
         

      });
      //Edge binding end

   })("game_3");
   //Edge symbol end:'game_3'

   //=========================================================
   
   //Edge symbol: 'intro_game_2'
   (function(symbolName) {   
   
      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8811, function(sym, e) {
         var game_2 = sym.getComposition().getStage().createChildSymbol("game_2", "Stage");  
         game_2.play();
         sym.deleteSymbol();

      });
      //Edge binding end

   })("intro_game_2");
   //Edge symbol end:'intro_game_2'

   //=========================================================
   
   //Edge symbol: 'intro'
   (function(symbolName) {   
      
      

      

      Symbol.bindElementAction(compId, symbolName, "${_play}", "click", function(sym, e) {
         // if button start is clicked
         
         sym.$("Group").hide(); // hide element Group
         
         sym.$("INTROgame")[0].play(); // play video INTROgame
         
         sym.$("INTROgame")[0].onended = function(e) {  // if video INTROgame has ended
               
         					var foo2 = sym.getComposition().getStage().getVariable("intro2"); // see if i need to play the intro of the games
         					if(foo2 == 1) // if yes
         					{
         							console.log("game_1_intro = activated");
         							var game_1 = sym.getComposition().getStage().createChildSymbol("intro_game_1", "Stage"); // create intro_game_1
         
         					}else { // if no
         						var game_1 = sym.getComposition().getStage().createChildSymbol("game_1", "Stage");  // create game_1
         						game_1.play(); // play this symbol game_1
         					}
         
         						sym.deleteSymbol(); // delete this symbol 
               ///
         };
         

      });
      //Edge binding end

      

   })("intro");
   //Edge symbol end:'intro'

   //=========================================================
   
   //Edge symbol: 'intro_game_1'
   (function(symbolName) {   
   
      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8000, function(sym, e) {
         var game_1 = sym.getComposition().getStage().createChildSymbol("game_1", "Stage");  
         game_1.play();
         sym.deleteSymbol();

      });
      //Edge binding end

   })("intro_game_1");
   //Edge symbol end:'intro_game_1'

   //=========================================================
   
   //Edge symbol: 'stressbar'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("stressbar");
   //Edge symbol end:'stressbar'

   //=========================================================
   
   //Edge symbol: 'game_2_mouth'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         
         sym.play(0); // play from 0 seconds

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();
          // stop timeline

      });
      //Edge binding end

   })("game_2_mouth");
   //Edge symbol end:'game_2_mouth'

   //=========================================================
   
   //Edge symbol: 'game_2_mouth_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         
         sym.play(0);
         // play from 0 seconds ( loop )

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();
         // stop timeline

      });
      //Edge binding end

   })("game_2_mouth2");
   //Edge symbol end:'game_2_mouth2'

   //=========================================================
   
   //Edge symbol: 'game_2_mouth2_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         
         sym.play(0);
         // play from 0 seconds

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();
         // stop timeline

      });
      //Edge binding end

   })("game_2_mouth3");
   //Edge symbol end:'game_2_mouth3'

   //=========================================================
   
   //Edge symbol: 'game_2_Symbol_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4000, function(sym, e) {
         sym.play(0);
         // loop

      });
      //Edge binding end

   })("game_2_Symbol_1");
   //Edge symbol end:'game_2_Symbol_1'

   //=========================================================
   
   //Edge symbol: 'game_2_prop'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1250, function(sym, e) {
         
         sym.deleteSymbol();
         // delete current symbol

      });
      //Edge binding end

   })("game_2_prop");
   //Edge symbol end:'game_2_prop'

   //=========================================================
   
   //Edge symbol: 'game_3_case'
   (function(symbolName) {   
   
   })("game_3_case");
   //Edge symbol end:'game_3_case'

   //=========================================================
   
   //Edge symbol: 'game_3_arms'
   (function(symbolName) {   
   
   })("game_3_arms");
   //Edge symbol end:'game_3_arms'

   //=========================================================
   
   //Edge symbol: 'game_3_thumbs'
   (function(symbolName) {   
   
   })("game_3_thumbs");
   //Edge symbol end:'game_3_thumbs'

   //=========================================================
   
   //Edge symbol: 'game_2_win'
   (function(symbolName) {   
   
   })("game_3_win");
   //Edge symbol end:'game_3_win'

   //=========================================================
   
   //Edge symbol: 'game_1_p1'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_click_area}", "click", function(sym, e) {
         var angry = sym.getComposition().getStage().getVariable("angry"); // get angry variable 
         
         var allowchange = sym.getComposition().getStage().getVariable("banner1"); // get variable of banner1 if is correct
          
         if( allowchange == 0 ) { //  if banner1 is not correct yet
         
         				function scramble() { // begin function scramble
         
         					var old_randno = $('.text').text(); // get current text of banner1
         					
         					var quotes = new Array( "FREEDOM", "EQUAL RIGHTS!", "OUR HERO!" ), // set arrays possible changing text
         						 randno = quotes[Math.floor( Math.random() * quotes.length )]; // scramble array 
         						 if( old_randno == randno ) // if old text is scambled text
         						 { // if yes
         						 scramble(); // rescramble array 
         						 }else{  // if no
         						  $('.text').text( randno ); // put array text in 
         
         								var banner1 = sym.getComposition().getStage().getVariable("banner1"); // get banner1 variable
         								var banner2 = sym.getComposition().getStage().getVariable("banner2"); // get banner2 variable
         								var banner3 = sym.getComposition().getStage().getVariable("banner3"); // get banner3 variable
         								var banner4 = sym.getComposition().getStage().getVariable("banner4"); // get banner4 variable
         
         								if(randno == "OUR HERO!" ){ // if text is the correct text
         
         								angry = angry + 20; // add 20 to the volume to increase it
         								var newangry = angry / 100; // make the volume into x.x
          
         									sym.getComposition().getStage().setVariable("angry", angry); // set new global variable volume
         									sym.getParentSymbol().$("angry_protest")[0].volume = newangry; // change the volume
         									sym.getParentSymbol().$("good_changeofbanners")[0].play(); // play the good sound
         
         										sym.getComposition().getStage().setVariable("banner1", 1); // change global variable banner1
         
         								var banner1 = sym.getComposition().getStage().getVariable("banner1"); // get the global variables again
         								var banner2 = sym.getComposition().getStage().getVariable("banner2"); // get the global variables again
         								var banner3 = sym.getComposition().getStage().getVariable("banner3"); // get the global variables again
         								var banner4 = sym.getComposition().getStage().getVariable("banner4"); // get the global variables again
         
         								if(banner1 == 1 && banner2 == 1 && banner3 == 1 && banner4 == 1) // if all the banners are correct
         								{
         
         									$( ".bar_line1" ).stop(); // stop timebar 
         									setTimeout(function(){ // set timeout, will run after 1 second
         										var game_1 = sym.getComposition().getStage().createChildSymbol("win", "Stage");// show symbol win 
         										
         											randno = ""; // reset text variable to noting 
         											// RESET GLOBAL VARIABLE
         											sym.getComposition().getStage().setVariable("win_game_1", false);
         											sym.getComposition().getStage().setVariable("lose_game_1", false);
         											sym.getComposition().getStage().setVariable("angry", 20);
         											sym.getComposition().getStage().setVariable("happy", 0);
         											sym.getComposition().getStage().setVariable("banner1", 0);
         											sym.getComposition().getStage().setVariable("banner2", 0);
         											sym.getComposition().getStage().setVariable("banner3", 0);
         											sym.getComposition().getStage().setVariable("banner4", 0);
         											sym.getParentSymbol().$("angry_protest")[0].pause();
         											sym.getParentSymbol().deleteSymbol();
         									}, 1000);  // end timeout function
         
         								}
         
         								}else{ // get banner is incorrect
         
         									sym.getParentSymbol().$("fault_changeofbanners")[0].play(); // play fault sound
         
         								} // end else
         
         
         
         
         						 } // end else scramble
         
         
         				}; // end scramble function
         
         				scramble(); // run function scramble
         
         };// end allow change 
         
         
         
         
         
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         
         sym.play(0); // play symbol timeline from 0 seconds

      });
      //Edge binding end

   })("game_1_p1");
   //Edge symbol end:'game_1_p1'

   //=========================================================
   
   //Edge symbol: 'game_1_p2'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_click_area}", "click", function(sym, e) {
         
         
         var angry = sym.getComposition().getStage().getVariable("angry");// get angry variable 
         var allowchange = sym.getComposition().getStage().getVariable("banner2"); // get banner2 variable 
         
         if( allowchange == 0 ) { // if banner2 is incorrect
         
         				function scramble() { // begin function scramble
         
         					var old_randno = $('.text2').text(); // get old text banner2
         					var quotes = new Array( "FREEDOM", "DEMOCRACY", "LONG LIVE LEADER!" ), // set array variable
         						 randno = quotes[Math.floor( Math.random() * quotes.length )]; // scramble array
         						 if( old_randno == randno ) // if old text is the same as new text
         						 { // if yes
         						 scramble(); // rescramble
         						 }else{ // if no 
         						  $('.text2').text( randno ); // set banner2 text 
         								
         								// GET GLOBAL VARIABLE 
         								var banner1 = sym.getComposition().getStage().getVariable("banner1");
         								var banner2 = sym.getComposition().getStage().getVariable("banner2");
         								var banner3 = sym.getComposition().getStage().getVariable("banner3");
         								var banner4 = sym.getComposition().getStage().getVariable("banner4");
         
         								if(randno == "LONG LIVE LEADER!" ){ // iF correct text 
         
         								angry = angry + 20; // variable sound angry + 20 
         								var newangry = angry / 100; // make it x.x
         								
         										sym.getComposition().getStage().setVariable("angry", angry); // set variable angry 
          
         										sym.getParentSymbol().$("angry_protest")[0].volume = newangry; // change volume angry protest
         										sym.getParentSymbol().$("good_changeofbanners")[0].play(); // play good sound
         
         										sym.getComposition().getStage().setVariable("banner2", 1); // get Global variable banner2 
         								// Get global variables banners 
         								var banner1 = sym.getComposition().getStage().getVariable("banner1"); 
         								var banner2 = sym.getComposition().getStage().getVariable("banner2");
         								var banner3 = sym.getComposition().getStage().getVariable("banner3");
         								var banner4 = sym.getComposition().getStage().getVariable("banner4");
         
         								if(banner1 == 1 && banner2 == 1 && banner3 == 1 && banner4 == 1) // if all banners are correct
         								{
         
         									$( ".bar_line1" ).stop(); // stop timebar
         
         									setTimeout(function(){ // run function after 1 second
         									
         										var game_1 = sym.getComposition().getStage().createChildSymbol("win", "Stage"); // create symbol win
         
         											randno = ""; // text variable reset to noting
         											// RESET GLOBAL VARIABLES OF GAME 1
         											sym.getComposition().getStage().setVariable("win_game_1", false);
         											sym.getComposition().getStage().setVariable("lose_game_1", false);
         											sym.getComposition().getStage().setVariable("angry", 20);
         											sym.getComposition().getStage().setVariable("happy", 0);
         											sym.getComposition().getStage().setVariable("banner1", 0);
         											sym.getComposition().getStage().setVariable("banner2", 0);
         											sym.getComposition().getStage().setVariable("banner3", 0);
         											sym.getComposition().getStage().setVariable("banner4", 0);
         											sym.getParentSymbol().$("angry_protest")[0].pause();
         											
         											sym.getParentSymbol().deleteSymbol(); // delete this game symbol
         											
         									}, 1000);  
         
         								}
         
         
         								}else{ // if not the correct banner
         
         									sym.getParentSymbol().$("fault_changeofbanners")[0].play(); // play fault sound
         
         								}
         
         
         
         
         						 } // end else scramble
         
         
         				}; // end scramble function
         
         				scramble();
         
         };// end allow change 
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         
         sym.play(0); // play this timeline from 0 seconds

      });
      //Edge binding end

   })("game_1_p2");
   //Edge symbol end:'game_1_p2'

   //=========================================================
   
   //Edge symbol: 'game_1_p3'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_click_area}", "click", function(sym, e) {
         
         var angry = sym.getComposition().getStage().getVariable("angry"); // get variable angry
         var allowchange = sym.getComposition().getStage().getVariable("banner3"); // get variable banner3
         
         if( allowchange == 0 ) { // if banner 3 is not correct allow change
         
         				function scramble() { // begin function scramble
         
         					var old_randno = $('.text3').text(); // get current text
         					var quotes = new Array( "NO", "No", "YES" ), // set text arrays 
         						 randno = quotes[Math.floor( Math.random() * quotes.length )]; // scramble it
         						 if( old_randno == randno ) // if scrambled new text is same as old text
         						 {
         						 scramble(); // rescramble
         						 }else{ // if is not the same 
         						  $('.text3').text( randno ); // set text in banner
         								
         								// get banner variables 
         								var banner1 = sym.getComposition().getStage().getVariable("banner1");
         								var banner2 = sym.getComposition().getStage().getVariable("banner2");
         								var banner3 = sym.getComposition().getStage().getVariable("banner3");
         								var banner4 = sym.getComposition().getStage().getVariable("banner4");
         
         								if(randno == "YES" ){ // if text is correct
         
         								angry = angry + 20; // add 20 to angry variable for the sound increase 
         								var newangry = angry / 100; // make x.x
         
         										sym.getComposition().getStage().setVariable("angry", angry); // set angry variable with the new volume
         
         										sym.getParentSymbol().$("angry_protest")[0].volume = newangry; // set new volume 
         										sym.getParentSymbol().$("good_changeofbanners")[0].play(); // play good sound 
         
         										sym.getComposition().getStage().setVariable("banner3", 1); // set banner3 variable to 1 ( correct ) 
         								
         								// GLOBAL variable
         								var banner1 = sym.getComposition().getStage().getVariable("banner1");
         								var banner2 = sym.getComposition().getStage().getVariable("banner2");
         								var banner3 = sym.getComposition().getStage().getVariable("banner3");
         								var banner4 = sym.getComposition().getStage().getVariable("banner4");
         
         								if(banner1 == 1 && banner2 == 1 && banner3 == 1 && banner4 == 1) // if all banners are correct
         								{
         
         									$( ".bar_line1" ).stop(); // stop timebar 
         
         									setTimeout(function(){  // function timeout after 1 second
         										var game_1 = sym.getComposition().getStage().createChildSymbol("win", "Stage"); // create symbol
         
         											randno = ""; // RESET EVERYTHING TO DEFAULT AGAIN
         											sym.getComposition().getStage().setVariable("win_game_1", false);
         											sym.getComposition().getStage().setVariable("lose_game_1", false);
         											sym.getComposition().getStage().setVariable("angry", 20);
         											sym.getComposition().getStage().setVariable("happy", 0);
         											sym.getComposition().getStage().setVariable("banner1", 0);
         											sym.getComposition().getStage().setVariable("banner2", 0);
         											sym.getComposition().getStage().setVariable("banner3", 0);
         											sym.getComposition().getStage().setVariable("banner4", 0);
         											sym.getParentSymbol().$("angry_protest")[0].pause();
         											
         											sym.getParentSymbol().deleteSymbol(); // DELETE THIS SYMBOL GAME
         									}, 1000);  
         
         								}
         
         
         								}else{
         
         									sym.getParentSymbol().$("fault_changeofbanners")[0].play(); // play fault sound
         
         								}
         
         
         
         
         						 } // end else scramble
         
         
         				}; // end scramble function
         
         				scramble();
         
         };// end allow change 

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         
         sym.play(0); // play this timeline from 0 seconds
         

      });
      //Edge binding end

   })("game_1_p3");
   //Edge symbol end:'game_1_p3'

   //=========================================================
   
   //Edge symbol: 'game_1_p4'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_click_area}", "click", function(sym, e) {
         
         var angry = sym.getComposition().getStage().getVariable("angry"); // get angry variable 
         var allowchange = sym.getComposition().getStage().getVariable("banner4"); // get banner4 variable 
         
         if( allowchange == 0 ) { // if banner 4 is still incorrect, allow changes.
         
         				function scramble() { // begin function scramble
         
         					var old_randno = $('.text4').text(); // get current text banner4
         					var quotes = new Array( "NO OPPRESSOR!", "EQUAL RIGHTS!", "WE LOVE YOU!" ), // arrays with text that it can change to 
         						 randno = quotes[Math.floor( Math.random() * quotes.length )]; // scramble array
         						 if( old_randno == randno ) // if scrambled variable is the same.
         						 {
         						 scramble(); // rescramble
         						 }else{ // if not the same 
         						  $('.text4').text( randno ); // set text in banner
         								
         								// get banner variables
         								var banner1 = sym.getComposition().getStage().getVariable("banner1"); 
         								var banner2 = sym.getComposition().getStage().getVariable("banner2");
         								var banner3 = sym.getComposition().getStage().getVariable("banner3");
         								var banner4 = sym.getComposition().getStage().getVariable("banner4");
         
         								if(randno == "WE LOVE YOU!" ){ // if text is the correct text
         
         								angry = angry + 20; // angry + 20 volume
         								var newangry = angry / 100; // set volume to x.x 
         
         										sym.getComposition().getStage().setVariable("angry", angry); // set new angry global variable 
         
         										sym.getParentSymbol().$("angry_protest")[0].volume = newangry; // set new volume for the protest sound 
         										sym.getParentSymbol().$("good_changeofbanners")[0].play(); // play good sound 
         
         										sym.getComposition().getStage().setVariable("banner4", 1); // set new banner4 variable
         								// get all banner variables again 
         								var banner1 = sym.getComposition().getStage().getVariable("banner1");
         								var banner2 = sym.getComposition().getStage().getVariable("banner2");
         								var banner3 = sym.getComposition().getStage().getVariable("banner3");
         								var banner4 = sym.getComposition().getStage().getVariable("banner4");
         
         								if(banner1 == 1 && banner2 == 1 && banner3 == 1 && banner4 == 1) // if all banners are correct
         								{
         									$( ".bar_line1" ).stop(); // stop timebar
         
         									setTimeout(function(){ // play function after 1 second
         										var game_1 = sym.getComposition().getStage().createChildSymbol("win", "Stage"); // create symbol win 
         											
         											// RESET ALL VARIABLES
         											randno = "";
         											sym.getComposition().getStage().setVariable("win_game_1", false);
         											sym.getComposition().getStage().setVariable("lose_game_1", false);
         											sym.getComposition().getStage().setVariable("angry", 20);
         											sym.getComposition().getStage().setVariable("happy", 0);
         											sym.getComposition().getStage().setVariable("banner1", 0);
         											sym.getComposition().getStage().setVariable("banner2", 0);
         											sym.getComposition().getStage().setVariable("banner3", 0);
         											sym.getComposition().getStage().setVariable("banner4", 0);
         										sym.getParentSymbol().$("angry_protest")[0].pause();
         										sym.getParentSymbol().deleteSymbol(); // delete the current game symbol 
         									}, 1000);  
         
         								}
         
         
         								}else{ // if banner is incorrect
         
         									sym.getParentSymbol().$("fault_changeofbanners")[0].play(); // play fault sound
         
         								}
         
         
         
         
         						 } // end else scramble
         
         
         				}; // end scramble function
         
         				scramble();
         
         };// end allow change 

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         
         sym.play(0); // play this timeline from 0 seconds
         

      });
      //Edge binding end

   })("game_1_p4");
   //Edge symbol end:'game_1_p4'

})(jQuery, AdobeEdge, "EDGE-4125913");