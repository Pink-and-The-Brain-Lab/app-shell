import { IndividualConfig } from 'ngx-toastr';
import { of } from 'rxjs';

const TOASTR_SERVICE_MOCK = {
  success: (
    message?: string,
    title?: string,
    override?: Partial<IndividualConfig>
  ) => {},
  error: (
    message?: string,
    title?: string,
    override?: Partial<IndividualConfig>
  ) => {},
  warning: (
    message?: string,
    title?: string,
    override?: Partial<IndividualConfig>
  ) => ({
    onTap: of()
  }),
  clear: () => {},
};

export default TOASTR_SERVICE_MOCK;
