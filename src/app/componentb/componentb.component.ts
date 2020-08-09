import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
@Component({
  selector: 'app-componentb',
  templateUrl: './componentb.component.html',
  styleUrls: ['./componentb.component.scss']
})
export class ComponentbComponent implements OnInit {
  inputObjB:any;
  firstInputB:number;
  secondInputB:number;
  event:any;
  /*input and output data from parent to child component */
  @Input() inputObj:any;
  @Output() public getUserData = new EventEmitter<string>();
  constructor() {

  }

  ngOnInit(): void {
  }
/*event emiting functionality with componentb data */
  eventPassing(event){
    this.inputObjB={
      firstInputB:this.inputObj.firstInputA,
      secondInputB:this.inputObj.secondInputA,
      event:event
    }
    this.getUserData.emit(this.inputObjB);
  }

}
