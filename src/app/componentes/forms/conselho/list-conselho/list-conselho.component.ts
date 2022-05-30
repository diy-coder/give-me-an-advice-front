import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConselhoService } from '../conselho.service';

@Component({
  selector: 'app-list-conselho',
  templateUrl: './list-conselho.component.html',
  styleUrls: ['./list-conselho.component.scss'],
})
export class ListConselhoComponent implements OnInit {
  botoes = [
    {
      nome: 'excluir',
      acao: 'excluir',
      icone: 'apagar.svg',
      title: 'Excluir Turma',
    },
  ];

  displayedColumns = [
    { head: 'Id', el: 'id' },
    { head: 'Nome', el: 'nome' },
    { head: 'Descricao', el: 'descricao' },
    { head: 'Usuário', el: 'usuario' },
    { head: 'Ações', el: 'actions', botoes: this.botoes },
  ];

  data: any[] = [];

  constructor(private router: Router, private service: ConselhoService) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.service.getAll().then((d) => {
      this.data = d;
    });
  }

  onRowSelect($event) {
    if (!$event) {
      return;
    }
    this.router.navigate(['conselhos/' + $event.id]);
  }

  executarAcao(event) {
    if (event.acao === 'add-new') {
      this.router.navigateByUrl('/conselhos/0');
    } else if (event.acao == 'excluir') {
      this.service
        .delete(event.item.id)
        .then((d) => {
          console.log('Item excluido com sucesso');
          this.loadData();
        })
        .catch((e) => {
          console.log('Erro ao tentar excluir registro');
        });
    }
  }
}
