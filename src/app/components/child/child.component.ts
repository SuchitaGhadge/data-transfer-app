import { Component, OnInit, AfterViewInit, Input, Output, EventEmitter } from '@angular/core';
// import { DataTransferService } from 'src/app/services/data-transfer.service';
import {ResData} from '../../interfaces/res-data'
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, AfterViewInit {

  receivedArr :ResData[] =[]
  // dataArr:any = []
  constructor() { }  //public _dataService : DataTransferService

  @Input() dataArray: ResData[] =[]

  @Output() userSelectEvent = new EventEmitter<object>()
  ngOnInit(): void {
    
  }

  ngAfterViewInit(): void {
  //  this._dataService.sharedData.subscribe(
  //     data => {
  //       console.log("data", data)
  //       this.dataArr = data
  //     }
      
  //   )

  console.log("from child",this.dataArray)
  this.receivedArr = this.dataArray

  }

  selectedRow(data:any){
    console.log("row", data)
    this.userSelectEvent.emit(data)
  }



}
