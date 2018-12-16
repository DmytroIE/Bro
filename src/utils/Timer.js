const getSeconds = time => Number.parseInt(time / 1000, 10);

class Timer {
  constructor() {
    this.startTime = 0;
    this.id = null;
    this.onPause = true;
    this.onPauseTime = 0;
  }

  start(callback) {
    this.onPause = false;
    if (!this.id) {
      // чтобы второй раз случайно не инициировать таймер
      this.startTime = Date.now();
      this.id = setInterval(() => {
        callback(getSeconds(Date.now() - this.startTime + this.onPauseTime));
      }, 1000);
    }
  }

  pause() {
    this.onPause = true;
    this.onPauseTime = Date.now() - this.startTime + this.onPauseTime;
    clearInterval(this.id);
    this.id = null;
  }

  reset() {
    clearInterval(this.id);
    this.startTime = 0;
    this.onPause = true;
    this.onPauseTime = 0;
    this.id = null;
  }
}

export default Timer;
