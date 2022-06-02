import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApresentacaoDicasComponent } from './dicas.component';

describe('DicasComponent', () => {
  let component: ApresentacaoDicasComponent;
  let fixture: ComponentFixture<ApresentacaoDicasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ApresentacaoDicasComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApresentacaoDicasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
