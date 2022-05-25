import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListConselhoComponent } from './list-conselho.component';

describe('ListConselhoComponent', () => {
  let component: ListConselhoComponent;
  let fixture: ComponentFixture<ListConselhoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListConselhoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListConselhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
