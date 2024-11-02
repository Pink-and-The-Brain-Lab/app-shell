import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { TooltipModule } from 'ng2-tooltip-directive';
import { PerfilIndicatorComponent } from './perfil-indicator.component';
import { TranslateModule, TranslatePipe } from '@ngx-translate/core';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { ToastrService } from 'ngx-toastr';
import TOASTR_SERVICE_MOCK from 'src/app/mocks/toastr-service.test.mock';
import { SocketService } from 'src/app/services/socket.service';
import { Subject, of, throwError } from 'rxjs';
import { NgxsModule, Store } from '@ngxs/store';
import { ProfileAction, ProfilesState } from 'millez-web-components/dist/components';
import { Router } from '@angular/router';
import { GenericCRUDService } from 'src/app/services/generic-crud.service';
import { ProfileModel } from './models/profile.model';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

const mockSocketService = {
    getProfiles: () => of({})
};

describe('PerfilIndicatorComponent', () => {
  let component: PerfilIndicatorComponent;
  let fixture: ComponentFixture<PerfilIndicatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    declarations: [PerfilIndicatorComponent],
    imports: [NoopAnimationsModule,
        RouterTestingModule.withRoutes([]),
        TranslateModule.forRoot(),
        NgxsModule.forRoot([
            ProfilesState
        ])],
    providers: [
        TranslatePipe,
        { provide: ToastrService, useValue: TOASTR_SERVICE_MOCK },
        { provide: SocketService, useValue: mockSocketService },
        provideHttpClient(withInterceptorsFromDi()),
        provideHttpClientTesting(),
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

  it('should call socket service and watch store changes', () => {
    const socket = TestBed.inject(SocketService);
    const socketSpy = spyOn(socket, 'getProfiles');
    const store = TestBed.inject(Store);
    const mock: any = { id: '123' };
    store.dispatch( new ProfileAction([mock]) )
    component.ngOnInit();
    component.profiles$.subscribe(
        response => {
            expect(response[0].id).toBe('123')
        }
    );
    expect(socketSpy).toHaveBeenCalled();
  });

  it('should navigate to create new profile', () => {
    const router = TestBed.inject(Router);
    const spy = spyOn(router, 'navigate');
    component.createProfile();
    expect(spy).toHaveBeenCalledWith(['/new-profile']);
  });

  it('should change profile', () => {
    const service = TestBed.inject(GenericCRUDService);
    const spy = spyOn(service, 'genericPost').and.returnValue(of({}));
    component.changeProfile('123');
    expect(spy).toHaveBeenCalled();
  });

  it('should change profile and get an error', () => {
    const service = TestBed.inject(GenericCRUDService);
    const spy = spyOn(service, 'genericPost').and.returnValue(throwError(() => ({error: {message: ''}})));
    component.changeProfile('123');
    expect(spy).toHaveBeenCalled();
  });

  it('should check if profile was validated and do not show warning toastr', () => {
    const mock: any = {
        selected: true,
        validated: true,
    };
    component.profiles.push(new ProfileModel(mock));
    const service = TestBed.inject(ToastrService);
    const spy = spyOn(service, 'clear');
    component['checkIfProfileNeedValidation']();
    expect(spy).toHaveBeenCalled();
  });

  it('should check if profile was validated and show warning toastr', () => {
    const mock: any = {
        selected: true,
        validated: false,
    };
    const mockOnTap: any = { onTap: new Subject() };
    component.profiles.push(new ProfileModel(mock));
    const router = TestBed.inject(Router);
    const spyRouter = spyOn(router, 'navigate');
    const service = TestBed.inject(ToastrService);
    const spy = spyOn(service, 'warning').and.returnValue(mockOnTap)
    component['checkIfProfileNeedValidation']();
    mockOnTap.onTap.next()
    expect(spy).toHaveBeenCalled();
    expect(spyRouter).toHaveBeenCalledWith(['/new-profile/choose-phone-number']);
  });
});
