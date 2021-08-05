import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Destination } from '../destination/Destination';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @Input() destination:Destination[] = []
 
  constructor(private httpClient:HttpClient,private router: Router) { }
  searchDestination= ''

  ngOnInit(): void {
    
  }
  search(){
    console.log(this.searchDestination)
    
    this.httpClient.get<Destination[]>(`http://localhost:3000/getDestination/search/${this.searchDestination}`).subscribe((response)=>{
    this.destination = response
    console.log(this.destination)

    });
    
  }
  detailsSearch(id:any){
    this.router.navigateByUrl('about?id='+ id)
    

  }
  
 
}



