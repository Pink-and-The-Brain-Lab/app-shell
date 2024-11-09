import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConfigurationComponent } from './configuration.component';
import { QuickMenuModule } from './_shared/quick-menu/quick-menu.module';
import { PopoverModule, TooltipModule } from 'millez-web-components/dist/components';

describe('ConfigurationComponent', () => {
  let component: ConfigurationComponent;
  let fixture: ComponentFixture<ConfigurationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigurationComponent ],
      imports: [
        TooltipModule,
        QuickMenuModule,
        PopoverModule,
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should open quick menu', () => {
    component.openQuickMenu();
    expect(component.quickMenuControl).toBeTruthy();
  });

  it('should close quick menu', () => {
    component.quickMenuControl = true;
    component.closeQuickMenu();
    expect(component.quickMenuControl).toBeFalsy();
  });
});
