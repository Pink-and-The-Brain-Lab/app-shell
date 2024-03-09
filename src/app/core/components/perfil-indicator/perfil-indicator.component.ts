import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Select } from '@ngxs/store';
import { IProfile, ProfilesState } from 'millez-web-components/dist/components';
import { Observable, Subject, takeUntil } from 'rxjs';
import { API_PATH } from 'src/app/configurations/api-path';
import { ProfileModel } from './models/profile.model';
import { GenericCRUDService } from 'src/app/services/generic-crud.service';
import { ISelectProfile } from './interfaces/select-profile.interface';
import { ISelectProfileResponse } from './interfaces/select-profile-response.interface';
import { HandleError } from 'src/app/handle-error/handle-error';
import { SocketService } from 'src/app/services/socket.service';

@Component({
  selector: 'app-perfil-indicator',
  templateUrl: './perfil-indicator.component.html',
  styleUrls: ['./perfil-indicator.component.scss']
})
export class PerfilIndicatorComponent extends HandleError implements OnDestroy, OnInit {

  @Select(ProfilesState)
  profiles$!: Observable<IProfile[]>;
  private destroy$ = new Subject<boolean>();
  private readonly router = inject(Router);
  private readonly genericCRUDService = inject(GenericCRUDService);
  private readonly socketService = inject(SocketService);
  profiles: ProfileModel[] = [];
  imageBaseUrl = API_PATH.getProfileAvatar;

  ngOnInit(): void {
    this.profiles$
      .pipe(
        takeUntil(this.destroy$)
      )
      .subscribe(
        response => this.profiles = response.map(item => new ProfileModel(item))
      );

      this.socketService.getProfiles();
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  createProfile() {
    this.router.navigate(['/new-profile']);
  }

  changeProfile(profileId: string) {
    this.genericCRUDService
      .genericPost<ISelectProfileResponse, ISelectProfile>(API_PATH.selectProfile, { profileId })
        .pipe(
          takeUntil(this.destroy$)
        )
        .subscribe({
          error: _error => super.handleError(_error),
        })
  }

}
