import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FormularioGenerico } from 'src/app/generics/formulario.generico';
import { MotivacionalService } from '../motivacional.service';

@Component({
  selector: 'app-form-motivacional',
  templateUrl: './form-motivacional.component.html',
  styleUrls: ['./form-motivacional.component.scss'],
})
export class FormMotivacionalComponent
  extends FormularioGenerico
  implements OnInit
{
  formularioCadastro: any;
  identifier;
  originalValue;

  constructor(
    readonly formBuilder: FormBuilder,
    readonly service: MotivacionalService,
    readonly router: Router,
    readonly route: ActivatedRoute
  ) {
    super();
    this.formularioCadastro = this.formBuilder.group({});
  }

  override cancelar() {
    this.router.navigate(['motivacionais']);
  }
}
