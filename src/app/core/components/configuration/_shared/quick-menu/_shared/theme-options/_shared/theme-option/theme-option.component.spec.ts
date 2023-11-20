import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RadioButtomModule } from '@app/_cdk/components/radio-buttom/radio-buttom.module';
import { ThemeOptionComponent } from './theme-option.component';

describe('ThemeOptionComponent', () => {
  let component: ThemeOptionComponent;
  let fixture: ComponentFixture<ThemeOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThemeOptionComponent ],
      imports: [
        RadioButtomModule,
        FormsModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThemeOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should change option', () => {
    component.getSelectedOption('Light');
    expect(component.selectedOption).toBe('Light');
  });
});
