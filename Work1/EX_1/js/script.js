//Celin Ben-Shushan --> 2125573838
//Maya Sofer --> 315058644

let fromBase = null;
let toBase = null;

function setFrom(event, base) {
  document.querySelectorAll(".from .box").forEach((btn) => {
    btn.classList.remove("selected");
  });

  event.target.classList.add("selected");
  fromBase = base;
  console.log("You chose from base: ", base);
}

function setTo(event, base) {
  document.querySelectorAll(".to .box").forEach((btn) => {
    btn.classList.remove("selected");
  });

  event.target.classList.add("selected");
  toBase = base;
  console.log("You chose to base: ", base);
}

function getUserInput() {
  let userInput = document.getElementById("userInput").value;
  if (userInput === "") {
    alert("Please enter a number");
    return null;
  }
  return userInput;
}

function convert() {
  let userInput = getUserInput();
  if (fromBase === null || toBase === null) {
    alert("Please select both from and to bases.");
    return;
  }

  let regex;
  switch (fromBase) {
    case 2:
      regex = /^[01]+$/;
      break;
    case 8:
      regex = /^[0-7]+$/;
      break;
    case 10:
      regex = /^[0-9]+$/;
      break;
    case 16:
      regex = /^[0-9A-Fa-f]+$/;
      break;
    default:
      alert("Invalid base selected.");
      return;
  }

  if (!regex.test(userInput)) {
    alert("Invalid input for the selected base. Please try again.");
    return;
  }

  let result = parseInt(userInput, fromBase);
  if (isNaN(result)) {
    alert("Invalid input. Please enter a valid number and try again.");
    return;
  }

  let convertedResult = result.toString(toBase);
  displayResult(convertedResult);
}

function displayResult(result) {
  document.getElementById("result").innerHTML = `The result is: ${result}`;
}
