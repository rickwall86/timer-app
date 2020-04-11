const durationInput = document.getElementById("duration");
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const circle = document.querySelector("circle");

const perimeter = circle.getAttribute("r") * 2 * Math.PI;
circle.setAttribute("stroke-dasharray", perimeter);

let duration;
const timer = new Timer(durationInput, startBtn, stopBtn, {
  onStart(totalDuration) {
    // Return and store timer duration value
    duration = totalDuration;
  },

  onTick(timeRemaining) {
    circle.setAttribute(
      "stroke-dashoffset",
      (perimeter * timeRemaining) / duration - perimeter
    );
  },

  onComplete() {
    console.log("Timer is complete");
  },

  changeBtns(start, stop) {
    start.classList.toggle("hide");
    stop.classList.toggle("display");
  },
});
