import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-planning',
  template: `
    <nz-demo-menu-inline [select]="select"></nz-demo-menu-inline>
    <p>Planning</p>
  `,  styleUrls: ['./admin-planning.component.less']
})
export class AdminPlanningComponent {
  select = 'plan';
}
