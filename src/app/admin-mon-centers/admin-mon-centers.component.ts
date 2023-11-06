import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-mon-centers',
  template: `
    <nz-demo-menu-inline [select]="select"></nz-demo-menu-inline>
    <p>Mon Centers</p>
  `,
  styleUrls: ['./admin-mon-centers.component.less']
})
export class AdminMonCentersComponent {
  select = 'monCenters';
}
