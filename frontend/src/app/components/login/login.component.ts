import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/shared/services/User.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email: string = '';
  password: string = '';

  constructor(private router: Router,
    private userService: UserService,
    private toastrService: ToastrService
  ) { }

  ngOnInit(): void {
  }

  singUp() {
    this.router.navigateByUrl('registration')
  }



  logIn() {
    this.userService.loginUser(this.email, this.password).subscribe(response => {
      if (!response.id) {
        this.toastrService.info('Wrong data!')
      } else {
        delete response.password;
        this.toastrService.success('Success login!')
        localStorage.setItem('loggedUser',JSON.stringify(response))
        this.router.navigateByUrl('')
      }
    })


  }
}

