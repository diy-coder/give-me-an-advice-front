import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMotivacionalComponent } from './list-motivacional.component';

describe('ListMotivacionalComponent', () => {
  let component: ListMotivacionalComponent;
  let fixture: ComponentFixture<ListMotivacionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListMotivacionalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMotivacionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
