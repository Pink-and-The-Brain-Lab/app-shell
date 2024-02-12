import { Component } from '@angular/core';
import { UserStatus } from 'millez-web-components/dist/components/lib/user-status-bullet/models/user-status';

interface IStatusOptions {
  label: string;
  status: UserStatus;
}

@Component({
  selector: 'app-user-status-options',
  templateUrl: './user-status-options.component.html',
  styleUrls: ['./user-status-options.component.scss']
})
export class UserStatusOptionsComponent {

  statusOptions: IStatusOptions[] = [{
    label: 'Offline',
    status: 'offline',
  }, {
    label: 'Online',
    status: 'online',
  }, {
    label: 'Busy',
    status: 'busy',
  }, {
    label: 'Away',
    status: 'away'
  }];

}
