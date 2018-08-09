import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PlayersComponent } from './players/players.component';
import { CountryFlagComponent } from './shared/country-flag.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InMemoryDataService } from './players/in-memory-data.service';

@NgModule({
  declarations: [
    AppComponent,
    PlayersComponent,
    CountryFlagComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false }),
    RouterModule.forRoot([
      { path: 'players', component: PlayersComponent },
      // { path: 'players/:id', component: PlayerDetailComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: '**', redirectTo: 'dashboard', pathMatch: 'full' }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
