class Timer {
  constructor(durationInput, startBtn, stopBtn, callbacks) {
    this.durationInput = durationInput;
    this.startBtn = startBtn;
    this.stopBtn = stopBtn;
    if (callbacks) {
      this.onStart = callbacks.onStart;
      this.onTick = callbacks.onTick;
      this.onComplete = callbacks.onComplete;
      this.changeBtns = callbacks.changeBtns;
    }

    this.startBtn.addEventListener("click", this.start);
    this.stopBtn.addEventListener("click", this.stop);
  }

  start = () => {
    if (this.onStart) {
      this.onStart(this.timeRemaining);
    }
    // Call tick as soon as start is ran so that we dont have a 1 second delay before the countdown begins
    this.tick();
    this.interval = setInterval(this.tick, 50);
    this.changeBtns(this.startBtn, this.stopBtn);
  };

  stop = () => {
    clearInterval(this.interval);
    this.changeBtns(this.startBtn, this.stopBtn);
  };

  tick = () => {
    if (this.timeRemaining <= 0) {
      this.stop();
      if (this.onComplete) {
        this.onComplete();
      }
    } else {
      this.timeRemaining = this.timeRemaining - 0.05;
      if (this.onTick) {
        this.onTick(this.timeRemaining);
      }
    }
  };

  get timeRemaining() {
    return parseFloat(this.durationInput.value);
  }

  set timeRemaining(time) {
    // toFixed to set the number of decimals inside the input
    this.durationInput.value = time.toFixed(2);
  }

  //
}
