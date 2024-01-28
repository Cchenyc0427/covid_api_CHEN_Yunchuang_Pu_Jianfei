import { Component } from '@angular/core';
import {FormControl, FormGroup, NonNullableFormBuilder, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {DataService} from "../data.service";

@Component({
  selector: 'app-create-center',
  template: `
      <div class="main-page">
          <nz-demo-menu-inline class="menu-page" [select]="select"></nz-demo-menu-inline>
          <div class="form-page">
              <form nz-form [formGroup]="validateForm" (ngSubmit)="submitForm()">
                  <nz-form-item>
                      <nz-form-label [nzSpan]="7" nzRequired>Name</nz-form-label>
                      <nz-form-control [nzSpan]="12" nzHasFeedback nzValidatingTip="Validating..."
                                       [nzErrorTip]="userErrorTpl">
                          <input nz-input formControlName="name"
                                 placeholder="Saisir le nom du centre"/>
                          <ng-template #userErrorTpl let-control>
                              <ng-container *ngIf="control.hasError('required')">Saisir le nom du centre!</ng-container>
                              <ng-container *ngIf="control.hasError('duplicated')">Le nom d'centre est redondant!
                              </ng-container>
                          </ng-template>
                      </nz-form-control>
                  </nz-form-item>
                  <nz-form-item>
                      <nz-form-label [nzSpan]="7" nzRequired>Adresse</nz-form-label>
                      <nz-form-control [nzSpan]="12" nzHasFeedback>
                          <input nz-input formControlName="adresse" placeholder="adresse"/>
                      </nz-form-control>
                  </nz-form-item>
                  <nz-form-item>
                      <nz-form-label [nzSpan]="7" nzRequired>City</nz-form-label>
                      <nz-form-control [nzSpan]="12" nzHasFeedback nzErrorTip="Saisir la ville du centre">
                          <input nz-input formControlName="city"/>
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
  `,
  styleUrls: ['./create-center.component.less']
})
export class CreateCenterComponent {
  select = 'createCenter';

  validateForm: FormGroup<{
    name: FormControl<string>;
    adresse: FormControl<string>;
    city: FormControl<string>;
  }>;

  submitForm(): void {
    this.dataService.createCenter(this.validateForm.value).subscribe((response) => {
      this.Router.navigate(['reservation-success']);
      console.log('Create request successful:', response);
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
    //console.log('---------------------------',this.centerId, typeof this.centerId);
    this.validateForm = this.fb.group({
      name: ['', [Validators.required]],
      adresse: ['', [Validators.required]],
      city: ['', [Validators.required]]
    });
  }

}
