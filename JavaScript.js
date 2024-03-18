const ArrowDown = document.querySelectorAll(".arrowDown");
const ArrowUp = document.querySelectorAll(".arrowUp");
const answer = document.querySelectorAll(".answer");
const question = document.querySelectorAll(".question p");

function closeAllExcept(index) {
  answer.forEach((ans, i) => {
    if (i !== index) {
      ans.style.display = "none";
      ArrowUp[i].style.display = "none";
      ArrowDown[i].style.display = "inline";
      question[i].style.fontWeight = "normal";
    }
  });
}

ArrowDown.forEach((ArrowDown, index) => {
  ArrowDown.addEventListener("click", function () {
    closeAllExcept(index);
    answer[index].style.display = "block"; //*answer appear
    ArrowDown.style.display = "none"; //*hide the arrow down
    ArrowUp[index].style.display = "inline"; //*show the arrow up
    question[index].style.fontWeight = "bold";
  });
});

ArrowUp.forEach((ArrowUp, index) => {
  ArrowUp.addEventListener("click", function () {
    answer[index].style.display = "none"; //*hide the answer
    ArrowUp.style.display = "none"; //*hide the arrow up
    ArrowDown[index].style.display = "inline"; //*appear arrrow down
    question[index].style.fontWeight = "normal";
  });
});

question.forEach((questionElement, index) => {
  questionElement.addEventListener("click", function () {
    if (answer[index].style.display === "none") {
      closeAllExcept(index);
      answer[index].style.display = "block";
      ArrowDown[index].style.display = "none"; //*hide the arrow down
      ArrowUp[index].style.display = "inline"; //*show the arrow up
      questionElement.style.fontWeight = "bold";
    } else {
      answer[index].style.display = "none"; //*hide the answer
      ArrowUp[index].style.display = "none"; //*hide the arrow up
      ArrowDown[index].style.display = "inline"; //*appear arrrow down
      questionElement.style.fontWeight = "normal";
    }
  });
});
