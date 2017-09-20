import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  arr:"number";
 constructor(){
  var arr = [0, 1, 2, 3].reverse(); 
  console.log("Reversed array is : " + arr );
 } 
}
    