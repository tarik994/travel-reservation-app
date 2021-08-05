import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DestinationServicesService } from 'src/app/shared/services/destination-services.service';
import { Destination } from '../../destination/Destination';

@Component({
  selector: 'app-admin-edit-places',
  templateUrl: './admin-edit-places.component.html',
  styleUrls: ['./admin-edit-places.component.scss']
})
export class AdminEditPlacesComponent implements OnInit {
  hotel: any = []
  editDest:any = []
  destination: Destination = {}
  id= this.route.snapshot.queryParams['id']
  
 



  constructor(private destService: DestinationServicesService,
    private httpClient: HttpClient,
    private toastrService: ToastrService,
    private route: ActivatedRoute
  

  ) { }

  ngOnInit(): void {

 
  this.getAllDest()

  }
  getAllDest(){
    this.httpClient.get<Destination[]>('http://localhost:3000/getDestination').subscribe((response)=>{
      console.log(this.destination)
     this.editDest = response;
     console.log(this.editDest)
     

    });
  }
  saveDestination() {
  
    this.httpClient.post('http://localhost:3000/saveDestination/saveDest', this.destination).subscribe(response => {
      this.getAllDest()
      this.toastrService.success('Successfull added destination!')
    console.log(response)
     
    })
  }

  editDestination(item:any){
    this.destination = {...item};
  }


  updateDest(){
    let id = this.destination.id;
    let req = {
      name:this.destination.name,
      description: this.destination.description,
      price: this.destination.price,
      destination_id: id
     
    }
    this.httpClient.put(`http://localhost:3000/updateDestination/`,req).subscribe((response)=>{
     this.getAllDest()
    console.log(req)
  
     
  })


  }
}



