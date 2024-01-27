import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'service-assignment';
  activeUsers=[
    'Max',
    'Anna'
  ];
  inactiveUsers=['Chris','John'];

 onSetUserToInactive(id:number){
     this.inactiveUsers.push(this.activeUsers[id]);
     this.activeUsers.splice(id,1);
     
 }
 onSetUserToActive(id:number){
  this.activeUsers.push(this.inactiveUsers[id])
  this.inactiveUsers.splice(id,1);
 
}
}
