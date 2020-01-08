import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { NgxEchartsModule } from 'ngx-echarts';
import { BackComponent } from './back';
import { HelloWordComponent } from './hello-word';
import { PieLegendComponent } from './pie-legend';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BackComponent,
    HelloWordComponent,
    PieLegendComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxEchartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
