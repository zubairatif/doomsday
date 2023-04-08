let score = 0;
let streak = 0;
let avgTime = 0;
let tries = 0;
let avgTries = 0;
const dateValue = document.querySelector(".date_value");
const dayButtons = document.querySelectorAll(".day");
const continueBtn = document.querySelector(".continue");
const avgTimeDisplay = document.querySelector(".average_value");
const scoreDisplay = document.querySelector(".score_value");
const streakDisplay = document.querySelector(".streak_value");
const solutionButton = document.querySelector(".solution_button");
const hintButton = document.querySelector(".hint_button");
const hintDisplay = document.querySelector(".main_hint");
const solutionDisplay = document.querySelector(".solution_display");
const GetValues = () => {
  let randomDate = getRandomDate(1800, 2100);
  let weekday = getWeekday(randomDate);
  function getRandomDate(startYear, endYear) {
    let year =
      Math.floor(Math.random() * (endYear - startYear + 1)) + startYear;
    let month = Math.floor(Math.random() * 12) + 1;
    month = month < 10 ? `0${month}` : month;
    let daysInMonth = new Date(year, month, 0).getDate();
    let day = Math.floor(Math.random() * daysInMonth) + 1;
    day = day < 10 ? `0${day}` : day;
    return day + "-" + month + "-" + year;
  }

  function getWeekday(date) {
    let [day, month, year] = date.split("-");
    let dateObj = new Date(year, month - 1, day);
    let weekdayIndex = dateObj.getDay();
    return weekdayIndex;
  }
  dateValue.innerText = randomDate;
  return { randomDate, weekday };
};
let Values = GetValues();

continueBtn.addEventListener("click", next);

dayButtons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    handleChoice(e.target.dataset.value);
  });
});
hintButton.addEventListener("click", giveHint);
solutionButton.addEventListener("click", () => {
  solutionDisplay.innerHTML = Values.weekday;
  solutionDisplay.classList.toggle("hidden");
});
function handleChoice(answer) {
  tries += 1;
  e = document.querySelector(`[data-value="${answer}"]`);
  if (answer == Values.weekday) {
    e.classList.add("correct");
    score += 1;
    streak += 1;
  } else {
    e.classList.add("incorrect");
    streak = 0;
  }
  if (tries > 1) {
    streak = 0;
  }
  scoreDisplay.innerText = score;
  streakDisplay.innerText = streak;
  if (answer == Values.weekday) {
    next();
    tries = 0;
  }
}
function next() {
  Values = GetValues();
  dayButtons.forEach((btn) => {
    btn.classList.remove("correct");
    btn.classList.remove("incorrect");
  });
}
function giveHint() {
  let date = Values.randomDate;
  let [day, month, year] = date.split("-");
  let century = Math.ceil(year / 100);
  // let hintOne=
}
document.addEventListener("keydown", (event) => {
  if (event.key in ["0", "1", "2", "3", "4", "5", "6"]) handleChoice(event.key);
});
