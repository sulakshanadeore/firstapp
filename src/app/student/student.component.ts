import { Component } from '@angular/core';


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {
studentGrade:string="D";

studentName:string='Arti';

city:string[]=['Pune','Mumbai','Hyderabad','Bangalore','Chennai'];
selectedCity:string;
}
