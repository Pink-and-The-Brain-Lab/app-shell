import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthdGuard } from './shared/authguard.guard';
import { TranslateModule } from '@ngx-translate/core';
import { I18N_CONFIG } from 'millez-web-components/dist/components';

const routes: Routes = [{
  path: '',
  loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule),
  pathMatch: 'full',
  canActivate: [AuthdGuard]
}, {
  path: 'login',
  loadChildren: () => import('appLogin/Module').then(m => m.LoginModule)
}, {
  path: 'new-profile',
  loadChildren: () => import('appNewProfile/Module').then(m => m.NewProfileModule),
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
