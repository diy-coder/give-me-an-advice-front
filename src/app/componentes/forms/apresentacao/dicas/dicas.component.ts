import { Component, OnInit } from '@angular/core';
import { DicaService } from '../../dica/dica.service';

@Component({
  selector: 'app-dicas',
  templateUrl: './dicas.component.html',
  styleUrls: ['./dicas.component.scss'],
})
export class ApresentacaoDicasComponent implements OnInit {
  texto = 'Decidindo...';
  count = 0;
  porcentagem = 0;
  qtdIteracoes = 100;
  progressbarVisible = true;
  dicaList: [] = [];

  constructor(private dicaService: DicaService) {
    this.progressbarVisible = true;
    this.porcentagem = 0;
    this.count = 0;
  }

  ngOnInit(): void {
    this.dicaService.getAll().then((data: any) => {
      this.dicaList = data;
      this.runDecision(data);
    });
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
