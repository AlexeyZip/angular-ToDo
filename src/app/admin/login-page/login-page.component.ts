import { User } from './../../shared/interfaces';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AuthService } from './../shared/components/services/auth-services';
// import { User } from './../shared/components/interfaces';
// import { Component, OnInit } from '@angular/core';
// import { FormControl, FormGroup, Validators } from '@angular/forms';

// @Component({
//   selector: 'app-login-page',
//   templateUrl: './login-page.component.html',
//   styleUrls: ['./login-page.component.scss'],
// })
// export class LoginPageComponent implements OnInit {
//   loginForm: FormGroup;
//   constructor() {}

//   ngOnInit() {
//     this.loginForm = new FormGroup({
//       email: new FormControl(null, [Validators.required, Validators.email]),
//       password: new FormControl(null, [
//         Validators.required,
//         Validators.minLength(6),
//       ]),
//     });
//   }

//   submit() {
//     console.log(this.loginForm);

//     if (this.loginForm.invalid) {
//       return;
//     }
//     const user: User = {
//       email: this.loginForm.value.email,
//       password: this.loginForm.value.password,
//     };
//   }
// }

// import { User } from '../../shared/interfaces';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  loginForm: FormGroup;
  submitted: boolean;
  message: string;
  constructor(
    public auth: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params: Params) => {
      if (params['loginAgain']) {
        this.message = 'Please, enter a date';
      }
    });

    this.createForm();
  }

  private createForm() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }
  submit() {
    if (this.loginForm.invalid) {
      return;
    }

    this.submitted = true;

    const user: User = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password,
    };
    this.auth.login(user).subscribe(
      () => {
        this.loginForm.reset();
        this.router.navigate(['/admin', 'dashboard']);
        this.submitted = false;
      },
      () => {
        this.submitted = false;
      }
    );
  }
  // submit() {
  //   console.log(this.loginForm);

  //   if (this.loginForm.invalid) {
  //     return;
  //   }
  //   const user: User = {
  //     email: this.loginForm.value.email,
  //     password: this.loginForm.value.password,
  //   };
  // }
}
