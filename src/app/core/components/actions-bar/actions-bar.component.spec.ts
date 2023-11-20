import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AvatarModule } from '@app/_cdk/components/avatar/avatar.module';
import { ActionsBarComponent } from './actions-bar.component';
import { NavigationBarModule } from './_shared/navigation-bar/navigation-bar.module';

describe('ActionsBarComponent', () => {
  let component: ActionsBarComponent;
  let fixture: ComponentFixture<ActionsBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActionsBarComponent ],
      imports: [
        AvatarModule,
        NavigationBarModule,
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionsBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toogle actions bar', () => {
    jest.spyOn(component.actionsBarEvent, 'emit');
    component.toogleActionsBar();
    expect(component.actionsBarControl).toBeTruthy();
    expect(component.actionsBarEvent.emit).toHaveBeenCalled();
  });
});
