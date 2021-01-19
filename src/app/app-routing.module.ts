import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortalGuard } from './modules/auth/guards/portal.guard';

const routes: Routes = [
  {
    path: 'portal',
    canActivate: [PortalGuard],
    loadChildren: () => import('./containers/portal/portal.module').then(m => m.PortalModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
