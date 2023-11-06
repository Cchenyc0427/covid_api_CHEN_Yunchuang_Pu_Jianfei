import {Component, Input} from '@angular/core';


@Component({
  selector: 'nz-demo-menu-inline',
  template: `
    <ul nz-menu nzMode="inline">
      <li nz-menu-item nzTitle="Centers" [nzSelected]="select === 'centers'" >
        Centers
        <a [routerLink]="['/', 'admin-centers']"></a>
      </li>
      <li nz-menu-item nzTitle="Mon centers" [nzSelected]="select === 'monCenters'" >
        Mon centers
        <a [routerLink]="['/', 'admin-mon-centers']"></a>
      </li>
      <li nz-menu-item nzTitle="Planning" [nzSelected]="select === 'plan'" >
        Planning
        <a [routerLink]="['/', 'admin-planning']"></a>
      </li>
      <li nz-menu-item nzTitle="Config" [nzSelected]="select === 'config'" >
        Config
        <a [routerLink]="['/', 'admin-config']"></a>
      </li>
    </ul>
  `,
  styles: [
    `
      [nz-menu] {
        width: 240px;
      }
    `
  ]
})
export class MenuLeftComponent {
  @Input() select!: string;
}
