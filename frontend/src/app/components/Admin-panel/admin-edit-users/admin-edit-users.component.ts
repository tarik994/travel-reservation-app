import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/shared/services/User.service';

@Component({
  selector: 'app-admin-edit-users',
  templateUrl: './admin-edit-users.component.html',
  styleUrls: ['./admin-edit-users.component.scss']
})
export class AdminEditUsersComponent implements OnInit {
  users:any = []
  

  constructor(
    private httpClient: HttpClient,
    private toastrService: ToastrService,
    private route: ActivatedRoute,
    private user: UserService
  
) { }

  ngOnInit(): void {

    this.getAllUsers()
    
  }
getAllUsers(){
  this.httpClient.get<any[]>('http://localhost:3000/getUserById').subscribe((response)=>{
      console.log(this.users)
     this.users = response;

    });
  }

  deleteUser(id:any){
      this.httpClient.delete<any>(`http://localhost:3000/deleteUser/${id}`).subscribe((response)=>{
        console.log(response)
        this.toastrService.warning('Uklonili ste korisnika!')
        this.getAllUsers()
     
      })
    
    }
   
  }


