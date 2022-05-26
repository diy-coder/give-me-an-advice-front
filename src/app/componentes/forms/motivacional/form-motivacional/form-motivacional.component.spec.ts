import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormMotivacionalComponent } from './form-motivacional.component';

describe('FormMotivacionalComponent', () => {
  let component: FormMotivacionalComponent;
  let fixture: ComponentFixture<FormMotivacionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormMotivacionalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormMotivacionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
