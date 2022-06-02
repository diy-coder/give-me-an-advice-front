import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sim-nao',
  templateUrl: './sim-nao.component.html',
  styleUrls: ['./sim-nao.component.scss'],
})
export class SimNaoComponent implements OnInit {
  texto = 'Decidindo...';
  count = 0;
  porcentagem = 0;
  qtdIteracoes = 100;
  progressbarVisible = true;

  constructor() {
    this.progressbarVisible = true;
    this.porcentagem = 0;
    this.count = 0;
  }

  ngOnInit(): void {
    this.runDecision();
  }

  private runDecision() {
    let intervalo = setInterval(() => {
      this.count++;
      let valor = Math.floor(Math.random() * 10) + 1;

      this.texto = valor % 2 == 0 ? 'Sim' : 'Não';

      this.porcentagem = Math.floor((this.count / this.qtdIteracoes) * 100);

      if (this.count >= this.qtdIteracoes) {
        clearInterval(intervalo);
        this.progressbarVisible = false;
      }
    }, 50);
  }
}
