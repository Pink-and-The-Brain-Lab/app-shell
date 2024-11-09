import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RefreshSystemComponent } from './refresh-system.component';
import { TooltipModule } from 'millez-web-components/dist/components';

describe('RefreshSystemComponent', () => {
  let component: RefreshSystemComponent;
  let fixture: ComponentFixture<RefreshSystemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RefreshSystemComponent ],
      imports: [
        TooltipModule,
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
