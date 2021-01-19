import { NgModule } from '@angular/core';
import { PortalGuard } from './guards/portal.guard';

@NgModule({
  providers: [PortalGuard]
})
export class AuthModule { }
