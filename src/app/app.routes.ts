import { Routes } from '@angular/router';
import { TemplateFormValidationComponent } from './topics/template-form-validation/template-form-validation.component';
import { ReactiveFormValidationComponent } from './topics/reactive-form-validation/reactive-form-validation.component';

export const routes: Routes = [
    {
        path:'templateFormValidation',
        component:TemplateFormValidationComponent
    },
    {
        path:'reactiveFormValidation',
        component:ReactiveFormValidationComponent
    }
];
