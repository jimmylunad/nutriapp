import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router, ActivatedRoute, Params } from '@angular/router';

import { LocalStorageService } from 'src/app/services/localstorage.service'

// services
import { SigninService } from 'src/app/services/signin.service'

// validate
import { ValidationService } from 'src/app/validations/validation.service'

// interfaces
import { ISignIn } from 'src/app/interfaces/ilogin';
import { IForm } from 'src/app/interfaces/iform';
import { IHttpCustomResponse } from 'src/app/interfaces/ihttp';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  submit: boolean = false;
  inputs: IForm[];
  error: string = '';
  identity;
  token;

  constructor(
    private localStorageService: LocalStorageService,
    private signinService: SigninService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.inputs = [
      { id:'email', label: 'Correo', type: 'email', icon: 'email' },
      { id:'password', label: 'Contraseña', type: 'password', icon: 'lock' }
    ];
    this.form = this.formBuilder.group({
      email: ["", [Validators.required, ValidationService.emailValidator]],
      password: ["", [Validators.required, ValidationService.passwordValidator]]
    });
  }

  ngOnInit() {
    if( this.localStorageService.getValue('token') ) this.router.navigate(['/mis-hijos']) 
  }

  async signIn(params: any): Promise<void> {
    const response: IHttpCustomResponse<ISignIn> = await this.signinService.postSignIn(params).toPromise();

    if(!response.success) {
      this.error = response.error.errorMessage;
      this.form.reset();
    } else {
      this.identity = response.body.data;
      this.localStorageService.setObject('user', {name: this.identity.name, surname: this.identity.surname} );
      this.localStorageService.setObject('token', this.identity.token );
      this.router.navigate(['mis-hijos']);
    }
  }

  async onSubmit(): Promise<void> {
    if (this.form.dirty && this.form.valid) {
      await this.signIn(this.form.value);
    }
  }


}
