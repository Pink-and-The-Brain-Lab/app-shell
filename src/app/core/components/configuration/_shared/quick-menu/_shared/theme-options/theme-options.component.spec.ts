import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ThemeOptionsComponent } from './theme-options.component';
import { ThemeOptionModule } from './_shared/theme-option/theme-option.module';
import { PopoverModule } from 'millez-web-components/dist/components';

describe('ThemeOptionsComponent', () => {
  let component: ThemeOptionsComponent;
  let fixture: ComponentFixture<ThemeOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThemeOptionsComponent ],
      imports: [
        ThemeOptionModule,
        PopoverModule,
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemeOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show theme options', () => {
    component.showThemeOptions();
    expect(component.controlThemeOptions).toBeTruthy();
  });

  it('should close theme options', () => {
    component.closeThemeOptions();
    expect(component.controlThemeOptions).toBeFalsy();
  });
});
