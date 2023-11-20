import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserStatusBulletModule } from '@app/_cdk/components/user-status-bullet/user-status-bullet.module';
import { UserStatusOptionsComponent } from './user-status-options.component';

describe('UserStatusOptionsComponent', () => {
  let component: UserStatusOptionsComponent;
  let fixture: ComponentFixture<UserStatusOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserStatusOptionsComponent ],
      imports: [ UserStatusBulletModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserStatusOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.statusOptions[0].label).toEqual('Offline');
    expect(component.statusOptions[0].status).toEqual('offline');
  });
});
