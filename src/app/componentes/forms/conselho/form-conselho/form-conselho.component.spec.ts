import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormConselhoComponent } from './form-conselho.component';

describe('FormConselhoComponent', () => {
  let component: FormConselhoComponent;
  let fixture: ComponentFixture<FormConselhoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormConselhoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormConselhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
