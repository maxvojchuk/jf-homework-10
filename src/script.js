//1
// let count = 0;
// const intervalTimer = setInterval(() => {
//   count++;
//   console.log(`Number ${count}`);

//   if (count === 5) {
//     clearInterval(intervalTimer);
//     alert("стоп");
//   }
// }, 2000);
//2
// const boxes = document.querySelectorAll(".box");
// let size = 60;

// const sixeBox = setInterval(() => {
//   size += 15;
//   boxes.forEach((box) => {
//     box.style.width = `${size}px`;
//     box.style.height = `${size}px`;
//   });
// }, 1000);
// 3
// let score = 0;
// const scoreText = document.querySelector("#score");
// const target = document.querySelector("#ball");

// const moveOfBall = setInterval(() => {
//   const x = Math.random() * (window.innerWidth - 50);
//   const y = Math.random() * (window.innerHeight - 50);
//   target.style.left = `${x}px`;
//   target.style.top = `${y}px`;
// }, 1000);

// target.addEventListener("click", () => {
//   score++;
//   scoreText.textContent = `Score: ${score}`;
//   moveOfBall();
// });

// setTimeout(() => {
//   alert(`ВИ набрали :${score}`);
//   target.style.display = "none";
// }, 10000);
// 4
const timeInput = document.querySelector("#timeInput");
const startButton = document.querySelector("#startButton");
const message = document.querySelector("#message");

startButton.addEventListener("click", () => {
  const secondsOfTime = parseInt(timeInput.value);
  if (isNaN(secondsOfTime) || secondsOfTime <= 0) {
    message.textContent = "Ви велли 0 або ви нічого не ввели, як так ";
    return;
  }

  message.textContent = `Залишилось ${secondsOfTime} секунд.`;
  setTimeout(() => {
    message.textContent =
      "Тут мін бути звук , але я забув як його додававти, атак час вийшов!";
  }, secondsOfTime * 1000);
});
