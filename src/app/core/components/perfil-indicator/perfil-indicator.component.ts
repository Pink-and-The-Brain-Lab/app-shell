import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil-indicator',
  templateUrl: './perfil-indicator.component.html',
  styleUrls: ['./perfil-indicator.component.scss']
})
export class PerfilIndicatorComponent {

  private readonly router = inject(Router);

  createPerfil() {
    this.router.navigate(['/new-profile']);
  }

}
