import "./assets/style.css";
import "./assets/index.css";
import "./assets/settings.svg";
import "./assets/continue.svg";
import "./assets/logo.svg";

let score = 0;
let streak = 0;
let totalTime = 0;
let avgTime = 0;
let tries = 0;
let avgTries = 0;
const dateValue = document.querySelector(".date_value");
const dayButtons = document.querySelectorAll(".day");
const continueBtn = document.querySelector(".continue");
const avgTimeDisplay = document.querySelector(".average_value");
const scoreDisplay = document.querySelector(".score_value");
const streakDisplay = document.querySelector(".streak_value");
const averageDisplay = document.querySelector(".average_value");
const solutionButton = document.querySelector(".solution_button");
const hintButton = document.querySelector(".hint_button");
const hintDisplay = document.querySelector(".main_hint");
const solutionDisplay = document.querySelector(".solution_display");
const hintOneDisplay = document.querySelector(".hint_one_value");
const hintTwoDisplay = document.querySelector(".hint_two_value");
const hintThreeDisplay = document.querySelector(".hint_three_value");
const hintCenturyDisplay = document.querySelector(".hint_century");
const hintYearDisplay = document.querySelector(".hint_year");
const stopwatchDisplay = document.querySelector(".stopwatch_value");
const doomsdaysMap = new Map([
  ["January", 3],
  ["February", 28],
  ["March", 14],
  ["April", 4],
  ["May", 9],
  ["June", 6],
  ["July", 11],
  ["August", 8],
  ["September", 5],
  ["October", 10],
  ["November", 7],
  ["December", 12],
]);
const isLeap = (year) => {
  return year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);
};
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
  if (
    answer == Values.weekday &&
    solutionDisplay.classList.contains("hidden")
  ) {
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
  stopTimer();
  hintDisplay.classList.add("hidden");
  Values = GetValues();
  solutionDisplay.classList.add("hidden");
  dayButtons.forEach((btn) => {
    btn.classList.remove("incorrect");
  });
  startTimer();
}
function giveHint() {
  let date = Values.randomDate;
  let [day, month, year] = date.split("-");
  let century = Math.floor(year / 100);
  hintCenturyDisplay.innerText = century * 100;
  hintYearDisplay.innerText = year;
  if (isLeap(year)) {
    doomsdaysMap.set("January", 4).set("February", 29);
  }
  let date2 = new Date();
  date2.setMonth(month - 1);
  let monthName = date2.toLocaleString("default", { month: "long" });
  console.log("monthName", monthName);
  let closestDoomsday = doomsdaysMap.get(monthName);
  console.log(closestDoomsday);
  let yearLastTwo = year - century * 100;
  let centuryAnchor;
  switch (century) {
    case 18: {
      centuryAnchor = 5;
      break;
    }
    case 19: {
      centuryAnchor = 3;
      break;
    }
    case 20: {
      centuryAnchor = 2;
      break;
    }
    default:
      console.log(0);
      break;
  }
  hintOneDisplay.innerText = `T = ${century} => ${centuryAnchor}`;

  let addOne = yearLastTwo % 2 == 0 ? "" : "+ 11";
  yearLastTwo = yearLastTwo % 2 == 0 ? yearLastTwo : yearLastTwo + 11;
  let yearHalf = yearLastTwo / 2;
  let addTwo = yearHalf % 2 == 0 ? "" : "+ 11";
  let yearHalfAfter = yearHalf % 2 == 0 ? yearHalf : yearHalf + 11;
  hintTwoDisplay.innerText = `${year} ${addOne} / 2 => ${yearHalf} ${addTwo} => ${yearHalfAfter} % 7 => ${
    yearHalfAfter % 7
  } => 7 - ${yearHalfAfter % 7} => ${
    7 - (yearHalfAfter % 7)
  } + ${centuryAnchor} => T = ${centuryAnchor + (7 - (yearHalfAfter % 7))}`;
  let final =
    parseInt(day, 10) -
    closestDoomsday +
    (centuryAnchor + (7 - (yearHalfAfter % 7)));
  final = final < 0 ? 7 - final : final;
  hintThreeDisplay.innerText = `${closestDoomsday} => ${day} - ${closestDoomsday} = ${
    day - closestDoomsday
  } + T = ${final} % 7 => ${final % 7}`;
  hintDisplay.classList.toggle("hidden");
}
document.addEventListener("keydown", (event) => {
  if (event.key in ["0", "1", "2", "3", "4", "5", "6"]) handleChoice(event.key);
});

let startTime;
let elapsedTime = 0;
let timer;

function startTimer() {
  startTime = new Date().getTime();
  timer = setInterval(updateTimer, 1000);
}

function stopTimer() {
  clearInterval(timer);
  let endTime = new Date().getTime();
  elapsedTime = parseInt((endTime - startTime) / 1000, 10);
  totalTime += elapsedTime;
  stopwatchDisplay.innerHTML = "00s";
  avgTime = score == 0 ? elapsedTime : Math.floor(totalTime / score);
  averageDisplay.innerText = `${avgTime}s`;
}

function updateTimer() {
  let currentTime = new Date().getTime();
  elapsedTime = parseInt((currentTime - startTime) / 1000, 10);
  stopwatchDisplay.innerHTML = elapsedTime + "s";
}
startTimer();
