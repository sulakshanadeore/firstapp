import { Component } from '@angular/core';
import { SiteUser} from 'src/SiteUser';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
//users:SiteUser[];//array declaration only
 
//initialization with declaration
users:SiteUser[]=
 [
  new SiteUser("jack","jack@123"),
  new SiteUser("Jim","jim@123"),
  new SiteUser("John","john@123")
];

userrole:string="";
//how to use ngIf structural directive, if means boolean so taken a boolean property
isLoggedIn:boolean=true;




fruits:string[]=["Apple","Banana","Kivi","Lichi","Grapes"];

}
