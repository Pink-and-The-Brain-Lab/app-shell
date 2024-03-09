import { IProfile } from "millez-web-components/dist/components";
import { API_PATH } from "src/app/configurations/api-path";

export class ProfileModel {
    id = '';
    userId = '';
    email = '';
    color = '';
    image = '';
    chosenName = '';
    profileName = '';
    profileVisibility = '';
    profileTheme = '';
    logoutTime = '';
    dateFormat = '';
    validated = false;
    selected = false;
    language = '';
    createdat = 0;

    constructor (profile: IProfile) {
        this.id = profile.id;
        this.userId = profile.userId;
        this.email = profile.email;
        this.color = profile.color;
        this.image = profile.image;
        this.chosenName = profile.chosenName;
        this.profileName = profile.profileName;
        this.profileVisibility = profile.profileVisibility;
        this.profileTheme = profile.profileTheme;
        this.logoutTime = profile.logoutTime;
        this.dateFormat = profile.dateFormat;
        this.validated = profile.validated,
        this.selected = profile.selected,
        this.language = profile.language;
        this.createdat = profile.createdat;
    }

    get profileAvatar(): string {
        return this.image ? `${API_PATH.getProfileAvatar}?id=${this.image}` : '/assets/images/_temp-perfil.jpeg';
    }

}