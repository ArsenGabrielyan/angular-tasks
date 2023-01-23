import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherAppComponent } from './weather-app.component';
import { WeatherAppRoutingModule } from './weather-app-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [WeatherAppComponent],
  imports: [
    CommonModule,
    FormsModule,
    WeatherAppRoutingModule
  ]
})
export class WeatherAppModule { }
