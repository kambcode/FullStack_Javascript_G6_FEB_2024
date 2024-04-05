document.addEventListener('DOMContentLoaded', function() {
    const randomNumber = 30;
    const form = document.getElementById('guess-form');
    const guessInput = document.getElementById('guess-input');
    const message = document.getElementById('message');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      const guess = parseInt(guessInput.value);
      if (guess < 1 || guess > 100 || isNaN(guess)) {
        showMessage('Por favor, ingresa un número válido entre 1 y 100.', 'red');
      } else {
        checkGuess(guess);
      }
    });
  
    function checkGuess(guess) {
      if (guess === randomNumber) {
        showMessage(`¡Felicidades! ¡Adivinaste el número ${randomNumber}!`, 'green');
        guessInput.disabled = true;
      } else if (guess < randomNumber) {
        showMessage('El número es demasiado bajo. Intenta de nuevo.', 'blue');
      } else {
        showMessage('El número es demasiado alto. Intenta de nuevo.', 'blue');
      }
    }
  
    function showMessage(text, color) {
      message.textContent = text;
      message.style.color = color;
    }
  });
  