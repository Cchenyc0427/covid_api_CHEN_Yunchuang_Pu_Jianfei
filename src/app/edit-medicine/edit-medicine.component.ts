import { Component } from '@angular/core';
import {FormControl, FormGroup, NonNullableFormBuilder, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {DataService} from "../data.service";
import {medicineData} from "../medicine/medicine.component";

@Component({
  selector: 'app-edit-medicine',
  template: `
      <form nz-form [formGroup]="validateForm" (ngSubmit)="submitForm()">
          <nz-form-item>
              <nz-form-label [nzSpan]="7" nzRequired>Nom</nz-form-label>
              <nz-form-control [nzSpan]="12" nzHasFeedback nzValidatingTip="Validating..." [nzErrorTip]="userErrorTpl">
                  <input nz-input [ngModel]="this.medicineData?.nom" formControlName="nom"
                         placeholder="Saisir votre nom"/>
                  <ng-template #userErrorTpl let-control>
                      <ng-container *ngIf="control.hasError('required')">Saisir votre nom!</ng-container>
                  </ng-template>
              </nz-form-control>
          </nz-form-item>
          <nz-form-item>
              <nz-form-label [nzSpan]="7" nzRequired>Prenom</nz-form-label>
              <nz-form-control [nzSpan]="12" nzHasFeedback>
                  <input nz-input [ngModel]="this.medicineData?.prenom" formControlName="prenom"
                         placeholder="Saisir votre prenom"/>
              </nz-form-control>
          </nz-form-item>
          <nz-form-item>
              <nz-form-label [nzSpan]="7" nzRequired>Email</nz-form-label>
              <nz-form-control [nzSpan]="12" nzHasFeedback nzValidatingTip="Validating..." [nzErrorTip]="userErrorTpl">
                  <input nz-input [ngModel]="this.medicineData?.mail" formControlName="mail"/>
                  <ng-template #userErrorTpl let-control>
                      <ng-container *ngIf="control.hasError('required')">Saisir votre mail!</ng-container>
                  </ng-template>
              </nz-form-control>
          </nz-form-item>
          <nz-form-item>
              <nz-form-label [nzSpan]="7" nzRequired>Telephone</nz-form-label>
              <nz-form-control [nzSpan]="12" nzHasFeedback nzValidatingTip="Validating..." [nzErrorTip]="userErrorTpl">
                  <input nz-input [ngModel]="this.medicineData?.telephone" formControlName="telephone"
                         placeholder="Saisir votre telephone"/>
                  <ng-template #userErrorTpl let-control>
                      <ng-container *ngIf="control.hasError('required')">Saisir votre telephone!</ng-container>
                  </ng-template>
              </nz-form-control>
          </nz-form-item>
          <nz-form-item>
              <nz-form-label [nzSpan]="7" nzRequired>Password</nz-form-label>
              <nz-form-control [nzSpan]="12" nzHasFeedback nzValidatingTip="Validating..." [nzErrorTip]="userErrorTpl">
                  <input nz-input [ngModel]="this.medicineData?.password" formControlName="password"
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
  styleUrls: ['./edit-medicine.component.less']
})
export class EditMedicineComponent {
  id: string = '';
  medicineData?: medicineData;

  validateForm: FormGroup<{
    nom: FormControl<string>;
    prenom: FormControl<string>;
    mail: FormControl<string>;
    telephone: FormControl<string>;
    password: FormControl<string>;
  }>;

  submitForm(): void {
    const editMedicineData = {
      "id": this.id,
      ...this.validateForm.value
    }
    // console.log('---------------------',editMedicineData);

    this.dataService.updateMedicine(editMedicineData).subscribe((response) => {
      this.Router.navigate(['reservation-success']);
      console.log('Update medicine request successful:', response);
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
    this.id = this.route.snapshot.paramMap.get('id') || '';
    // console.log('---------------------------',this.id, typeof this.id);
    this.dataService.currentMessage.subscribe(message => {
      message.forEach((item: any) => {
        if (item.id === parseInt(this.id)) {
          // console.log(item.nom);
          this.medicineData = item;
        }
      })
    });
    // console.log("-------------------------", this.medicineData);
    this.validateForm = this.fb.group({
      nom: ['', [Validators.required]],
      prenom: ['', [Validators.required]],
      mail: ['', [Validators.email, Validators.required]],
      telephone: ['', [Validators.minLength(10), Validators.maxLength(10), Validators.required]],
      password: ['', [Validators.required]]
    });
  }
}
