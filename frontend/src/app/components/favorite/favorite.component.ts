import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/shared/services/User.service';
import { Destination } from '../destination/Destination';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent implements OnInit {
  destination: any = [];
  id= this.route.snapshot.queryParams['id'];
  myImage: string = 'assets/img/home.jpg'

  constructor( private route: ActivatedRoute,
    private router: Router,
    private toastrService: ToastrService, 
    private httpClient:HttpClient,
    private userService: UserService) { }

  ngOnInit(): void {
   this.getAllFavoriteDest();
     
  }
getAllFavoriteDest(){
  let id = this.userService?.loggedUser?.id
  this.httpClient.get<Destination[]>(`http://localhost:3000/favoriteUserDest/${id}`).subscribe((response)=>{
    this.destination = response;
    console.log(this.destination)
   });
  }
  
deleteFavoriteDest(id:any){
  this.httpClient.delete<Destination[]>(`http://localhost:3000/deleteFavoriteDestination/${id}`).subscribe((response)=>{
    console.log(response)
    this.toastrService.warning('Uklonili ste omiljenu destinaciju!')
    this.getAllFavoriteDest()
   

  })

}
}


