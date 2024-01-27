import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // providers:[UserService]
})
export class AppComponent implements OnInit{
  activeUsers:string[]=[];
  inactiveUsers:string[]=[];
  title = 'service-assignment';
  constructor(private userService:UserService){}
  ngOnInit(){
      this.activeUsers=this.userService.activeUsers;
      this.inactiveUsers=this.userService.inactiveUsers;
  }

}
