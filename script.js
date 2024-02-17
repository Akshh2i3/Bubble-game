let score = 0;

function makeBubbles() {
  let bunchOfCode = "";

  for (let i = 1; i <= 96; i++) {
    let rn = Math.floor(Math.random() * 10);
    bunchOfCode += `<div class="bubble">${rn}</div>`;
  }

  let selectTarget = document.querySelector(".playground");

  // innerHTML changes the original HTML code temporarily it apply elements unlike textContent
  selectTarget.innerHTML = bunchOfCode;
}

function getNewHit() {
  let rn = Math.floor(Math.random() * 10);
  document.querySelector(".hit").innerHTML = rn;
}

function runTimer() {
  let curr = 60;
  let TimerID = setInterval(() => {
    curr--;
    document.querySelector(".timer").innerHTML = curr;

    if (curr == 0) {
      // this function will terminate the setTnterval loop once it reachs else part
      // timerID will be generated after first iteration of setInterval
      // ID changes if we call setInterval again
      clearInterval(TimerID);

      var selected = document.querySelector(".playground");
      selected.innerHTML = `<h1>GAME OVER</h1>`;
    }
  }, 1000);
}

function incScore() {
  score += 10;
  document.querySelector(".score").innerHTML = score;
}

function decScore() {
  score -= 10;
  document.querySelector(".score").innerHTML = score;
}

function updatingScore() {
  document
    .querySelector(".playground")
    .addEventListener("click", function (bubbleDetails) {
      // alert("working");
      // bubbleDetails.target se hame particulare kis div pe click hora he vo ayega
      // bubbleDetails.target.textContent se uss div ka text ayega string me
      let clickedBubble = Number(bubbleDetails.target.textContent);
      let currHit = Number(document.querySelector(".hit").textContent);

      console.log(clickedBubble);

      if (clickedBubble > 9) return; // this case will occur when user will clicked outside the bubble on the playground the white background area so we will do nothing in that case

      if (currHit === clickedBubble) {
        incScore();
        makeBubbles();
        getNewHit();
      } else {
        decScore();
      }
    });
}

function startGame() {
  makeBubbles();
  getNewHit();
  runTimer();
  updatingScore();
}

document
  .querySelector(".startbtn")
  .addEventListener("click", () => startGame());

// learnings
// event bubbleing -> if we try to check an event listener on selected element and if that selected element is not found then it we will check event listner on its parent if not found there then on its parent of parent
// here we are not putting event listner on bubble because there are 100 bubbles but we can add only one EL on playground because it is parent of bubble and after checking bubble it will check playground
// when click event will be performed details of where it is clicked will be sorted inside a variable which will be passed as a parameter inside the funciton
