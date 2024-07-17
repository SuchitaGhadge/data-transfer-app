import { AfterViewInit, Component, OnInit } from '@angular/core';
import {ResData} from '../../interfaces/res-data'
import { ChildComponent } from '../child/child.component';
// import { DataTransferService } from 'src/app/services/data-transfer.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})



export class ParentComponent implements OnInit, AfterViewInit {
  userName : string = ''
  dataArray:ResData[] = []
  isClicked:boolean = false
  // arrData:any
  constructor() { //in constructor public _dataService : DataTransferService
    this.dataArray = [
      {
        name: "Suchita",
        age: 28
      },
      {
        name: "abc",
        age: 27
      },
      {
        name : "def",
        age : 25
      }
    ]
  }

  ngOnInit(): void {
   
    // this._dataService.transferData(this.dataArray)
  }
  
  onClick(){
    this.isClicked = true

  }

  ngAfterViewInit(): void {
  }

  onUserSelect(data:any){
    console.log("parent", data)
    this.isClicked = false
  }
}
