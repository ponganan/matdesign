import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

//import Toggle Material 
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
//import Input Material 
import { MatInputModule } from '@angular/material/input';
//import select Material
import { MatSelectModule } from '@angular/material/select';
//import datepicker Material
import { MatDatepickerModule } from '@angular/material/datepicker';
//import datepicker Material have to import MatMomentDateModule
// and import to project 
// ng add @angular/material-moment-adapter
import { MatMomentDateModule } from '@angular/material-moment-adapter';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //import Toggle Material
    MatSlideToggleModule,
    //import Input Material
    MatInputModule,
    //import select Material
    MatSelectModule,
    //import datepicker Material
    MatDatepickerModule,
    //import datepicker Material have to import MatMomentDateModule
    MatMomentDateModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
