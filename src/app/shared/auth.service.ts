import { Injectable, inject } from '@angular/core';
import { LocalStorageManager, Storage } from 'millez-web-components/dist/components';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly localStorageManager = inject(LocalStorageManager)

  isLoggedIn() {
    return !!this.localStorageManager.get<string>(Storage.TOKEN);
  }
}
