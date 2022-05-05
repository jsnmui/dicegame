//================ Task 1 ==============================
        // Create a function (rollDice)
        // Roll Two "dice" one for the player and one for the computer
        // Use one variables for the (player) and one for the (computer)
        // (use a random number from 1-6 to represent a dice)
       
       
         
        // If the player's dice roll is higher than the computer dice roll,
        // console.log("PLAYER WINS")
        // otherwise, log ("COMPUTER WINS")
        // Use a ternary to check for the winner
        // ----- After testing it, remove the console.log()
        // leaving just the string "PLAYER WINS" or "COMPUTER WINS" and save it to a variable (winner)
        // FINALLY: return all three variables using an array
        // return [VALUE1, VALUE2, VALUE3]
        const rollDice = () => {
            let comPuterdice = Math.floor(Math.random() * 6 + 1)
            let playerDice =  Math.floor(Math.random() * 6 + 1)
            let winner =  playerDice > comPuterdice ? "PLAYER WINS" : "COMPUTER WINS"
    
            const darray = [comPuterdice,playerDice,winner]
            return darray
           }
           //console.log(rollDice())
    
          // ============ Task 2 ==============================
          // Let's update our UI (User Interface)
          // Create a function (displayScore)
          // Create a new a div displaying:
          // Computer Score: , Player Score:  & the Winner:
          // so there is a running record of game data.
          // Append the new div to the parent div on the HTML.
       
         
          // Create a Reset Function (resetGame)
          // REMOVE the div with the game score, leaving just the parent div
          // creating a clean slate for a new set of games :)
         
          const displayScore = (game) => {
                  
                 const parentDiv = document.querySelector('body')
                 const newDiv= document.createElement("div");
                 newDiv.className = 'game'
                 newDiv.innerHTML= `&nbspComputer Score: ${game[0]} Player Score: ${game[1]}  Winner: ${game[2]}`
                 parentDiv.appendChild(newDiv)
    
          }
          
    
          // ==== Final Step =====================
          // Create a new function (playGame):
          // Call the rollDice and the displayScore function inside this function
    
          const playGame = () =>{
    
           let roll =  rollDice()
           displayScore(roll)
    
          }
    
          const resetGame= () => { 
          const starkChildren = document.querySelectorAll('.game')
          starkChildren.forEach(child => child.remove() )
          }
    
         
          const play= document.getElementById('play-game')
          play.addEventListener('click',playGame)
    
    
          const rest= document.getElementById('reset')
          rest.addEventListener('click',resetGame)
          
          // ========= Don't forget to add your events listeners
          // Attach the (playGame) function to the play game button
          // Attach the (resetGame) function to the reset button
    
          // ===== Now let's host this game in GITHUB PAGES and style it !!!