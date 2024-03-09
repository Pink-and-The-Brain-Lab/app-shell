import { HttpErrorResponse } from '@angular/common/http';
export interface IHandleError {
  handleError(error: HttpErrorResponse): void;
}
