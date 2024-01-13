import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-menu-admin',
  template: `
      <ul nz-menu nzMode="inline">
          <li nz-menu-item nzTitle="medicine" [nzSelected]="select === 'medicine'">
              Medicine
              <a [routerLink]="['/', 'medicine']"></a>
          </li>
          <li nz-menu-item nzTitle="Create medicine" [nzSelected]="select === 'createMedicine'">
              Create Medicine
              <a [routerLink]="['/', 'create-medicine']"></a>
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
export class MenuAdminComponent {
  @Input() select!: string;
}
