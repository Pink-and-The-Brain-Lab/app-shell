import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TimeoutComponent } from './timeout.component';
import { TimeoutOptionModule } from './_shared/timeout-option/timeout-option.module';
import { PopoverModule } from 'millez-web-components/dist/components';

describe('TimeoutComponent', () => {
  let component: TimeoutComponent;
  let fixture: ComponentFixture<TimeoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimeoutComponent ],
      imports: [
        PopoverModule,
        TimeoutOptionModule,
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimeoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show timeout options', () => {
    component.showTimeoutOptions();
    expect(component.controlTimeoutptions).toBeTruthy();
  });

  it('should close timeout options', () => {
    component.closeTimeoutOptions();
    expect(component.controlTimeoutptions).toBeFalsy();
  });
});
