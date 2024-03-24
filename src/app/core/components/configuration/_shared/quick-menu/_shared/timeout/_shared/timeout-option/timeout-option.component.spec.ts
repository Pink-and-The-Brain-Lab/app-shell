import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { TimeoutOptionComponent } from './timeout-option.component';
import { RadioButtonModule } from 'millez-web-components/dist/components';

describe('TimeoutOptionComponent', () => {
  let component: TimeoutOptionComponent;
  let fixture: ComponentFixture<TimeoutOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimeoutOptionComponent ],
      imports: [
        RadioButtonModule,
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
