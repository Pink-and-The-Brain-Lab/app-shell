import { TestBed } from '@angular/core/testing';
import { AuthdGuard } from './authguard.guard';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

describe('AuthdGuard', () => {
  let guard: AuthdGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthdGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should can activate', () => {
    const authService = TestBed.inject(AuthService);
    const authServiceSpy = spyOn(authService, 'isLoggedIn').and.returnValue(true);
    const canActivate = guard.canActivate();
    expect(authServiceSpy).toHaveBeenCalled();
    expect(canActivate).toBeTrue();
  });

  it('should can activate child', () => {
    const authService = TestBed.inject(AuthService);
    const authServiceSpy = spyOn(authService, 'isLoggedIn').and.returnValue(true);
    const canActivateChild = guard.canActivateChild();
    expect(authServiceSpy).toHaveBeenCalled();
    expect(canActivateChild).toBeTrue();
  });

  it('should redirect to login', () => {
    const authService = TestBed.inject(AuthService);
    const authServiceSpy = spyOn(authService, 'isLoggedIn').and.returnValue(false);
    const router = TestBed.inject(Router);
    const routerSpy = spyOn(router, 'navigate');
    guard['isLoggedIn']();
    expect(authServiceSpy).toHaveBeenCalled();
    expect(routerSpy).toHaveBeenCalledWith(['/login']);
  });
});
