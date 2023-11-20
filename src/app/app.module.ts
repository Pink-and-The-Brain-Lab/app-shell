import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardModule } from './pages/dashboard/dashboard.module';
import { AvatarModule, UserStatusBulletModule } from 'millez-components-lib/components';
import { HeaderModule } from './core/components/header/header.module';
import { ToolsBarModule } from './core/components/tools-bar/tools-bar.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ActionsBarModule } from './core/components/actions-bar/actions-bar.module';
import { TooltipModule, TooltipOptions } from 'ng2-tooltip-directive';
import { DefaultTooltipOptions } from './configurations/tooltip-options';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { NgxsModule } from '@ngxs/store';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DashboardModule,
    AvatarModule,
    UserStatusBulletModule,
    HeaderModule,
    ToolsBarModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ToastrModule.forRoot({
      progressBar: true
    }),
    ActionsBarModule,
    TooltipModule.forRoot(DefaultTooltipOptions as TooltipOptions),
    NgxsModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
