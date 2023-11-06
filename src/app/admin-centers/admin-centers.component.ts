import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-centers',
  template: `
    <nz-demo-menu-inline [select]="select"></nz-demo-menu-inline>
    <p>centers</p>
  `,
  styleUrls: ['./admin-centers.component.less']
})
export class AdminCentersComponent {
  select = 'centers';
}
