import { Component } from '@angular/core';
import { FormControl, FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { Router } from "@angular/router";
import {DataService} from "../data.service";

@Component({
  selector: 'app-login',
  template: `
    <form nz-form [formGroup]="validateForm" (ngSubmit)="submitForm()">
      <nz-form-item>
        <nz-form-control nzErrorTip="Please input your email!">
          <nz-input-group nzPrefixIcon="user">
            <input formControlName="userName" nz-input placeholder="Username" />
          </nz-input-group>
        </nz-form-control>
      </nz-form-item>
      <nz-form-item>
        <nz-form-control nzErrorTip="Please input your Password!">
          <nz-input-group nzPrefixIcon="lock">
            <input formControlName="password" nz-input type="password" placeholder="Password" />
          </nz-input-group>
        </nz-form-control>
      </nz-form-item>
      <nz-form-item>
        <nz-form-control>
          <button nz-button nzType="primary" [disabled]="!validateForm.valid">Log in</button>
        </nz-form-control>
      </nz-form-item>
    </form>
  `,
  styleUrls: ['./login.component.less'],
})
export class NzDemoFormHorizontalLoginComponent {
  validateForm: FormGroup<{
    userName: FormControl<string>;
    password: FormControl<string>;
    remember: FormControl<boolean>;
  }> = this.fb.group({
    userName: ['', [Validators.required]],
    password: ['', [Validators.required]],
    remember: [true]
  });



  constructor(private fb: NonNullableFormBuilder, private Router: Router, private dataService: DataService) {}
  submitForm(): void {
    console.log('submit', this.validateForm.value);
    this.dataService.valideSuperAdminLogin(this.validateForm.value.userName, this.validateForm.value.password).subscribe((response: any) => {
      if(response) {
        this.Router.navigate(['super-admin']);
      }
      else {
        this.Router.navigate(['reservation-failed']);
      }
    })
  }
}
