import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserStatusBulletModule } from '@app/_cdk/components/user-status-bullet/user-status-bullet.module';
import { PopoverModule } from '@app/_cdk/directives/popover/popover.module';
import { UserStatusOptionsModule } from './_shared/user-status-options/user-status-options.module';
import { UserStatusComponent } from './user-status.component';

describe('UserStatusComponent', () => {
  let component: UserStatusComponent;
  let fixture: ComponentFixture<UserStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserStatusComponent ],
      imports: [
        UserStatusBulletModule,
        UserStatusOptionsModule,
        PopoverModule,
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.controlStatusOptions).toBeFalsy();
  });

  it('shoud show options', () => {
    component.showStatusOptions();
    expect(component.controlStatusOptions).toBeTruthy();
  });

  it('should close options', () => {
    component.closeStatusOptions();
    expect(component.controlStatusOptions).toBeFalsy();
  });
});
