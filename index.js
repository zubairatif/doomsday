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
const hintOneDisplay = document.querySelector(".hint_one_value");
const hintTwoDisplay = document.querySelector(".hint_two_value");
const hintThreeDisplay = document.querySelector(".hint_three_value");
const hintCenturyDisplay = document.querySelector(".hint_century");
const hintYearDisplay = document.querySelector(".hint_year");

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
  hintDisplay.classList.toggle("hidden");
  Values = GetValues();
  dayButtons.forEach((btn) => {
    btn.classList.remove("correct");
    btn.classList.remove("incorrect");
  });
}
function giveHint() {
  let date = Values.randomDate;
  let [day, month, year] = date.split("-");
  let century = Math.floor(year / 100);
  hintCenturyDisplay.innerText = century * 100;
  hintYearDisplay.innerText = year;
  let closestDoomsday = "not working yet";
  let yearLastTwo = year - century * 100;
  let centuryAnchor;
  switch (century) {
    case 18: {
      centuryAnchor = 5;
      console.log("18th");
      break;
    }
    case 19: {
      console.log("19th");
      centuryAnchor = 3;
      break;
    }
    case 20: {
      console.log("20th");
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
  hintThreeDisplay.innerText = closestDoomsday;
  hintDisplay.classList.toggle("hidden");
}
document.addEventListener("keydown", (event) => {
  if (event.key in ["0", "1", "2", "3", "4", "5", "6"]) handleChoice(event.key);
});
