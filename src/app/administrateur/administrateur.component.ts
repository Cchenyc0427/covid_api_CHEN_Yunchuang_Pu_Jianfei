import { Component } from '@angular/core';

@Component({
  selector: 'app-administrateur',
  template: `
      <app-menu-admin [select]="select"></app-menu-admin>
  `,
  styleUrls: ['./administrateur.component.less']
})
export class AdministrateurComponent {
  select = 'none';
}
