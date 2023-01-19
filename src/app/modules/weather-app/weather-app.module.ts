import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherAppComponent } from './weather-app.component';
import { WeatherAppRoutingModule } from './weather-app-routing.module';

@NgModule({
  declarations: [WeatherAppComponent],
  imports: [
    CommonModule,
    WeatherAppRoutingModule
  ]
})
export class WeatherAppModule { }
