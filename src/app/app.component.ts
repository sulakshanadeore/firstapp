import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
   templateUrl: './app.component.html',
//   template:`<h1>Hello Angular  17</h1>
// <h2>Welcome here</h2>
// <h2>Lets learn Angular</h2>
// <h1>{{title}}</h1>
// <h1>{{day}} </h1>
// If it is multi line use back tick
// Huge htl---then use template url `,
//template:'<h1>Hello use single quote for oneline html content</h1>',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'firstapp';
  day:string="Tuesday";
 
}
