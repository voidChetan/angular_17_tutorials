import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-validation',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './reactive-form-validation.component.html',
  styleUrl: './reactive-form-validation.component.css'
})
export class ReactiveFormValidationComponent {

  userForm: FormGroup;
  isFormSubmitted: boolean = false;

  constructor() {
    this.userForm =  new FormGroup({
      firstName: new FormControl("",[Validators.required]),
      lastName: new FormControl("",[Validators.required,Validators.minLength(4)]),
      userName:  new FormControl("",[Validators.required,Validators.email]),
      city: new FormControl(""),
      state: new FormControl(""),
      zipcode: new FormControl(""),
      isAgree: new FormControl(false)
    })
  }

  onSubmit() {
    const isFormValid = this.userForm.valid;
    debugger;
    this.isFormSubmitted =  true;
  }

}
