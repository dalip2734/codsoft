// Function to append a character to the display
function appendCharacter(character) {
  document.getElementById('display').value += character;
}

// Function to clear the display
function clearDisplay() {
  document.getElementById('display').value = '';
}

// Function to delete the last character from the display
function deleteLastEntry() {
  let display = document.getElementById('display');
  display.value = display.value.slice(0, -1);
}

// Function to calculate the result of the expression in the display
function calculateResult() {
  let display = document.getElementById('display');
  try {
    display.value = eval(display.value);
  } catch (e) {
    display.value = 'Error';
  }
}
