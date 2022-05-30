import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Dica } from 'src/models';
import { DicaService } from '../dica.service';

@Component({
  selector: 'app-form-dica',
  templateUrl: './form-dica.component.html',
  styleUrls: ['./form-dica.component.scss'],
})
export class FormDicaComponent implements OnInit {
  formDica: FormGroup;
  identifier;
  originalValue;

  constructor(
    private formBuilder: FormBuilder,
    private dicaService: DicaService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.formDica = this.formBuilder.group({});
  }

  ngOnInit(): void {
    this.identifier = this.route.snapshot.paramMap.get('identificador');
    this.construirFormulario();
    this.carregarDados();
  }

  carregarDados() {
    this.dicaService.getById(this.identifier).then((d: any) => {
      this.formDica.patchValue(d);
      this.originalValue = d;
    });
  }

  salvarInformacoes() {
    let dicaInfo = this.formDica.getRawValue();

    this.dicaService
      .save(this.originalValue, dicaInfo)
      .then((d) => {
        console.log('Dica salva com sucesso');
        this.cancelar();
      })
      .catch((e) => {
        console.log('Erro ao tentar salvar dica: ' + e);
      });
  }

  cancelar() {
    this.router.navigate(['dicas']);
  }

  private construirFormulario() {
    this.formDica = this.formBuilder.group({
      id: [''],
      nome: [''],
      descricao: ['', Validators.required],
    });
  }
}
