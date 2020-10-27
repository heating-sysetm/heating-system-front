import { map } from 'rxjs/operators';
import { HttpInterceptor, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient,private authenticationService: AuthenticationService) { }

  getHomes(){
    return this.http.get<any>(`${environment.apiUrl}/homes/all`);
  }



}
