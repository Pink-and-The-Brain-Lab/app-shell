import { Injectable, inject } from '@angular/core';
import { LocalStorageManager } from 'millez-components-lib/components';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly localStorageManager = inject(LocalStorageManager)

  isLoggedIn() {
    return !!this.localStorageManager.get<string>('token');
  }
}
