import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginModel } from '../model/loginModel';
import { Loginservice } from '../service/loginservice.service';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-form-component',
  templateUrl: './login-form-component.component.html',
  styleUrls: ['./login-form-component.component.css'],
})
export class LoginFormComponentComponent implements OnInit {
  loginModel: LoginModel = new LoginModel();
  loginFormGroup: FormGroup = new FormGroup({});
  constructor(
    private formBuilder: FormBuilder,
    private loginService: Loginservice,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginFormGroup = this.formBuilder.group({
      email: [' ', Validators.required],
      password: ['', Validators.minLength(6)],
    });
  }

  OnSubmit(): void {
    // console.log(environment.apiUrl);

    if (this.loginFormGroup.valid) {
      this.loginModel = this.loginFormGroup.value;
      console.log(this.loginModel.email);
      this.loginService.onSubmit(this.loginModel).subscribe((res: any) => {
        console.log(res);
        localStorage.setItem('token', res.token);
        this.router.navigateByUrl('/dashboard');
      });
    }
  }
}
