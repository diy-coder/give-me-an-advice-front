import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MotivacionalService } from '../motivacional.service';

@Component({
  selector: 'app-list-motivacional',
  templateUrl: './list-motivacional.component.html',
  styleUrls: ['./list-motivacional.component.scss'],
})
export class ListMotivacionalComponent implements OnInit {
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

  constructor(private router: Router, private service: MotivacionalService) {}

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
    this.router.navigate(['motivacionais/' + $event.id]);
  }

  executarAcao(event) {
    if (event.acao === 'add-new') {
      this.router.navigateByUrl('/motivacionais/0');
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
