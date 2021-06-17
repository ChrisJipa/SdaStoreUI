import {Component, OnInit} from '@angular/core';
import {AddressDto, Role, UserDto} from '../model/user-model';
import {UserService} from '../user.service';
import {Router} from '@angular/router';
import {ValidateEmailService} from '../validate-email.service';
import {EmailValidator} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  roles: Role [] = [];
  notificationOptions: string [] = ['MAIL', 'EMAIL'];
  customErrorMessage = '';

  address: AddressDto = {} as AddressDto;

  user: UserDto = {
    address: this.address
  } as UserDto;

  constructor(private userService: UserService, private router: Router, private validateEmail: ValidateEmailService) {
  }

  ngOnInit(): void {
    this.userService.getRoles().subscribe((data) => {
      this.roles = data;
      console.log('Roles from DB have been successfully loaded!');
    }, errorMessage => {
      console.log(errorMessage);
    });
  }

  register(email: string): void {
    if (this.validateEmail.validateFormat(email)) {
      this.userService.register(this.user).subscribe((data) => {
        console.log('success', data);
        this.router.navigate(['/login']);
      }, errorMessage => {
        console.log('error', errorMessage);
        this.customErrorMessage = errorMessage.error.message;
      });
    } else {
      this.customErrorMessage = 'Email format is invalid!';
    }
  }

}
