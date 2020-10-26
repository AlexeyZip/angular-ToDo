import { User } from './../shared/components/interfaces';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  loginForm: FormGroup;
  constructor() {}

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }

  submit() {
    console.log(this.loginForm);

    if (this.loginForm.invalid) {
      return;
    }
    const user: User = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password,
    };
  }
}

// import { Component } from '@angular/core';
// import {
//   FormControl,
//   FormGroup,
//   FormGroupDirective,
//   NgForm,
//   Validators,
// } from '@angular/forms';
// import { ErrorStateMatcher } from '@angular/material/core';

// /** Error when invalid control is dirty, touched, or submitted. */
// export class MyErrorStateMatcher implements ErrorStateMatcher {
//   isErrorState(
//     control: FormControl | null,
//     form: FormGroupDirective | NgForm | null
//   ): boolean {
//     const isSubmitted = form && form.submitted;
//     return !!(
//       control &&
//       control.invalid &&
//       (control.dirty || control.touched || isSubmitted)
//     );
//   }
// }

// /** @title Input with a custom ErrorStateMatcher */
// @Component({
//   selector: 'app-login-page',
//   templateUrl: './login-page.component.html',
//   styleUrls: ['./login-page.component.scss'],
// })
// export class LoginPageComponent {
//   loginForm: FormGroup;
//   constructor() {}

//   email = new FormControl('', [Validators.required, Validators.email]);
//   password = new FormControl('', [
//     Validators.required,
//     Validators.minLength(6),
//   ]);

//   matcher = new MyErrorStateMatcher();
//   submit() {
//     if (this.loginForm.invalid) {
//       return;
//     }
//   }
// }
