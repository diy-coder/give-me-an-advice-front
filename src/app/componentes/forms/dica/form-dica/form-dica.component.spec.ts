import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDicaComponent } from './form-dica.component';

describe('FormDicaComponent', () => {
  let component: FormDicaComponent;
  let fixture: ComponentFixture<FormDicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormDicaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
