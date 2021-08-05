import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/shared/services/User.service';
import { Destination } from '../destination/Destination';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  destination:any = {name: "", description:"",price:''}
  id= this.route.snapshot.queryParams['id']
  hotels:any = [];
  destinationService: any;
  navigateByUrl: any;
  selectedHotel: any;

  
  

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private toastrService: ToastrService, 
    private httpClient:HttpClient,
    private userService: UserService
    
    ) { }

  ngOnInit(): void {
    this.httpClient.get<Destination[]>(`http://localhost:3000/getDestination/` + this.id).subscribe((response)=>{
      this.destination = response[0];
     });

     this.httpClient.get<any>(`http://localhost:3000/hotels/` + this.id).subscribe((response)=>{ 
     this.hotels = response;
      console.log(response)
      console.log(this.id)
     });


  }

  
    makeReservation(){
      let user_id = this.userService?.loggedUser?.id
      let req = {
        name:this.destination.name,
        description: this.destination.description,
        price: this.destination.price,
        destination_id: this.destination.id,
        hotel_id: this.selectedHotel,
        user_id: user_id
      }
      this.httpClient.post<Destination[]>(`http://localhost:3000/reservation/`,req ).subscribe((response)=>{
         console.log(this.destination)
        console.log(response)
        this.toastrService.info('Rezervisali ste putovanje.Sretno!')
         this.router.navigateByUrl('profile')
      })
     

    }
  }

 


  


