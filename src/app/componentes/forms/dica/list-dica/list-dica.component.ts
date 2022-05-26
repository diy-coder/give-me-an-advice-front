import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-dica',
  templateUrl: './list-dica.component.html',
  styleUrls: ['./list-dica.component.scss'],
})
export class ListDicaComponent implements OnInit, OnDestroy, AfterViewInit {
  TIME_LIMIT = 10;
  timeLeft = 10;
  intervalCounter: any;
  showTimer = true;
  remainingPathColor = 'green';

  FULL_DASH_ARRAY = 283;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.setCircleDasharray(this.timeLeft, this.TIME_LIMIT);

    this.intervalCounter = setInterval(() => {
      this.formatTime();
    }, 1_000);
  }

  formatTime() {
    this.timeLeft = this.timeLeft - 1;

    this.setCircleDasharray(this.timeLeft - 1, this.TIME_LIMIT);

    if (this.timeLeft == 0) {
      clearInterval(this.intervalCounter);
      this.showTimer = false;
    }
  }

  setCircleDasharray(timeLeft: number, timeLimit: number) {
    const circleDasharray = `${(
      this.calculateTimeFraction(timeLeft, timeLimit) * this.FULL_DASH_ARRAY
    ).toFixed(0)} 283`;
    document
      .getElementById('base-timer-path-remaining')
      ?.setAttribute('stroke-dasharray', circleDasharray);
  }

  calculateTimeFraction(timeLeft: number, timeLimit: number) {
    return timeLeft / timeLimit;
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalCounter);
  }
}
