import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/shared/services/User.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  
 

  constructor(public userService:UserService,private toastrService:ToastrService, private router:Router) { }

  ngOnInit(): void {
  }


  logOut(){
    localStorage.removeItem('loggedUser');
    this.toastrService.info('Thanks!')
    this.router.navigateByUrl('')


  }



}
