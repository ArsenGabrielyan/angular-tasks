import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from "@angular/common/http"
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AccTypeDirective } from './directive/acc-type.directive';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { FormsModule } from '@angular/forms';
import { TestComponent } from './components/test/test.component';
import { NgxsModule } from '@ngxs/store';
import { ZooState } from './store/animals.state';
import { RouteHandler } from './store/RouteHandler';

export function noop(){
  return function(){}
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AccTypeDirective,
    NotFoundComponent,
    HomepageComponent,
    TestComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    NgxsModule.forRoot([ZooState])
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: noop,
      deps: [RouteHandler],
      multi: true
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
