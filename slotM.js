// Constants
const symbols = ['🍒', '🍋', '🔔', '⭐', '💎', '🍉', '🎲', '7️⃣', '💰', '🍀'];

const SPIN_DURATION = 2000; // 2 seconds
const SYMBOL_CHANGE_INTERVAL = 100; // Change symbols every 100ms
const MIN_BET = 10;
const MAX_BET = 50;
//The constants in your code are written in uppercase with underscores (e.g., SPIN_DURATION, SYMBOL_CHANGE_INTERVAL) because this is a common convention to signify that these values are constants and should not be changed throughout the program. The uppercase naming style with underscores is used to distinguish them from regular variables, which are often written in camelCase.

// Anki When to use All caps and camel casing:

//All Caps with Underscores: This convention helps developers quickly identify constants and makes the code more readable. It's widely adopted in many programming languages and frameworks (such as JavaScript and Python) to indicate values that should remain unchanged.

//Camel Case: Camel case (spinDuration, symbolChangeInterval) is usually reserved for variables or properties that can change during the execution of the program.


// State
let balance = 100;

// DOM Elements
const reel1 = document.getElementById('reel1');
const reel2 = document.getElementById('reel2');
const reel3 = document.getElementById('reel3');
const message = document.getElementById('message');
const spinButton = document.getElementById('spinButton');
const resetButton = document.getElementById('resetButton');
const betAmountInput = document.getElementById('betAmount');
const spinSound = new Audio('mixkit-slot-machine-wheel-1932.wav');
const winSound = new Audio('mixkit-payout-award-1934.wav', );
const loseSound = new Audio('/Users/user/Slot Machine/mixkit-player-losing-or-failing-2042.wav');



// Utility Functions
function getRandomSymbol() {
  return symbols[Math.floor(Math.random() * symbols.length)];
}

function updateBalance() {
  document.getElementById('balance').textContent = `Balance: ${balance}`;
}

function resetBalance() {
  balance = 100;
  updateBalance();
  message.textContent = '';
  message.classList.remove('winning', 'losing');
}

function validateBet(bet) {
  if (isNaN(bet) || bet < MIN_BET || bet > MAX_BET) {
    alert(`Please enter a valid whole number between ${MIN_BET} and ${MAX_BET}.`);
    return false;
  }
  if (balance < bet) {
    alert("Not enough balance!");
    return false;
  }
  if (balance <= 0) {
    alert("Game Over! Please reset your balance.");
    return false;
  }
  return true;
}

function spin() {
    const bet = parseInt(document.getElementById('betAmount').value, 10);
    const spinButton = document.getElementById('spinButton');
  
    if (isNaN(bet) || bet < 10 || bet > 50) {
      alert("Please enter a valid whole number between 10 and 50.");
      return;
    }
  
    if (balance < bet) {
      alert("Not enough balance!");
      return;
    }
  
    balance -= bet;
    updateBalance();
    spinButton.disabled = true;
  
    const reels = [
      document.getElementById('reel1'),
      document.getElementById('reel2'),
      document.getElementById('reel3'),
    ];
    const message = document.getElementById('message');
  
    // Play the spin sound
    spinSound.play();
  
    // Start spinning animation
    reels.forEach((reel) => {
      reel.classList.add('spinning');  // Add spinning animation
    });
  
    // Simulate spinning animation by rapidly changing symbols
    const spinAnimation = setInterval(() => {
      reels.forEach((reel) => {
        reel.textContent = getRandomSymbol();
      });
    }, 50, ); // Change symbols every 100ms for a rapid spin effect
  
    // Stop spinning after 2 seconds and show the final result
    setTimeout(() => {
      clearInterval(spinAnimation);
  
      // Remove the spinning class once the spin ends
      reels.forEach((reel) => {
        reel.classList.remove('spinning');
      });
  
      const results = reels.map(() => getRandomSymbol());
  
      // Display the final spin result
      reels.forEach((reel, index) => {
        reel.textContent = results[index];
      });
  
      // Check for a win
      checkWin(results, bet);
      spinButton.disabled = false;
      document.getElementById('betAmount').value = ''; // Clear input
    }, 4000); //spin time
  }
  
  function checkWin(results, bet) {
    const message = document.getElementById('message');
    const [result1, result2, result3] = results;
  
    if (result1 === result2 && result2 === result3) {
      const winnings = bet * 5;
      balance += winnings;
      message.textContent = `🎉 Jackpot! You won ${winnings}! 🎉`;
      message.classList.add('winning');
  
      // Play win sound
      winSound.play();
    } else if (result1 === result2 || result2 === result3 || result1 === result3) {
      const winnings = bet * 2;
      balance += winnings;
      message.textContent = `✨ Small Win! You earned ${winnings}!`;
      message.classList.add('winning');
  
      // Play win sound
      winSound.play();
    } else {
      message.textContent = `❌ Lost ${bet}! Try again!`;
      message.classList.add('losing');
  
      // Play lose sound
      loseSound.play();
    }
  
    updateBalance();
  }
  
  //Event listeners
  //Event listeners are used to make web pages interactive by responding to user actions.
    //Use addEventListener to attach a listener to an element.
    //Common events include click, mouseover, keydown, and submit.
    //Event listeners help keep your code clean, modular, and efficient.

  spinButton.addEventListener('click', spin);
