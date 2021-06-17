import {Component, OnInit} from '@angular/core';
import {AuthorizationService} from '../authorization.service';
import {Router} from '@angular/router';
import {ValidateEmailService} from '../validate-email.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email = '';
  password = '';
  customErrorMessage = '';

  constructor(private authService: AuthorizationService, private router: Router, private emailValidationService: ValidateEmailService) {
  }

  ngOnInit(): void {
  }

  login(email: string): void {
    if (this.emailValidationService.validateFormat(email)) {
      this.authService.doAuth(this.email, this.password).subscribe((data) => {
        localStorage.setItem('ROLE', data.authorities[0].authority);
        this.router.navigate(['/product-card-view']);
        console.log(data);
      }, error => {
        this.customErrorMessage = error.error.message;
      });
    } else {
      this.customErrorMessage = 'Email format invalid!';
    }
  }

}
