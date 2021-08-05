import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/shared/services/User.service';
import { User } from '../profile/User.model';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  alert:boolean = false;

  user: User = new User();

  constructor(private router:Router,
    private userService:UserService,
    private toastrService: ToastrService,
    ) { }

  ngOnInit(): void {
  }

  login(){
    this.router.navigateByUrl('login')
    console.log('Uspjesno logovan')
  }

  saveUser(){
    console.log(this.user)
    this.userService.registerUser(this.user).subscribe(response=>{
      console.log(response);
      this.toastrService.success('Success registration!')
      this.login()
      
    })


    

  


  }


}
