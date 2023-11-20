import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RadioButtomModule } from '@app/_cdk/components/radio-buttom/radio-buttom.module';
import { TimeoutOptionComponent } from './timeout-option.component';

describe('TimeoutOptionComponent', () => {
  let component: TimeoutOptionComponent;
  let fixture: ComponentFixture<TimeoutOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimeoutOptionComponent ],
      imports: [
        RadioButtomModule,
        FormsModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimeoutOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should change option', () => {
    component.getSelectedOption('1 hour');
    expect(component.selectedOption).toBe('1 hour');
  });
});
