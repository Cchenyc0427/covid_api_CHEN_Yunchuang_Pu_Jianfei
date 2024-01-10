import {Component, Input} from '@angular/core';


@Component({
  selector: ' nz-demo-menu-inline',
  template: `
    <ul nz-menu nzMode="inline">
      <li nz-menu-item nzTitle="Centers" [nzSelected]="select === 'centers'" >
        Centers
        <a [routerLink]="['/', 'admin-centers']"></a>
      </li>
      <li nz-menu-item nzTitle="Create centers" [nzSelected]="select === 'createCenter'" >
        Create Center
        <a [routerLink]="['/', 'create-center']"></a>
      </li>
      <li nz-menu-item nzTitle="Administrateur" [nzSelected]="select === 'administrateur'" >
        Administrateur
        <a [routerLink]="['/', 'admin-administrateur']"></a>
      </li>
      <li nz-menu-item nzTitle="Create Administrateur" [nzSelected]="select === 'createAdministrateur'" >
        Create Administrateur
        <a [routerLink]="['/', 'create-administrateur']"></a>
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
