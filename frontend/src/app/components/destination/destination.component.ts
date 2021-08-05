import { HttpClient } from '@angular/common/http';
import { ParseErrorLevel } from '@angular/compiler';
import { getAllLifecycleHooks } from '@angular/compiler/src/lifecycle_reflector';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/shared/services/User.service';
import { Destination } from './Destination';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.scss']
})
export class DestinationComponent implements OnInit {
  
  @Input() destination:Destination[] = []
  id= this.route.snapshot.queryParams['id']
  destinationFavorite:any = [{name: ""}]
  response: any;
  
  
  
  



  constructor(private httpClient: HttpClient, private router:Router,
    public userService:UserService,private route: ActivatedRoute,
    private toastrService: ToastrService,) { }

  ngOnInit(): void {

  this.getAllDestination()

  }

  getAllDestination(){
    this.httpClient.get<Destination[]>('http://localhost:3000/getDestination').subscribe((response)=>{
      console.log(this.destination)
     this.destination = response;
     this.destinationFavorite = response;
     console.log(this.destination)
     

    });

  
   
  }
  placeDet(id:any){
    this.router.navigateByUrl('about?id='+ id)
  }

  
  deleteDestination(id:any){
    this.httpClient.delete<Destination[]>(`http://localhost:3000/getDestination/deleteDest/${id}`).subscribe((response)=>{
      console.log(response)
      this.getAllDestination()
      this.toastrService.success('Uspjesno izbrisana destinacija!')

    })
  

  }

  addFavoriteDest(name:any){

    let user_id = this.userService?.loggedUser?.id
    console.log(user_id)
    name= name;

    const req = {
      user_id:user_id,
      name:name,
   
    }
    this.httpClient.post<Destination[]>(`http://localhost:3000/favoriteDestination/`,req ).subscribe((response)=>{
      console.log(this.destinationFavorite, 'ispis')
     this.toastrService.info('Omiljena destinacija dodana!')
      this.router.navigateByUrl('favorite')
   })
  

 }

}
  







