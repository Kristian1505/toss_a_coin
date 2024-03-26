// Generates a random number between 0 and 1 using Math.random.
const getRandomNumber = () => Math.random();

// Determines if the given randomNumber is less than 0.5. Returns true for values less than 0.5, otherwise false.
const getTrueorFalse = (randomNumber) => randomNumber < 0.5;

// Returns "Cara" if trueOrFalse is true, otherwise returns "Cruz". This function decides the outcome based on the boolean input.
const getCaraCruz = (trueOrFalse) => trueOrFalse ? "Cara" : "Cruz";

// Triggers the coin flip process by generating a random number, evaluating it, and updating the innerHTML of the element with id "pp" to show "Cara" or "Cruz".
const flipCoin = () => document.getElementById("message").innerHTML = getCaraCruz(getTrueorFalse(getRandomNumber()));

// Changes the text of the button with id "buttonFlipCoin" to "Volver a lanzar" after a click event, indicating the coin has been flipped and offering a prompt for another flip.
const changeMessage = () => document.getElementById("buttonFlipCoin").innerText = "Volver a lanzar"

// Attaches an event listener to the button with id "buttonFlipCoin" that triggers the flipCoin function, initiating the coin flip process when the button is clicked.
document.getElementById("buttonFlipCoin").addEventListener("click", flipCoin);

// Attaches another event listener to the same button that triggers the changeMessage function, changing the button's text to indicate another action can be taken.
document.getElementById("buttonFlipCoin").addEventListener("click", changeMessage);