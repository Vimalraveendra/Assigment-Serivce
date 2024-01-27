import { Component,EventEmitter,Input, Output } from '@angular/core';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent {
  @Input() users:[]=[];
  @Output() userSetToActive=new EventEmitter<number>();

  setToActive(id:number){
    this.userSetToActive.emit(id)
 }
}
