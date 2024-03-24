import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QuickMenuComponent } from './quick-menu.component';
import { ThemeOptionsModule } from './_shared/theme-options/theme-options.module';
import { TimeoutModule } from './_shared/timeout/timeout.module';
import { UserStatusModule } from './_shared/user-status/user-status.module';
import { AvatarModule, LogoModule, ToogleModule } from 'millez-web-components/dist/components';

describe('QuickMenuComponent', () => {
  let component: QuickMenuComponent;
  let fixture: ComponentFixture<QuickMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QuickMenuComponent],
      imports: [
        AvatarModule,
        LogoModule,
        ThemeOptionsModule,
        ToogleModule,
        UserStatusModule,
        TimeoutModule,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
