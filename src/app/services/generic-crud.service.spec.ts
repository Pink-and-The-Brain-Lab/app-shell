import { TestBed, fakeAsync } from '@angular/core/testing';
import { GenericCRUDService } from './generic-crud.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { API_PATH } from '../configurations/api-path';

describe('GenericCRUDService', () => {
  let service: GenericCRUDService;
  let httpController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [GenericCRUDService],
    });
    service = TestBed.inject(GenericCRUDService);
    httpController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call get method', fakeAsync(() => {
    const responseMock = { success: true };
    service.genericGet(`${API_PATH.getProfiles}`).subscribe({
      next: (response) => {
        expect(response).toEqual(responseMock);
      },
    });

    const req = httpController.expectOne(
      `${API_PATH.getProfiles}`
    );
    expect(req.request.method).toEqual('GET');
    req.flush(responseMock);
  }));

    it('should call post method', fakeAsync(() => {
      const responseMock = { success: true };
      service.genericPost(`${API_PATH.getProfiles}`).subscribe({
        next: response => {
          expect(response).toEqual(responseMock);
        }
      });

      const req = httpController.expectOne(`${API_PATH.getProfiles}`);
      expect(req.request.method).toEqual('POST');
      req.flush(responseMock);
    }));

    it('should call put method', fakeAsync(() => {
      const responseMock = { success: true };
      service.genericPut(`${API_PATH.getProfiles}`).subscribe({
        next: response => {
          expect(response).toEqual(responseMock);
        }
      });

      const req = httpController.expectOne(`${API_PATH.getProfiles}`);
      expect(req.request.method).toEqual('PUT');
      req.flush(responseMock);
    }));

    it('should call patch method', fakeAsync(() => {
      const responseMock = { success: true };
      service.genericPatch(`${API_PATH.getProfiles}`).subscribe({
        next: response => {
          expect(response).toEqual(responseMock);
        }
      });

      const req = httpController.expectOne(`${API_PATH.getProfiles}`);
      expect(req.request.method).toEqual('PATCH');
      req.flush(responseMock);
    }));

    it('should call delete method', fakeAsync(() => {
      const responseMock = { success: true };
      service.genericDelete(`${API_PATH.getProfiles}`).subscribe({
        next: response => {
          expect(response).toEqual(responseMock);
        }
      });

      const req = httpController.expectOne(`${API_PATH.getProfiles}`);
      expect(req.request.method).toEqual('DELETE');
      req.flush(responseMock);
    }));
});
