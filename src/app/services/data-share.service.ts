import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import * as moment from "jalali-moment";
import { User } from '../model/User';
@Injectable({
  providedIn: 'root'
})
export class DataShareService {

  public start_time:BehaviorSubject<any>;
  public end_time:BehaviorSubject<any>;
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  // public soketData:BehaviorSubject<any>;
  constructor() {
    this.start_time=new BehaviorSubject(this.format(this.today(),"jYYYY-jMM-jDD"));
    this.end_time=new BehaviorSubject(this.format(this.today(),"jYYYY-jMM-jDD"));
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
   }


  today(): moment.Moment {
    return moment().locale("fa");
  }
  format(date: moment.Moment, displayFormat: string): string {
    date = this.clone(date);
    if (!this.isValid(date)) {
      throw Error("momentDateAdapter: Cannot format invalid date.");
    }
    // console.log('8--',displayFormat,date,date.format(displayFormat));  
    return date.format(displayFormat);
  }
  clone(date: moment.Moment): moment.Moment {
    return date.clone().locale("fa");
  }
  isValid(date: moment.Moment): boolean {
    return this.clone(date).isValid();
  }


  public currentUserValue(): User {
    return this.currentUserSubject.value;
}
  public setCurrentUserSubject(user){
    this.currentUserSubject.next(user);
  }
}
