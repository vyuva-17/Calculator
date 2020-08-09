import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'calculator';
  output:number;
  /*object initial input data pass to childbcomponent */
 inputObj={
  firstInputA:5,
  secondInputA:5
 }
 /*calculation Functionality*/
 userInput(inputObjb){
   switch (inputObjb.event) {
    case ('add'):
    this.output = parseInt(inputObjb.firstInputB) + parseInt(inputObjb.secondInputB);
    break;
    case ('sub'):
      this.output = parseInt(inputObjb.firstInputB) - parseInt(inputObjb.secondInputB);
    break;
    case ('mul'):
      this.output = parseInt(inputObjb.firstInputB) * parseInt(inputObjb.secondInputB);
    break;
    case ('div'):
      this.output = parseInt(inputObjb.firstInputB) / parseInt(inputObjb.secondInputB);
    break;
 }

}
}
