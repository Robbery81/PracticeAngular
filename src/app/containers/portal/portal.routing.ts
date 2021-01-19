import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestComponent } from '../test/test.component';
import { PortalComponent } from './portal.component';

const routes: Routes = [
  {
    path: '', 
    component: PortalComponent,
  },
  {
    path: 'test/:id',
    component: TestComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortalRoutingModule { }
