import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthdGuard } from './shared/authguard.guard';
import { TranslateModule } from '@ngx-translate/core';
import { I18N_CONFIG } from 'millez-web-components/dist/components';

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
  imports: [
    RouterModule.forRoot(routes),
    TranslateModule.forRoot(I18N_CONFIG),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
