import { Location } from '@angular/common';
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
  respondendo = false;
  data;

  constructor(
    private activatedRoute: ActivatedRoute,
    private location: Location
  ) {
    this.progressbarVisible = true;
    this.porcentagem = 0;
    this.count = 0;
    this.respondendo = false;
  }

  ngOnInit(): void {
    this.data = this.activatedRoute.snapshot.data['data'];
  }

  revelarResposta() {
    this.progressbarVisible = true;
    this.porcentagem = 0;
    this.count = 0;
    this.respondendo = true;
    this.runDecision(this.data.dataList);
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

  goBack() {
    this.location.back();
  }
}
