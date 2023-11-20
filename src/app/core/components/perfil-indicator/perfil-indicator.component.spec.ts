import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TooltipModule } from 'ng2-tooltip-directive';
import { PerfilIndicatorComponent } from './perfil-indicator.component';

describe('PerfilIndicatorComponent', () => {
  let component: PerfilIndicatorComponent;
  let fixture: ComponentFixture<PerfilIndicatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilIndicatorComponent ],
      imports: [
        TooltipModule,
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
