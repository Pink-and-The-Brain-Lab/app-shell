import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConfigurationModule } from '../configuration/configuration.module';
import { HelpCenterModule } from '../help-center/help-center.module';
import { LogoModule } from '../logo/logo.module';
import { NotificationsModule } from '../notifications/notifications.module';
import { PerfilIndicatorModule } from '../perfil-indicator/perfil-indicator.module';
import { RecordScreenModule } from '../record-screen/record-screen.module';
import { RefreshSystemModule } from '../refresh-system/refresh-system.module';
import { SearchModule } from '../search/search.module';
import { TimerModule } from '../timer/timer.module';
import { ToolsBarComponent } from './tools-bar.component';

describe('ToolsBarComponent', () => {
  let component: ToolsBarComponent;
  let fixture: ComponentFixture<ToolsBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToolsBarComponent ],
      imports: [
        LogoModule,
        SearchModule,
        NotificationsModule,
        TimerModule,
        PerfilIndicatorModule,
        RecordScreenModule,
        HelpCenterModule,
        RefreshSystemModule,
        ConfigurationModule,
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
