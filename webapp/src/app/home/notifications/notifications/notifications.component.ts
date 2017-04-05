import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { UIService } from '../../../ui/ui.service';

@Component({
  selector: 'app-notifications',
  template: `
    <app-card title="Notification Service" icon="comments-o">
      <div class="row">
        <div class="col-12 mb-3">
          <h4>Toasty</h4>
          <hr>
          <span *ngFor="let button of buttons">
            <button *ngIf="button.alertType === 'toasty'" class="btn btn-{{button.className}} mx-1" (click)="onClickService(button)">
            {{button.label}}
            </button>
          </span>
        </div>
        <div class="col-12">
          <h4>SweetAlert2</h4>
          <hr>
          <span *ngFor="let button of buttons">
            <button *ngIf="button.alertType === 'sal'" class="btn btn-{{button.className}} mx-1" (click)="onClickService(button)">
            {{button.label}}
            </button>
          </span>
        </div>
      </div>
    </app-card>
  `,
  styles: []
})
export class NotificationsComponent {

  public buttons = [
    { alertType: 'toasty', label: 'Success', type: 'success', className: 'success' },
    { alertType: 'toasty', label: 'Warning', type: 'warning', className: 'warning' },
    { alertType: 'toasty', label: 'Wait', type: 'wait', className: 'primary' },
    { alertType: 'toasty', label: 'Info', type: 'info', className: 'info' },
    { alertType: 'toasty', label: 'Error', type: 'error', className: 'danger' },
    { alertType: 'sal', label: 'Success', type: 'success', className: 'success' },
    { alertType: 'sal', label: 'Warning', type: 'warning', className: 'warning' },
    { alertType: 'sal', label: 'Question', type: 'question', className: 'primary' },
    { alertType: 'sal', label: 'Info', type: 'info', className: 'info' },
    { alertType: 'sal', label: 'Error', type: 'error', className: 'danger' },
  ];

  static getPayload(button) {
    switch (button.alertType) {
      case 'toasty':
        return {
          type: button.type,
          title: button.label,
          msg: `You clicked the ${button.type} button`,
        };
      case 'sal':
        return {
          type: button.type,
          title: button.label,
          text: `You clicked the ${button.type} button`,
          confirmButtonClass: `btn btn-lg btn-${button.className}`
        };
    }

  }

  onClickService(button) {
    switch (button.alertType) {
      case 'toasty':
        return this.uiService.toast(NotificationsComponent.getPayload(button));
      case 'sal':
        return this.uiService.alert(NotificationsComponent.getPayload(button));

    }
  }

  constructor(
    private uiService: UIService,
  ) { }
}
