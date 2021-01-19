import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import { TemplateComponent } from './template/template.component';

@NgModule({
  declarations: [InputComponent, TemplateComponent],
  imports: [
    CommonModule
  ],
  exports: [
    InputComponent,
    TemplateComponent
  ]
})
export class FormModule { }
