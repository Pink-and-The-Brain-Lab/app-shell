import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-actions-bar',
  templateUrl: './actions-bar.component.html',
  styleUrls: ['./actions-bar.component.scss']
})
export class ActionsBarComponent {
  @Output() actionsBarEvent = new EventEmitter<void>();

  actionsBarControl = false;

  toogleActionsBar() {
    this.actionsBarControl = !this.actionsBarControl;
    this.actionsBarEvent.emit();
  }

}
