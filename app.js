let buttons = document.getElementsByClassName("colorButton");
let colorValue = document.getElementById("colorValue");
let answerMessage = document.getElementById("answer");
let reset = document.getElementById("reset");
//let body = document.getElementById("bod");
//console.log(body);
var wrong = 0;

// function to set the button of color
function setButtonColor(button, red, green, blue) {
    button.setAttribute('style', 'background-color: rgb(' + red + ',' + green + ',' + blue + ')');
}

//function that return a random value between 0 to 255 
//ceil to make it round 
function makeColorValue() {
    return Math.ceil(0 + (255 - 0) * Math.random());
}


function startGame() {
    let answerButton = Math.round(Math.random() * (buttons.length - 1));
    // to clear the answer message whenever the function calls
    answerMessage.innerHTML = "";
    // to cleat the screen to white  whenever the function calls
    document.body.setAttribute('style', 'background-color: rgb(' + 255 + ',' + 255 + ',' + 255 + ')');
    wrong = 0;

    Array.from(buttons).forEach((element, index) => {
        let red = makeColorValue();
        let green = makeColorValue();
        let blue = makeColorValue();

        setButtonColor(element, red, green, blue);
        if (element.id == answerButton) {
            colorValue.innerHTML = `RGB(${red},${green},${blue})`;
        }

        buttons[index].addEventListener("click", () => {
            if ((index+1)===answerButton) {
                answerMessage.innerHTML = `Correct Answer!!`;
                

            }
            else if (index + 1 != answerButton) {
                answerMessage.innerHTML = `Worng Answer `;
                
            }

        });

    });

} 

reset.addEventListener("click", startGame);
startGame();



