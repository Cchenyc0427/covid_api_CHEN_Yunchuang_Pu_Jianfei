import { Component } from '@angular/core';

@Component({
  selector: 'app-super-admin',
  template: `
    <nz-demo-menu-inline [select]="select"></nz-demo-menu-inline>
  `,
  styleUrls: ['./super-admin.component.less']
})
export class SuperAdminComponent {
  select = 'none';
}
