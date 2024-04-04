// Generates a random number between 0 and 1 using Math.random.
const getRandomNumber = () => Math.random();

// Determines if the given randomNumber is less than 0.5. Returns true for values less than 0.5, otherwise false.
const getTrueorFalse = (randomNumber) => randomNumber < 0.5;

// Returns "Cara" if trueOrFalse is true, otherwise returns "Cruz". This function decides the outcome based on the boolean input.
const getCaraCruz = (trueOrFalse) => trueOrFalse ? "Cara" : "Cruz";

// Initiates the coin flip process, evaluates it, and updates the innerHTML of the element with id "message" to display "Cara" or "Cruz".
const flipCoin = () => {
    const result = getCaraCruz(getTrueorFalse(getRandomNumber()));
    document.getElementById("message").innerHTML = result;
    document.getElementById("message").style.visibility = "hidden";
    return result
}

// Retrieves the image element from the document for future manipulation.
const webImage = document.getElementById("image")

// Changes the text of the button with id "buttonFlipCoin" to "Volver a lanzar" after a click event, indicating the coin has been flipped and offering a prompt for another flip.
const changeMessage = () => document.getElementById("buttonFlipCoin").innerText = "Volver a lanzar"

// Adjusts the source of the image based on the coin flip result and ensures the image is visible.
const changeImage = (result) => {
    webImage.src = "./img/penguin_coin.gif"

    webImage.style.visibility = "visible";
    setTimeout(() => {
        webImage.src = result === "Cara" ? "./img/head_cat.png" : "./img/tail_cat.png";
    }, 1000)


}

// Attaches click event listeners to the "buttonFlipCoin" button to trigger the coin flip, update the button text, and change the display image accordingly.
document.getElementById("buttonFlipCoin").addEventListener("click", () =>{
    const result = flipCoin();
    changeMessage();
    changeImage(result)
    setTimeout(() => {document.getElementById("message").style.visibility = "visible";}, 1000)
    
})
