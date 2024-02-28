import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormValidationComponent } from './reactive-form-validation.component';

describe('ReactiveFormValidationComponent', () => {
  let component: ReactiveFormValidationComponent;
  let fixture: ComponentFixture<ReactiveFormValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormValidationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReactiveFormValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
