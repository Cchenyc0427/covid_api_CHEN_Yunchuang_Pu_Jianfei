import {Component} from '@angular/core';
import {FormControl, FormGroup, NonNullableFormBuilder, Validators} from "@angular/forms";
import {administrateurData} from "../admin-administrateur/admin-administrateur.component";
import {ActivatedRoute, Router} from "@angular/router";
import {DataService} from "../data.service";

@Component({
  selector: 'app-edit-adminstrateur',
  template: `
      <form nz-form [formGroup]="validateForm" (ngSubmit)="submitForm()">
          <nz-form-item>
              <nz-form-label [nzSpan]="7" nzRequired>Nom</nz-form-label>
              <nz-form-control [nzSpan]="12" nzHasFeedback nzValidatingTip="Validating..." [nzErrorTip]="userErrorTpl">
                  <input nz-input [ngModel]="this.administrateurData?.nom" formControlName="nom"
                         placeholder="Saisir votre nom"/>
                  <ng-template #userErrorTpl let-control>
                      <ng-container *ngIf="control.hasError('required')">Saisir votre nom!</ng-container>
                  </ng-template>
              </nz-form-control>
          </nz-form-item>
          <nz-form-item>
              <nz-form-label [nzSpan]="7" nzRequired>Prenom</nz-form-label>
              <nz-form-control [nzSpan]="12" nzHasFeedback>
                  <input nz-input [ngModel]="this.administrateurData?.prenom" formControlName="prenom" 
                         placeholder="Saisir votre prenom"/>
              </nz-form-control>
          </nz-form-item>
          <nz-form-item>
              <nz-form-label [nzSpan]="7" nzRequired>Email</nz-form-label>
              <nz-form-control [nzSpan]="12" nzHasFeedback nzValidatingTip="Validating..." [nzErrorTip]="userErrorTpl">
                  <input nz-input [ngModel]="this.administrateurData?.mail" formControlName="mail"/>
                  <ng-template #userErrorTpl let-control>
                      <ng-container *ngIf="control.hasError('required')">Saisir votre mail!</ng-container>
                  </ng-template>
              </nz-form-control>
          </nz-form-item>
          <nz-form-item>
              <nz-form-label [nzSpan]="7" nzRequired>Telephone</nz-form-label>
              <nz-form-control [nzSpan]="12" nzHasFeedback nzValidatingTip="Validating..." [nzErrorTip]="userErrorTpl">
                  <input nz-input [ngModel]="this.administrateurData?.telephone" formControlName="telephone"
                         placeholder="Saisir votre telephone"/>
                  <ng-template #userErrorTpl let-control>
                      <ng-container *ngIf="control.hasError('required')">Saisir votre telephone!</ng-container>
                  </ng-template>
              </nz-form-control>
          </nz-form-item>
          <nz-form-item>
              <nz-form-label [nzSpan]="7" nzRequired>Password</nz-form-label>
              <nz-form-control [nzSpan]="12" nzHasFeedback nzValidatingTip="Validating..." [nzErrorTip]="userErrorTpl">
                  <input nz-input [ngModel]="this.administrateurData?.password" formControlName="password"
                         placeholder="Saisir votre password"/>
                  <ng-template #userErrorTpl let-control>
                      <ng-container *ngIf="control.hasError('required')">Saisir votre password!</ng-container>
                  </ng-template>
              </nz-form-control>
          </nz-form-item>
          <nz-form-item>
              <nz-form-control [nzOffset]="7" [nzSpan]="12">
                  <button nz-button nzType="primary">Submit</button>
                  <button nz-button (click)="resetForm($event)">Reset</button>
              </nz-form-control>
          </nz-form-item>
      </form>
  `,
  styleUrls: ['./edit-adminstrateur.component.less']
})
export class EditAdminstrateurComponent {
  administrateurId: string = '';
  administrateurData?: administrateurData;

  validateForm: FormGroup<{
    nom: FormControl<string>;
    prenom: FormControl<string>;
    mail: FormControl<string>;
    telephone: FormControl<string>;
    password: FormControl<string>;
  }>;

  submitForm(): void {
    const editAdministrateurData = {
      "administrateurId": this.administrateurId,
      ...this.validateForm.value
    }
    // console.log('---------------------',editAdministrateurData);

    this.dataService.updateAdministrateur(editAdministrateurData).subscribe((response) => {
      this.Router.navigate(['reservation-success']);
      console.log('Update administrateur request successful:', response);
    },
      (errInfo: any) => {
        console.error(errInfo);
        this.Router.navigate(['reservation-failed']);
      });
  }

  resetForm(e: MouseEvent): void {
    e.preventDefault();
    this.validateForm?.reset();
  }

  constructor(private route: ActivatedRoute, private Router: Router, private dataService: DataService, private fb: NonNullableFormBuilder) {
    this.administrateurId = this.route.snapshot.paramMap.get('id') || '';
    // console.log('---------------------------',this.administrateurId, typeof this.administrateurId);
    this.dataService.currentMessage.subscribe(message => {
      message.forEach((item: any) => {
        if (item.administrateurId === parseInt(this.administrateurId)) {
          // console.log(item.nom);
          this.administrateurData = item;
        }
      })
    });
    // console.log("-------------------------", this.administrateurData);
    this.validateForm = this.fb.group({
      nom: ['', [Validators.required]],
      prenom: ['', [Validators.required]],
      mail: ['', [Validators.email, Validators.required]],
      telephone: ['', [Validators.minLength(10), Validators.maxLength(10), Validators.required]],
      password: ['', [Validators.required]]
    });
  }
}
