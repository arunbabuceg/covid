import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoheroineComponent } from './coheroine.component';

describe('CoheroineComponent', () => {
  let component: CoheroineComponent;
  let fixture: ComponentFixture<CoheroineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoheroineComponent]
    });
    fixture = TestBed.createComponent(CoheroineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
