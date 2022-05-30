import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Conselho } from 'src/models';
import { ConselhoService } from '../conselho.service';

@Component({
  selector: 'app-form-conselho',
  templateUrl: './form-conselho.component.html',
  styleUrls: ['./form-conselho.component.scss'],
})
export class FormConselhoComponent implements OnInit {
  formConselho: FormGroup;
  identifier;
  originalValue;

  constructor(
    private formBuilder: FormBuilder,
    private service: ConselhoService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.formConselho = this.formBuilder.group({});
  }

  ngOnInit(): void {
    this.identifier = this.route.snapshot.paramMap.get('identificador');
    this.construirFormulario();
    this.carregarDados();
  }

  carregarDados() {
    this.service.getById(this.identifier).then((d: any) => {
      this.formConselho.patchValue(d);
      this.originalValue = d;
    });
  }

  salvarInformacoes() {
    let conselhoInfo = this.formConselho.getRawValue();

    this.service
      .save(this.originalValue, conselhoInfo)
      .then((d) => {
        console.log('Conselho salvo com sucesso');
        this.cancelar();
      })
      .catch((e) => {
        console.log('Erro ao tentar salvar conselho: ' + e);
      });
  }

  cancelar() {
    this.router.navigate(['conselhos']);
  }

  private construirFormulario() {
    this.formConselho = this.formBuilder.group({
      id: [''],
      nome: [''],
      descricao: ['', Validators.required],
    });
  }
}
