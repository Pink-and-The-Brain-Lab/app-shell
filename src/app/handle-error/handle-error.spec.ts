import { HttpErrorResponse } from '@angular/common/http';
import { HandleError } from './handle-error';
import { ToastrService } from 'ngx-toastr';
import { TranslatePipe } from '@ngx-translate/core';
import { TestBed } from '@angular/core/testing';

describe('HandleError', () => {
  let handleError: HandleError;
  let toastrServiceSpy: jasmine.SpyObj<ToastrService>;
  let translatePipeSpy: jasmine.SpyObj<TranslatePipe>;

  beforeEach(() => {
    const toastrServiceSpyObj = jasmine.createSpyObj('ToastrService', ['error']);
    const translatePipeSpyObj = jasmine.createSpyObj('TranslatePipe', ['transform']);

    TestBed.configureTestingModule({
      providers: [
        HandleError,
        { provide: ToastrService, useValue: toastrServiceSpyObj },
        { provide: TranslatePipe, useValue: translatePipeSpyObj }
      ]
    });

    handleError = TestBed.inject(HandleError);
    toastrServiceSpy = TestBed.inject(ToastrService) as jasmine.SpyObj<ToastrService>;
    translatePipeSpy = TestBed.inject(TranslatePipe) as jasmine.SpyObj<TranslatePipe>;
  });

  it('should set isLoading to false and show error toast with translated message', () => {
    const errorResponse = new HttpErrorResponse({ error: { message: 'Test error message' } });
    const translatedErrorMessage = 'Translated error message';
    translatePipeSpy.transform.and.returnValue(translatedErrorMessage);
    handleError.handleError(errorResponse);
    expect(handleError.isLoading).toBeFalse();
    expect(toastrServiceSpy.error).toHaveBeenCalledWith(translatedErrorMessage);
    expect(translatePipeSpy.transform).toHaveBeenCalledWith('Test error message');
  });
});