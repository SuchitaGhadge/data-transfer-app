import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})

export class DataTransferService {

  private dataSource =  new BehaviorSubject<any>(null)
  sharedData = this.dataSource.asObservable()
  constructor() { }

  transferData(params:any[]){
    this.dataSource.next(params)
  }
}
