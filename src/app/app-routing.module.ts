import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthdGuard } from './shared/authguard.guard';

const routes: Routes = [{
  path: '',
  loadChildren: async () => (await import('./pages/dashboard/dashboard.module')).DashboardModule,
  pathMatch: 'full',
  canActivate: [AuthdGuard]
}, {
  path: 'login',
  loadChildren: async () => (await import('appLogin/Module')).LoginModule
}, {
  path: 'new-profile',
  loadChildren: async () => (await import('appNewProfile/Module')).NewProfileModule,
  canActivate: [AuthdGuard]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
