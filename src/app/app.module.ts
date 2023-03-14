import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './modules/shared/shared.module';
import { PrinterModule } from './modules/printer/printer.module';
import { SupplyModule } from './modules/supply/supply.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    PrinterModule,
    SupplyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
