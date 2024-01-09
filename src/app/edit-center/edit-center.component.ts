import {Component} from '@angular/core';
import {VaccinationCenter} from "../trouver-un-centre/VaccinationCenter";
import {ActivatedRoute, Router} from "@angular/router";
import {DataService} from "../data.service";
import {FormControl, FormGroup, NonNullableFormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-edit-center',
  template: `
      <form nz-form [formGroup]="validateForm" (ngSubmit)="submitForm()">
          <nz-form-item>
              <nz-form-label [nzSpan]="7" nzRequired>Name</nz-form-label>
              <nz-form-control [nzSpan]="12" nzHasFeedback nzValidatingTip="Validating..." [nzErrorTip]="userErrorTpl">
                  <input nz-input [ngModel]="this.centerData?.name" formControlName="name"
                         placeholder="Saisir le nom du centre"/>
                  <ng-template #userErrorTpl let-control>
                      <ng-container *ngIf="control.hasError('required')">Saisir le nom du centre!</ng-container>
                      <ng-container *ngIf="control.hasError('duplicated')">Le nom d'centre est redondant!</ng-container>
                  </ng-template>
              </nz-form-control>
          </nz-form-item>
          <nz-form-item>
              <nz-form-label [nzSpan]="7" nzRequired>Adresse</nz-form-label>
              <nz-form-control [nzSpan]="12" nzHasFeedback>
                  <input nz-input [ngModel]="this.centerData?.adresse" formControlName="adresse" placeholder="adresse"/>
              </nz-form-control>
          </nz-form-item>
          <nz-form-item>
              <nz-form-label [nzSpan]="7" nzRequired>City</nz-form-label>
              <nz-form-control [nzSpan]="12" nzHasFeedback nzErrorTip="Saisir la ville du centre">
                  <input nz-input [ngModel]="this.centerData?.city" formControlName="city"/>
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
  styleUrls: ['./edit-center.component.less']
})
export class EditCenterComponent {
  centerId: string = '';
  centerData?: VaccinationCenter;
  nom: string = '';
  prenom: string = '';
  telephone: string = '';
  email: string = '';
  date: Date = new Date();

  validateForm: FormGroup<{
    name: FormControl<string>;
    adresse: FormControl<string>;
    city: FormControl<string>;
  }>;



  submitForm(): void {
    const editCenterData = {
      "id": this.centerId,
      ...this.validateForm.value
    }
    // console.log('---------------------',editCenterData);

    this.dataService.updateCenters(editCenterData).subscribe((response) => {
      this.Router.navigate(['reservation-success']);
      console.log('PUT request successful:', response);
    }),
      (errInfo: any) => {
        console.error(errInfo);
        this.Router.navigate(['reservation-failed']);
      };
  }

  resetForm(e: MouseEvent): void {
    e.preventDefault();
    this.validateForm?.reset();
  }


  constructor(private route: ActivatedRoute, private Router: Router, private dataService: DataService, private fb: NonNullableFormBuilder) {
    this.centerId = this.route.snapshot.paramMap.get('id') || '';
    //console.log('---------------------------',this.centerId, typeof this.centerId);
    this.dataService.currentMessage.subscribe(message => {
      message.forEach((item: any) => {
        if (item.id === parseInt(this.centerId)) {
          this.centerData = item;
        }
      })
    });
    this.validateForm = this.fb.group({
      name: ['', [Validators.required]],
      adresse: ['', [Validators.required]],
      city: ['', [Validators.required]]
    });
  }

}
