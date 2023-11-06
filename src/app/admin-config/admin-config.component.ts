import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-config',
  template: `
    <nz-demo-menu-inline [select]="select"></nz-demo-menu-inline>
    <p>Config</p>
  `,  styleUrls: ['./admin-config.component.less']
})
export class AdminConfigComponent {
  select = 'config';

}
