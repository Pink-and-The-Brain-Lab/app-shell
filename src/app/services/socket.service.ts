import { Injectable, inject } from "@angular/core";
import { Store } from "@ngxs/store";
import { IProfile, ProfileAction } from "millez-web-components/dist/components";
import { Socket } from "ngx-socket-io";
import { SetProfilePreferencesService } from "./set-profile-preferences.service";

@Injectable({ providedIn: "root" })
export class SocketService {
   
  private readonly socket = inject(Socket);
  private readonly store = inject(Store);
  private readonly setProfilePreferencesService = inject(SetProfilePreferencesService);

  getProfiles() {
    this.socket.fromEvent<IProfile[]>('profiles')
      .subscribe(
        response => {
            this.store.dispatch( new ProfileAction(response) );
            const selectedProfile = response.filter(profile => profile.selected);
            if (!selectedProfile.length) return;
            this.setProfilePreferencesService.setPreferences(selectedProfile[0]);
        }
      );
  }
}
