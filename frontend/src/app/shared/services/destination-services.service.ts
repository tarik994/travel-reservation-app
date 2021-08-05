import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DestinationServicesService {

  constructor(private httpClient: HttpClient) { }
  createDestination(destination:any){
    return this.httpClient.post(`${environment.serverUrl}/saveDestination`,destination)
  
  
  }
}

