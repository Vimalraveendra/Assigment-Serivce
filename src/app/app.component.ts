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
  inactiveUsers=['Chris','Manu'];
}
