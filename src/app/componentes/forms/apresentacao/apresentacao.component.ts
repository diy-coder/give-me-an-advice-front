import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-apresentacao',
  templateUrl: './apresentacao.component.html',
  styleUrls: ['./apresentacao.component.scss'],
})
export class ApresentacaoComponent implements OnInit {
  texto = 'Decidindo...';
  count = 0;
  porcentagem = 0;
  qtdIteracoes = 100;
  progressbarVisible = true;

  constructor(private activatedRoute: ActivatedRoute) {
    this.progressbarVisible = true;
    this.porcentagem = 0;
    this.count = 0;
  }

  ngOnInit(): void {
    const data = this.activatedRoute.snapshot.data['data'];
    this.runDecision(data.dataList);
  }

  private runDecision(data: any[]) {
    let intervalo = setInterval(() => {
      this.count++;
      let valor = Math.floor(Math.random() * data.length);

      this.texto = data[valor].descricao;

      this.porcentagem = Math.floor((this.count / this.qtdIteracoes) * 100);

      if (this.count >= this.qtdIteracoes) {
        clearInterval(intervalo);
        this.progressbarVisible = false;
      }
    }, 50);
  }
}
