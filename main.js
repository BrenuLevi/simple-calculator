let display = document.querySelector('#display p');
let restDisplay = document.querySelector('#display small')

let buttons = Array.from(document.getElementsByClassName('button'));

buttons.map(button => {
  button.addEventListener('click', (e) => {
    switch (e.target.innerText) {
      case 'C':
        display.innerText = '';
        restDisplay.innerText = '';
        break;
      case '=':
        try {
          if (display.innerText.indexOf('/') > -1 && display.innerText.indexOf('+') <= -1 && display.innerText.indexOf('-') <= -1 && display.innerText.indexOf('*') <= -1) {
            restDisplay.innerText = `The rest of integer division is ${getDivisionRest()}`;
          } else {
            restDisplay.innerText = '';
          }
          display.innerText = eval(display.innerText);
        } catch {
          display.innerText = "Error"
        }
        break;
      case '←':
        if (display.innerText) {
          display.innerText = display.innerText.slice(0, -1);
          restDisplay.innerText = '';
        }
        break;
      default:
        display.innerText += e.target.innerText;
    }
  });
});

function getDivisionRest() {
  let num1 = display.innerText.split('/')[0];
  let num2 = display.innerText.split('/')[1];

  return num1 - ((Math.floor(num1 / num2)) * num2);
}

