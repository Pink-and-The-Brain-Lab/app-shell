import { Component } from '@angular/core';
import { AuthService } from './shared/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'millez';
  toogleActionsBar = false;
  isLoggedIn = false;

  constructor(
    private authService: AuthService
  ) {
    this.isLoggedIn = this.authService.isLoggedIn();
  }

  actionsBarEvent() {
    this.toogleActionsBar = !this.toogleActionsBar;
  }
}
