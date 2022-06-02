import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimNaoComponent } from './sim-nao.component';

describe('SimNaoComponent', () => {
  let component: SimNaoComponent;
  let fixture: ComponentFixture<SimNaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimNaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimNaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
