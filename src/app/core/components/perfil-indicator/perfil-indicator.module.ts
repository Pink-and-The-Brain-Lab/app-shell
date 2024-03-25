import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfilIndicatorComponent } from './perfil-indicator.component';
import { TooltipModule } from 'ng2-tooltip-directive';
import { TranslateModule, TranslatePipe } from '@ngx-translate/core';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { environment } from 'src/environments/environment';
const socketConfig: SocketIoConfig = { url: environment.baseUlrs.profileSocket, options: {} };

@NgModule({
  declarations: [
    PerfilIndicatorComponent
  ],
  exports: [
    PerfilIndicatorComponent
  ],
  imports: [
    CommonModule,
    TooltipModule,
    TranslateModule.forChild(),
    SocketIoModule.forRoot(socketConfig),
  ],
  providers: [
    TranslatePipe,
  ]
})
export class PerfilIndicatorModule { }
