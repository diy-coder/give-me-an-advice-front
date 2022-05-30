import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FormularioGenerico } from 'src/app/generics/formulario.generico';
import { ConselhoService } from '../conselho.service';

@Component({
  selector: 'app-form-conselho',
  templateUrl: './form-conselho.component.html',
  styleUrls: ['./form-conselho.component.scss'],
})
export class FormConselhoComponent
  extends FormularioGenerico
  implements OnInit
{
  formularioCadastro: any;
  identifier;
  originalValue;

  constructor(
    readonly formBuilder: FormBuilder,
    readonly service: ConselhoService,
    readonly router: Router,
    readonly route: ActivatedRoute
  ) {
    super();
    this.formularioCadastro = this.formBuilder.group({});
  }

  override cancelar() {
    this.router.navigate(['conselhos']);
  }
}
