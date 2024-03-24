import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserStatusOptionsComponent } from './user-status-options.component';
import { UserStatusBulletModule } from 'millez-web-components/dist/components';

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
