import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CustomersService } from '../services/customers.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup
  constructor(public fb: FormBuilder, public router: Router, public CS: CustomersService) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
    this.getUserss();
  }
  getUserss() {
    this.CS.getUsers({}).subscribe((data) => {
      console.log(data)

    })
  }
  login() {
    console.log(this.loginForm.value);
    if (this.loginForm.valid) {
      this.router.navigate(['/dashboard']);

    }
  }

}
