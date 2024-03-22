import { ProfileModel } from "./profile.model";

describe('ProfileModel', () => {
  it('should create', () => {
    const mock: any = { id: '1223' }
    const profile = new ProfileModel(mock);
    expect(profile.id).toBe('1223');
    expect(profile.profileAvatar).toBe('/assets/images/_temp-perfil.jpeg');
  });

  it('should get profile avatar', () => {
    const mock: any = { id: '1223', image: 'abcd' }
    const profile = new ProfileModel(mock);
    expect(profile.profileAvatar).toBe('http://localhost:3003/profile-avatar?id=abcd');
  });
});
