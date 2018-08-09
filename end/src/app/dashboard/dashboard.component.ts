import { Component } from '@angular/core';

@Component({
  template:`
  <div style="background-color:whitesmoke;height:30px;font-size:20px;border-bottom-width:1px;border-bottom-style:solid;border-bottom-color:gray">{{pageTitle}}</div>
  <div style="margin:30px">This page lists the Top 10 players.</div>
  `
})
export class DashboardComponent {
  public pageTitle = 'Dashboard';
}