import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import {DemoMaterialModule} from './material-module';
import { FormsModule } from '@angular/forms';
import { environment } from '../environments/environment';
import { ComponentbComponent } from './componentb/componentb.component';
import { ComponentcComponent } from './componentc/componentc.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentbComponent,
    ComponentcComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    FormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
