import { Component } from '@angular/core';
import {FormControl, FormGroup, NonNullableFormBuilder, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {DataService} from "../data.service";

@Component({
  selector: 'app-create-administrateur',
  template: `
      <div class="main-page">
          <nz-demo-menu-inline class="menu-page" [select]="select"></nz-demo-menu-inline>
          <div class="form-page">
              <form nz-form [formGroup]="validateForm" (ngSubmit)="submitForm()">
                  <nz-form-item>
                      <nz-form-label [nzSpan]="7" nzRequired>Nom</nz-form-label>
                      <nz-form-control [nzSpan]="12" nzHasFeedback nzValidatingTip="Validating..."
                                       [nzErrorTip]="userErrorTpl">
                          <input nz-input formControlName="nom"
                                 placeholder="Saisir votre nom"/>
                          <ng-template #userErrorTpl let-control>
                              <ng-container *ngIf="control.hasError('required')">Saisir votre nom!</ng-container>
                          </ng-template>
                      </nz-form-control>
                  </nz-form-item>
                  <nz-form-item>
                      <nz-form-label [nzSpan]="7" nzRequired>Prenom</nz-form-label>
                      <nz-form-control [nzSpan]="12" nzHasFeedback>
                          <input nz-input formControlName="prenom"
                                 placeholder="Saisir votre prenom"/>
                      </nz-form-control>
                  </nz-form-item>
                  <nz-form-item>
                      <nz-form-label [nzSpan]="7" nzRequired>Email</nz-form-label>
                      <nz-form-control [nzSpan]="12" nzHasFeedback nzValidatingTip="Validating..."
                                       [nzErrorTip]="userErrorTpl">
                          <input nz-input formControlName="mail"/>
                          <ng-template #userErrorTpl let-control>
                              <ng-container *ngIf="control.hasError('required')">Saisir votre mail!</ng-container>
                          </ng-template>
                      </nz-form-control>
                  </nz-form-item>
                  <nz-form-item>
                      <nz-form-label [nzSpan]="7" nzRequired>Telephone</nz-form-label>
                      <nz-form-control [nzSpan]="12" nzHasFeedback nzValidatingTip="Validating..."
                                       [nzErrorTip]="userErrorTpl">
                          <input nz-input formControlName="telephone"
                                 placeholder="Saisir votre telephone"/>
                          <ng-template #userErrorTpl let-control>
                              <ng-container *ngIf="control.hasError('required')">Saisir votre telephone!</ng-container>
                          </ng-template>
                      </nz-form-control>
                  </nz-form-item>
                  <nz-form-item>
                      <nz-form-label [nzSpan]="7" nzRequired>Password</nz-form-label>
                      <nz-form-control [nzSpan]="12" nzHasFeedback nzValidatingTip="Validating..."
                                       [nzErrorTip]="userErrorTpl">
                          <input nz-input formControlName="password"
                                 placeholder="Saisir votre password"/>
                          <ng-template #userErrorTpl let-control>
                              <ng-container *ngIf="control.hasError('required')">Saisir votre password!</ng-container>
                          </ng-template>
                      </nz-form-control>
                  </nz-form-item>
                  <nz-form-item>
                      <nz-form-control [nzOffset]="7" [nzSpan]="12">
                          <div class="button-grp">
                              <button nz-button nzType="primary">Submit</button>
                              <button nz-button (click)="resetForm($event)">Reset</button>
                          </div>
                      </nz-form-control>
                  </nz-form-item>
              </form>
          </div>
      </div>
  `,  styleUrls: ['./create-administrateur.component.less']
})
export class CreateAdministrateurComponent {
  select = 'createAdministrateur';
  validateForm: FormGroup<{
    nom: FormControl<string>;
    prenom: FormControl<string>;
    mail: FormControl<string>;
    telephone: FormControl<string>;
    password: FormControl<string>;
  }>;

  submitForm(): void {
    const editAdministrateurData = {
      ...this.validateForm.value
    }
    //console.log('---------------------',editAdministrateurData);

    this.dataService.createAdministrateur(editAdministrateurData).subscribe((response) => {
      this.Router.navigate(['reservation-success']);
     // console.log('Update administrateur request successful:', response);
    },
      (errInfo: any) => {
        //console.error("-----------------error",errInfo);
        this.Router.navigate(['reservation-failed']);
      });
  }

  resetForm(e: MouseEvent): void {
    e.preventDefault();
    this.validateForm?.reset();
  }

  constructor(private route: ActivatedRoute, private Router: Router, private dataService: DataService, private fb: NonNullableFormBuilder) {
    this.validateForm = this.fb.group({
      nom: ['', [Validators.required]],
      prenom: ['', [Validators.required]],
      mail: ['', [Validators.email, Validators.required]],
      telephone: ['', [Validators.minLength(10), Validators.maxLength(10), Validators.required]],
      password: ['', [Validators.required]]
    });
  };
}
