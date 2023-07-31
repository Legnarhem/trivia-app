import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultCounterComponent } from './result-counter.component';

describe('ResultCounterComponent', () => {
  let component: ResultCounterComponent;
  let fixture: ComponentFixture<ResultCounterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResultCounterComponent]
    });
    fixture = TestBed.createComponent(ResultCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