resetButton.addEventListener('click', resetBalance);
  const volumeControl = document.getElementById('volumeControl');

volumeControl.addEventListener('input', () => {
  const volume = volumeControl.value;
  spinSound.volume = volume;
  winSound.volume = volume;
  loseSound.volume = volume;

  buttonClickSound.play(); //should play the button sound
});

//commonly used events:

//click: When an element is clicked.
//mouseover: When the mouse pointer moves over an element.
//mouseout: When the mouse pointer leaves an element.
//keydown: When a key is pressed.
//keyup: When a key is released.
//input: When the value of an input field changes.
//submit: When a form is submitted.
//load: When the page or an image finishes loading.













































/*const symbols = ['🍒', '🍋', '🔔', '⭐', '💎', '🍉', '🎲'];
    let balance = 100;

function getRandomSymbol() {
    return symbols[Math.floor(Math.random() * symbols.length)];
}

function spin() {
    const bet = parseInt(document.getElementById('betAmount').value, 10);
    const spinButton = document.getElementById('spinButton');
  
    if (isNaN(bet) || bet < 10 || bet > 50 || bet % 1 !== 0) {
      alert("Please enter a valid whole number between 10 and 50.");
      return;
    }
  
    if (balance < bet) {
      alert("Not enough balance!");
      return;
    }
  
    if (balance <= 0) {
      alert("Game Over! Please reset your balance.");
      return;
    }
    const spinButton = document.getElementById('spinButton');
spinButton.disabled = true;

setTimeout(() => {
  spinButton.disabled = false;
}, 1000);

  
    balance -= bet;
    updateBalance();
    spinButton.disabled = true;
  
    const reel1 = document.getElementById('reel1');
    const reel2 = document.getElementById('reel2');
    const reel3 = document.getElementById('reel3');
    const message = document.getElementById('message');
  
    // Add spinning animation
    reel1.classList.add('spinning');
    reel2.classList.add('spinning');
    reel3.classList.add('spinning');
  
    setTimeout(() => {
      const result1 = getRandomSymbol();
      const result2 = getRandomSymbol();
      const result3 = getRandomSymbol();
  
      reel1.textContent = result1;
      reel2.textContent = result2;
      reel3.textContent = result3;

  
      // Check for a win
      if (result1 === result2 && result2 === result3) {
        const winnings = bet * 5;
        balance += winnings;
        message.textContent = `🎉 Jackpot! You won ${winnings}! 🎉`;
      } else if (result1 === result2 || result2 === result3 || result1 === result3) {
        const winnings = bet * 2;
        balance += winnings;
        message.textContent = `✨ Small Win! You earned ${winnings}!`;
      } else {
        message.textContent = `❌ Lost ${bet}! Try again!`;
      }
  
      updateBalance();
      spinButton.disabled = false;
      document.getElementById('betAmount').value = ''; // Clear bet input
    }, 1000); // Simulate spinning for 1 second
  }
 

function updateBalance() {
    document.getElementById('balance').textContent = `Balance: ${balance}`;
}
function resetBalance() {
    balance = 100;
    updateBalance();
    document.getElementById('message').textContent = '';
  }
*/

