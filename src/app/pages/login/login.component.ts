import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

// services
import { SigninService } from 'src/app/services/signin.service'

// interfaces
import { ILogin } from 'src/app/interfaces/ilogin';
import { IHttpCustomResponse } from 'src/app/interfaces/ihttp';
import { ISignIn } from 'src/app/interfaces/ilogin'

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  login: ILogin;

  constructor(
    private signinService: SigninService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.login = { email: 'jluna@solera.pe', password: 'admin' };
  }

  ngOnInit() {
    this.signin(this.login);
  }

  async signin(params: any): Promise<void> {
    const response: IHttpCustomResponse<ISignIn> = await this.signinService.postSignIn(params).toPromise();

    if(!response.success) {
      console.log('false');
      console.log(response);
    } else {
      console.log('true');
      console.log(response);
      this.router.navigate(['mis-hijos']);
    }
  }


}
