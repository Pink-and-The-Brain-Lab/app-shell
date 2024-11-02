import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { TooltipModule } from 'ng2-tooltip-directive';
import { RefreshSystemComponent } from './refresh-system.component';

describe('RefreshSystemComponent', () => {
  let component: RefreshSystemComponent;
  let fixture: ComponentFixture<RefreshSystemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RefreshSystemComponent ],
      imports: [
        // TooltipModule,
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RefreshSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
