import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {FormUtil} from '../../util/form.util';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginFormGroup!: FormGroup;
  FormUtil = FormUtil;

  constructor(private formBuilder: FormBuilder, private router: Router) {
  }

  ngOnInit(): void {
    this.loginFormGroup = this.formBuilder.group({
      login: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    })
  }

  login(): void {
    this.router.navigate(['admin']).then();
  }
}
