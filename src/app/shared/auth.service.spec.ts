import { TestBed } from '@angular/core/testing';
import { AuthService } from './auth.service';
import { LocalStorageManager } from 'millez-web-components/dist/components';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should check if is logged in', () => {
    const localStorageManager = TestBed.inject(LocalStorageManager);
    const localStorageManagerSpy = spyOn(localStorageManager, 'get').and.returnValue('123');
    const isLoggedIn = service.isLoggedIn();
    expect(localStorageManagerSpy).toHaveBeenCalled();
    expect(isLoggedIn).toBeTrue();
  });
});
