import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TranslateModule, TranslatePipe } from '@ngx-translate/core';
import { NgxsModule, Store } from '@ngxs/store';
import { SocketService } from './socket.service';
import { Socket, SocketIoModule } from 'ngx-socket-io';
import { of } from 'rxjs';
import { SetProfilePreferencesService } from './set-profile-preferences.service';

describe('SocketService', () => {
  let service: SocketService;
  let httpController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        TranslateModule.forRoot(),
        NgxsModule.forRoot([]),
        SocketIoModule.forRoot({ url: '' })
      ],
      providers: [
        TranslatePipe,
        SocketService
      ],
    });
    service = TestBed.inject(SocketService);
    httpController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should listen for profile changes and get no profiles', () => {
    const socket = TestBed.inject(Socket);
    const socketSpy = spyOn(socket, 'fromEvent').and.returnValue(of([]));
    const store = TestBed.inject(Store);
    const storeSpy = spyOn(store, 'dispatch');
    service.getProfiles();
    expect(socketSpy).toHaveBeenCalledWith('profiles');
    expect(storeSpy).toHaveBeenCalled();
  });

  it('should listen for profile changes and get profiles', () => {
    const socket = TestBed.inject(Socket);
    const socketSpy = spyOn(socket, 'fromEvent').and.returnValue(of([{ selected: true }]));
    const setProfilePreferencesService = TestBed.inject(SetProfilePreferencesService);
    const setProfilePreferencesServiceSpy = spyOn(setProfilePreferencesService, 'setPreferences');
    service.getProfiles();
    expect(socketSpy).toHaveBeenCalledWith('profiles');
    expect(setProfilePreferencesServiceSpy).toHaveBeenCalled();
  });
});
