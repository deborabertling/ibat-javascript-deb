document.addEventListener("DOMContentLoaded", function () {
  // it waits for the DOM content to be loaded before executing the code
  const display = document.querySelector(".display");
  const keys = document.querySelector(".keys");
  // it selects the display and keys elements

  let num2 = "";
  let operator = "";
  let num1 = "";
  // variables to keep track of what's being typed and calculated

  keys.addEventListener("click", function (event) {
    // when any button that is located inside the 'keys' element is clicked:
    const target = event.target;
    // to get the element that was clicked

    if (!target.matches("div")) {
      //used to check if the element doesn't match the selector, because of the '!'
      return;
    }
    // then if the clicked element doesn't match, is not a button, do nothing

    const keyContent = target.textContent;
    // if it is, show the text of the button on the display

    if (target.id === "clear") {
      // if the target id is equal to clear, which is the clear button:
      num2 = "";
      operator = "";
      num1 = "";
      display.textContent = "";
    }
    // reset everything to empty and clear the display area
    else if (keyContent === "=") {
      // if the equal buttton is clicked:
      if (num1 !== "" && operator !== "" && num2 !== "") {
        // to ensure that both numbers and operator were entered

        const result = calculate(num1, operator, num2);
        display.textContent = result;
        // calculates the result of the operation and shows it on the display

        num2 = result;
        // sets the num 2 as the result so it can be used in another operation

        num1 = "";
        operator = "";
        // clears the num 1 and operator elements
      }
    } else if (
      keyContent === "+" ||
      keyContent === "-" ||
      keyContent === "×" ||
      keyContent === "÷"
    ) {
      // if one of the operator buttons is clicked

      if (num2 !== "") {
        // ensures that num2 is not an empty string

        operator = keyContent;
        num1 = num2;
        // saves the operator and the result (num2) as num1 for the next operation

        num2 = "";
        // now it clears the num2 to allow a new number
      }
    } else {
      num2 += keyContent;
      // when num2 is clicked it is assigned as the keyContent
      display.textContent = num2;
      // it shows the num2 on the display
    }
    //used to show numbers (specially the second number) on the display as the user clicks on them
  });

  // function to do the actual math:
  function calculate(a, op, b) {
    a = parseFloat(a);
    b = parseFloat(b);
    // turns the a and b into floating point numbers (to allow integers and decimal numbers)

    // Do the math based on the operator
    if (op === "+") {
      return a + b;
    } else if (op === "-") {
      return a - b;
    } else if (op === "×") {
      return a * b;
    } else if (op === "÷") {
      return a / b;
    } else {
      return ""; // if op doesn't match one of the operators, do nothing
    }
  }
});
