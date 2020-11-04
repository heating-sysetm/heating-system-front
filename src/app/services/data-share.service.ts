import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import * as moment from 'jalali-moment';
import { User } from '../model/User';
import { interval, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataShareService {
  public start_time: BehaviorSubject<any>;
  public end_time: BehaviorSubject<any>;
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  private mytextSource = new Subject<number>();
  changes = this.mytextSource.asObservable();

  private gasSens = new Subject<number>();
  gasData = this.gasSens.asObservable();

  private boyler_1_Sens = new Subject<number>();
  boyler_1 = this.boyler_1_Sens.asObservable();
  private boyler_2_Sens = new Subject<number>();
  boyler_2 = this.boyler_2_Sens.asObservable();
  private boyler_3_Sens = new Subject<number>();
  boyler_3 = this.boyler_3_Sens.asObservable();

  private cisternSens = new Subject<any>();
  cisternData = this.cisternSens.asObservable();
  private outSens = new Subject<any>();
  outData = this.outSens.asObservable();

  private outputSens = new Subject<any>();
  outputData = this.outputSens.asObservable();
  private inputSens = new Subject<any>();
  inputData = this.inputSens.asObservable();

  private date = new Subject<any>();
  tempDates = this.date.asObservable();



  subscription: Subscription;
  
  constructor() {
    this.start_time = new BehaviorSubject(
      this.format(this.today(), 'jYYYY-jMM-jDD')
    );
    this.end_time = new BehaviorSubject(
      this.format(this.today(), 'jYYYY-jMM-jDD')
    );
    this.currentUserSubject = new BehaviorSubject<User>(
      JSON.parse(localStorage.getItem('currentUser'))
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }

  today(): moment.Moment {
    return moment().locale('fa');
  }
  format(date: moment.Moment, displayFormat: string): string {
    date = this.clone(date);
    if (!this.isValid(date)) {
      throw Error('momentDateAdapter: Cannot format invalid date.');
    }
    // console.log('8--',displayFormat,date,date.format(displayFormat));
    return date.format(displayFormat);
  }
  clone(date: moment.Moment): moment.Moment {
    return date.clone().locale('fa');
  }

  isValid(date: moment.Moment): boolean {
    return this.clone(date).isValid();
  }

  public currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  public setCurrentUserSubject(user) {
    this.currentUserSubject.next(user);
  }

  changeMytext(mytext: number) {
     this.mytextSource.next(mytext);
  }

  changeGasData(data : number){
    this.gasSens.next(data);
  }

  changeBoyler1Data(data : number){
    this.boyler_1_Sens.next(data);
  }
  changeBoyler2Data(data : number){
    this.boyler_2_Sens.next(data);
  }
  changeBoyler3Data(data : number){
    this.boyler_3_Sens.next(data);
  }
  changeCisternData(data : number){
    this.cisternSens.next(data);
  }

  changeOutTempData(data : number){
    this.outSens.next(data);
  }

  changeOutputData(data : Array<any>){
    this.outputSens.next(data);
  }
  changeInputData(data : Array<any>){
    this.inputSens.next(data);
  }

  changeDate(data : Array<any>){
    this.date.next(data);
  }
}
