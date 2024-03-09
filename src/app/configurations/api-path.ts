import { environment } from "src/environments/environment";

export const API_PATH = {
    getProfiles: `${environment.baseUlrs.profile}/auth/profiles`,
    selectProfile: `${environment.baseUlrs.profile}/auth/select-profile`,
    getProfileAvatar: `${environment.baseUlrs.profile}/profile-avatar`,
};
