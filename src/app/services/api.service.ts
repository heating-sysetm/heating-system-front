import { map } from 'rxjs/operators';
import { HttpInterceptor, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(
    private http: HttpClient,
    private authenticationService: AuthenticationService
  ) {}

  getHomes() {
    return this.http.get(`${environment.apiUrl}/homes/all`);
  }

  addHome(data) {
    return this.http.post(`${environment.apiUrl}/homes/add-home`, { data });
  }

  updateHome(id,data) {
    return this.http.put(`${environment.apiUrl}/homes/`+id+`/edit-home`, { data });
  }

  deleteHome(id){
    return this.http.delete(`${environment.apiUrl}/homes/`+id+`/delete`);
  }


  getusers() {
    return this.http.get(`${environment.apiUrl}/users`);
  }

  addUser(data) {
    return this.http.post(`${environment.apiUrl}/users/add-user`, { data });
  }

  updateUser(id,data) {
    return this.http.put(`${environment.apiUrl}/users/`+id+`/edit-user`, { data });
  }

  deleteUser(id){
    return this.http.delete(`${environment.apiUrl}/users/`+id+`/delete`);
  }

}
