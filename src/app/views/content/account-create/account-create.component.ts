import { Component, OnInit } from '@angular/core';
import { FormGroup, EmailValidator, FormControl, Validators, PatternValidator } from '@angular/forms';

@Component({
  selector: 'app-account-create',
  templateUrl: './account-create.component.html',
  styleUrls: ['./account-create.component.scss']
})
export class AccountCreateComponent implements OnInit {

  accountFormGroup: FormGroup;
  constructor() { }

  ngOnInit() {
    this.accountFormGroup = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', Validators.required)
      //   industry;
      // website;
      // description;

    });
  }

  onCreateAccount() {

  }

}
