import { Component} from '@angular/core'; 

@Component({
  selector : 'app-root',
  template : `
    <div><h1>{{title}}</h1>
      <app-players></app-players>
    </div>
  `
})
export class AppComponent {
  title : string = 'Tennis Player Stats';
}