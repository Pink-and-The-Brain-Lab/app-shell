import { Injectable } from '@angular/core';
import { LocalStorageManager } from 'millez-components-lib/components';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn() {
    return !!LocalStorageManager.get<string>('token');
  }
}
