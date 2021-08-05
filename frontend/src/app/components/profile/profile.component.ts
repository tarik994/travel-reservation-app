import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/shared/services/User.service';
import { Destination } from '../destination/Destination';
import { User } from './User.model';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  //destination:any = [{name: "", description:"",price:'',image:''}];
  destination:Destination[] = []
  id= this.route.snapshot.queryParams['id']
  user: any = [{}]

  
  constructor(private toastrService: ToastrService,
    private userService: UserService,
    private httpClient: HttpClient,private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.getAllReservation()
    this.getUserInfo()

  }

    getAllReservation(){
    let id = this.userService?.loggedUser?.id
    this.httpClient.get<Destination[]>(`http://localhost:3000/getReservation/` + id).subscribe((response)=>{
    console.log(response)
    this.destination = response;
    })
   
  
}
  
  deleteReservation(id:any){
    this.httpClient.delete<Destination[]>(`http://localhost:3000/getDestination/deleteReservation/${id}`).subscribe((response)=>{
      console.log(response)
      this.toastrService.warning('Uklonili ste rezervaciju!')
      this.getAllReservation()

    })
  
  }

  getUserInfo(){
    let id = this.userService?.loggedUser?.id
    this.httpClient.get<any>(`http://localhost:3000/getUserInfo/${id}`).subscribe((response)=>{
    console.log(response)
    this.user = response;
    console.log(this.user)
    })


  

}
}
