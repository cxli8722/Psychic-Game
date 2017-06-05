// Our array of possible computer choices.
      var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'];

      // Variables for tracking our wins, losses and ties. They begin at 0.
      var wins = 0;
      var losses = 0;
      var LifeLeft = 6;
      var guesses=[];


      // When the user presses a key, it will run the following function...
      document.onkeyup = function(event) {
      computerChoices.indexOf(event.key)
        // Determine which key was pressed
        var userGuess = event.key;
        guesses.push(userGuess);
    

        // Sets the computerGuess variable equal to a random choice from the computerChoice array.
        var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

        // If the user presses "r" or "p" or "s", run the game logic. 
        if (computerChoices.indexOf(event.key)>-1) {

          // This logic determines the outcome of the game (win/loss/tie), and increments the appropriate counter.
          if (userGuess === computerGuess) {
            wins++;
            
          }
         
          else if (userGuess !== computerGuess) {
           
            LifeLeft--;
          	
          	if(LifeLeft<0){
          		losses++;
          		LifeLeft=6;
          		guesses=[];

          		}

          	}
   

         };
          

         



         

          // Here we create the HTML that will be injected into our div and displayed on the page.
          var html = "<p>Press r, p or s to start playing!</p>" +
          "<p>wins: " + wins + "</p>" +
          "<p>losses: " + losses + "</p>" +
          "<p>life Left: " + LifeLeft + "</p>" +
   		  "<p>Your letter so far: " + guesses+ "</p>";

          // Injecting the HTML we just created into our div and updating the game information on our page.
          document.querySelector("#game").innerHTML = html;

        };