var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);

var input = $(".input");
var numberBtns = $$(".number");
var operationBtns = $$(".operation");
var del = $(".del");
var acDel = $$(".all-del");
var equal = $(".equal");

const app = {
  handleEvents: function () {
    //Click number
    let numberBtn = Array.from(numberBtns);
    input.innerText = "0";
    numberBtn.forEach((itemNumber) => {
      itemNumber.onclick = function () {
        if (input.innerText.startsWith("0")) {
          input.innerText = "";
        }
        input.innerText = input.innerText + this.innerText;
      };
    });

    // Click operation
    let operationBtn = Array.from(operationBtns);
    operationBtn.forEach((itemOpera) => {
      itemOpera.onclick = function () {
        input.innerText = input.innerText + this.innerText;

        if (this.classList.value.includes("all-del")) {
          input.innerText = "0";
        }
      };
    });

    // Click del
    del.onclick = function () {
      let arrText = Array.from(input.innerText);
      arrText.splice(arrText.length - 1, 1);
      if (arrText.length != 0) {
        input.innerText = arrText.join("");
      } else {
        input.innerText = "0";
      }
    };

    // Click equals
    equal.onclick = function () {
      input.innerText = eval(input.innerText);
    };
  },

  start: function () {
    this.handleEvents();
  },
};
app.start();
