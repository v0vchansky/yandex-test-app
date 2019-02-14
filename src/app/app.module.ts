// Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { FormsModule } from '@angular/forms';

// Components
import { AppComponent } from './app.component';
import { MainPageComponent } from './containers/main-page-container/main-page.component';
import { DepartingFlightsComponent } from './containers/departing-flights-container/departing-flights.component';
import { FlightCardComponent } from './components/flight-card-component/flight-card.component';
import { HeaderSearchComponent } from './components/header-search-component/headet-search.component';
import { ArrivingFlightsComponent } from './containers/arriving-flights-container/arriving-flights.component';
import { DelayedFlightsComponent } from './containers/delayed-flights-container/delayed-flights.component';

// Reducers
import { flightReducer } from './reducers/flights.reducer';

const appRoutes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'departing', component: DepartingFlightsComponent },
  { path: 'arriving', component: ArrivingFlightsComponent },
  { path: 'delayed', component: DelayedFlightsComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    DepartingFlightsComponent,
    FlightCardComponent,
    HeaderSearchComponent,
    ArrivingFlightsComponent,
    DelayedFlightsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    StoreModule.forRoot({flights: flightReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
