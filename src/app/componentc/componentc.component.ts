import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-componentc',
  templateUrl: './componentc.component.html',
  styleUrls: ['./componentc.component.scss']
})
export class ComponentcComponent implements OnInit {
  /*input from parent component as output of input operation */
@Input() outputA:any;
  constructor() { }

  ngOnInit(): void {
  }
  output:number;

}
