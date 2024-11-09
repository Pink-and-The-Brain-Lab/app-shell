import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardModule } from './pages/dashboard/dashboard.module';
import {
  AvatarModule,
  DashboardVisualizationControlState,
  I18N_CONFIG,
  LanguageChangeState,
  ProfilesState,
  UserStatusBulletModule,
} from 'millez-web-components/dist/components';
import { HeaderModule } from './core/components/header/header.module';
import { ToolsBarModule } from './core/components/tools-bar/tools-bar.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ActionsBarModule } from './core/components/actions-bar/actions-bar.module';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { NgxsModule } from '@ngxs/store';
import { TranslateModule } from '@ngx-translate/core';
import { ApiRequestsInterceptorInterceptor } from './shared/api-requests-interceptor.interceptor';

@NgModule({ declarations: [AppComponent],
    bootstrap: [AppComponent], imports: [BrowserModule,
        AppRoutingModule,
        DashboardModule,
        AvatarModule,
        UserStatusBulletModule,
        HeaderModule,
        ToolsBarModule,
        BrowserAnimationsModule,
        ActionsBarModule,
        ToastrModule.forRoot({
            progressBar: true,
        }),
        NgxsModule.forRoot([
            DashboardVisualizationControlState,
            LanguageChangeState,
            ProfilesState,
        ]),
        TranslateModule.forRoot(I18N_CONFIG)], providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: ApiRequestsInterceptorInterceptor,
            multi: true,
        },
        provideHttpClient(withInterceptorsFromDi()),
    ] })
export class AppModule {}
