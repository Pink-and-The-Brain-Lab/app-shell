import { inject } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { TranslatePipe } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import { IHandleError } from './models/handle-error.interface';

export class HandleError implements IHandleError {
  public isLoading = false;
  private readonly _toast = inject(ToastrService);
  private readonly _translatePipe = inject(TranslatePipe);
  handleError(error: HttpErrorResponse) {
    this.isLoading = false;
    this._toast.error(this._translatePipe.transform(error.error.message));
  }
}
