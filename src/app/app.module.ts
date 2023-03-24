import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TravelDetailsComponent } from './travel-details/travel-details.component';
import { CarouselDetailComponent } from './carousel-detail/carousel-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TravelDetailsComponent,
    CarouselDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
