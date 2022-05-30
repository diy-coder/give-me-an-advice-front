import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceInterface } from './service.interface';

@Component({
  template: '',
})
export abstract class FormularioGenerico {
  abstract identifier;
  abstract route;
  abstract service: ServiceInterface;
  abstract formularioCadastro;
  abstract originalValue;
  abstract router: Router;
  abstract formBuilder: FormBuilder;

  abstract cancelar();

  ngOnInit(): void {
    this.identifier = this.route.snapshot.paramMap.get('identificador');
    this.construirFormulario();
    this.carregarDados();
  }

  carregarDados() {
    this.service.getById(this.identifier).then((d: any) => {
      this.formularioCadastro.patchValue(d);
      this.originalValue = d;
    });
  }

  salvarInformacoes() {
    let conselhoInfo = this.formularioCadastro.getRawValue();

    this.service
      .save(this.originalValue, conselhoInfo)
      .then((d) => {
        console.log('Registro salvo com sucesso');
        this.cancelar();
      })
      .catch((e) => {
        console.log('Erro ao tentar salvar registro: ' + e);
      });
  }

  private construirFormulario() {
    this.formularioCadastro = this.formBuilder.group({
      id: [''],
      nome: [''],
      descricao: ['', Validators.required],
    });
  }
}
