import { Component,OnInit} from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {
  users:string[];
 constructor(private userService:UserService){

 }

 ngOnInit(){
     this.users=this.userService.activeUsers;
 }
  setToInactive(id:number){
     this.userService.setUserToInactive(id);
  }

}
