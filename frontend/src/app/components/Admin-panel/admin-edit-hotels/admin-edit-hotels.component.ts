import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-admin-edit-hotels',
  templateUrl: './admin-edit-hotels.component.html',
  styleUrls: ['./admin-edit-hotels.component.scss']
})
export class AdminEditHotelsComponent implements OnInit {
  hotel: any = {}
  destination:any = [];
  id= this.route.snapshot.queryParams['id'];
  selectedDestination: any;
  hotels:any=[]

 
  
 
  constructor(
    private httpClient: HttpClient,
    private toastrService: ToastrService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getAllHotels()
    this.httpClient.get<any>(`http://localhost:3000/getDestination/`).subscribe((response)=>{ 
       this.destination = response;
       this.showHotels()
        console.log(response)
      
   
     });

    this.showHotels()
    
    
    }

showHotels() {
      this.httpClient.get<any>(`http://localhost:3000/hotels`).subscribe((response)=>{ 
        this.hotels = response;
        console.log(response)
})}
  saveHotel() {
    this.httpClient.post('http://localhost:3000/saveHotel', this.hotel).subscribe((response:any) => {
      let destInfo = {hotelId: response.insertId, destId: +this.selectedDestination}
      console.log(response.insertId, response)
      this.httpClient.post('http://localhost:3000/addHotelToDest', destInfo).subscribe(
        (success:any) => {
          this.toastrService.success(success.msg)

        }
      )

    });
  }
  getAllHotels(){
    this.httpClient.get<any[]>('http://localhost:3000/getAllHotels').subscribe((response)=>{
        
       this.hotels = response;
  
      });
    }

    deleteHotel(id:any){
        this.httpClient.delete(`http://localhost:3000/deleteHotel/${id}`).subscribe((response)=>{
          console.log(response)
          this.showHotels()
          this.toastrService.warning('Izbrisali ste hotel!')
          
         
      
        })
      
    }
}
  
    
 
 