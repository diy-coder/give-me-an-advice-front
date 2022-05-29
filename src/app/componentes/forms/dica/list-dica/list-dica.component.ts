import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { threadId } from 'worker_threads';
import { DicaService } from '../dica.service';

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

  displayedColumns = [
    { head: 'Id', el: 'id' },
    { head: 'Nome', el: 'nome' },
    { head: 'Descricao', el: 'descricao' },
    { head: 'Usuário', el: 'usuario' },
  ];

  data: any[] = [];

  constructor(private router: Router, private dicaService: DicaService) {}

  ngOnInit(): void {
    this.dicaService.getAll().then((d) => {
      this.data = d;
    });
  }

  ngAfterViewInit(): void {
    this.setCircleDasharray(this.timeLeft, this.TIME_LIMIT);

    this.intervalCounter = setInterval(() => {
      this.formatTime();
    }, 1_000);
  }

  onRowSelect($event) {
    if (!$event) {
      return;
    }
    this.router.navigate(['dicas/' + $event.id]);
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

  executarAcao(event) {
    if (event.acao === 'add-new') {
      this.router.navigateByUrl('/dicas/0');
    }
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalCounter);
  }
}
