import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { AuthService } from '../../shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  form: FormGroup;

  constructor(
    private router: Router,
    private authService: AuthService) { }

  ngOnInit() {
    this.form = new FormGroup({
      'userName': new FormControl(null, [Validators.required])
    })
  }

  setUserName(e) {
    this.authService.setUserName(e);
  }

  onSubmit() {
    this.authService.logIn();
    this.router.navigate(['/books'])
  }

}
