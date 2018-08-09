import { Component} from '@angular/core'; 

@Component({
  selector : 'app-root',
  template : `
  <nav>
  <h2>{{title}} </h2>
  <ul>
    <li><a [routerLink]="['/dashboard']" >Dashboard</a></li>
    <li><a [routerLink]="['/players']">Players</a></li>
  </ul>
  <div class='container'> 
    <router-outlet></router-outlet>
  </div>
</nav>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title : string = 'Tennis Player Stats';
}