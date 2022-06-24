
// import { UserService } from './../services/user.service';
// import { HttpErrorResponse } from '@angular/common/http';
// import { Component, OnInit } from '@angular/core';
// import { NgForm } from '@angular/forms';

// import { Router } from '@angular/router';
// import { AuthService } from '../services/auth.service';
// import { User } from '../model/user';

// @Component({
//   selector: 'app-user-register',
//   templateUrl: './user-register.component.html',
//   styleUrls: ['./user-register.component.css']
// })
// export class UserRegisterComponent implements OnInit {
//   form: any = {
//     name: null,
//     email: null,
//     username: null,
//     password: null,
//   };
//   isSuccessful = false;
//   isSignUpFailed = false;
//   errorMessage = '';

//   constructor(private userService: UserService, private authService: AuthService, public router: Router) { }

//   ngOnInit(): void {
//   }
//   public getUserData(data:NgForm):void{

//     const user : User = {
//       name: data.value.name,
//       username: data.value.username,
//       password: data.value.password,
//       email: data.value.email
//     };

//     console.log(user);
//   }

//   onSubmit(): void {
//     const { name, email, username, password,} = this.form;


//       this.authService.register(name, email, username, password).subscribe({
//         next: data: => {
//           console.log(data);
//           this.isSuccessful = true;
//           this.isSignUpFailed = false;
//         },
//         error: (err: { error: { message: string; }; }) => {
//           this.errorMessage = err.error.message;
//           this.isSignUpFailed = true;
//         }
//       });
//       this.router.navigate(['/login']);

//     }
//   }

//   public createUser(data:NgForm): void{
//     const user : User = {
//       name: data.value.name,
//       email: data.value.email,
//       username: data.value.username,
//       password: data.value.password
//         };
//         console.log(data)
//     this.userService.registerUser(user).subscribe({
//       next: (response: User) => {
//         console.log(user);
//       },
//       error: (error: HttpErrorResponse) => {
//         alert(error.message);
//       }
//     })
//   }
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
  form: any = {
    name: null,
    email: null,
    username: null,
    password: null
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  constructor(private authService: AuthService) { }
  ngOnInit(): void {
  }
  onSubmit(): void {
    const {username, email, password } = this.form;
    this.authService.register(username, email, password).subscribe({
      next: data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    });
  }
}
