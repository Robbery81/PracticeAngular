import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortalComponent } from './portal.component';
import { FormModule } from 'src/app/components/form/form.module';
import { PortalRoutingModule } from './portal.routing';

@NgModule({
  declarations: [
    PortalComponent
  ],
  exports: [
    PortalComponent
  ],
  imports: [
    CommonModule,
    FormModule,
    PortalRoutingModule
  ]
})
export class PortalModule { }
