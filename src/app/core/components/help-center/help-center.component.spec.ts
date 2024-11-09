import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HelpCenterComponent } from './help-center.component';
import { TooltipModule } from 'millez-web-components/dist/components';

describe('HelpCenterComponent', () => {
  let component: HelpCenterComponent;
  let fixture: ComponentFixture<HelpCenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelpCenterComponent ],
      imports: [
        TooltipModule,
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
