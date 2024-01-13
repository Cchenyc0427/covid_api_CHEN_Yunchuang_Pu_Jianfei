import {Component} from '@angular/core';

import {NzButtonSize} from 'ng-zorro-antd/button';

@Component({
  selector: 'app-home-page',
  template: `
      <div [className]="'button-grp'">
          <button (click)="handleOnClickSuperAdmin()" [className]="'super-admin-button'" nz-button [nzSize]="'large'" nzType="default"
                  nzShape="round">
              Super-Admin Login
          </button>
          <button (click)="handleOnClickAdminstrateur()" [className]="'administrateur-button'" nz-button [nzSize]="'large'" nzType="default" nzShape="round">
              Administrateur Login
          </button>
          <button (click)="handleOnClickRDV()" [className]="'rdv-button'" nz-button [nzSize]="'large'" nzType="default" nzShape="round">Créer un
              RDV
          </button>
      </div>
  `,
  styles: [
    `
      [nz-button] {
        margin-right: 8px;
        margin-bottom: 12px;
      }

      [nz-button]:hover {
        cursor: pointer;
      }

      .button-grp {
        position: absolute;
        width: 100%;
        top: 50%;
        transform: translate(0, -50%);
        display: flex;
        justify-content: space-around;
      }
    `],
})

export class HomePageComponent {
  handleOnClickSuperAdmin = () => {
    window.location.href = "./super-admin";
  }

  handleOnClickAdminstrateur = () => {
    window.location.href = "./administrateur";
  }

  handleOnClickMedicine = () => {
    window.location.href = "./medicine";
  }

  handleOnClickRDV = () => {
    window.location.href = "./trouver-center";
  }
}
