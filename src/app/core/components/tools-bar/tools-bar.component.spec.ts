import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConfigurationModule } from '../configuration/configuration.module';
import { HelpCenterModule } from '../help-center/help-center.module';
import { NotificationsModule } from '../notifications/notifications.module';
import { PerfilIndicatorModule } from '../perfil-indicator/perfil-indicator.module';
import { RecordScreenModule } from '../record-screen/record-screen.module';
import { RefreshSystemModule } from '../refresh-system/refresh-system.module';
import { SearchModule } from '../search/search.module';
import { TimerModule } from '../timer/timer.module';
import { ToolsBarComponent } from './tools-bar.component';
import { LogoModule } from 'millez-web-components/dist/components';
import { TranslateModule, TranslatePipe } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import TOASTR_SERVICE_MOCK from 'src/app/mocks/toastr-service.test.mock';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { NgxsModule } from '@ngxs/store';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('ToolsBarComponent', () => {
  let component: ToolsBarComponent;
  let fixture: ComponentFixture<ToolsBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    declarations: [ToolsBarComponent],
    imports: [LogoModule,
        SearchModule,
        NotificationsModule,
        TimerModule,
        PerfilIndicatorModule,
        RecordScreenModule,
        HelpCenterModule,
        RefreshSystemModule,
        ConfigurationModule,
        TranslateModule.forRoot(),
        NoopAnimationsModule,
        RouterTestingModule.withRoutes([]),
        NgxsModule.forRoot([])],
    providers: [
        TranslatePipe,
        { provide: ToastrService, useValue: TOASTR_SERVICE_MOCK },
        provideHttpClient(withInterceptorsFromDi()),
        provideHttpClientTesting(),
    ]
})
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolsBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
