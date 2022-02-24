import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ColorPickerModule } from 'ngx-color-picker';

import { AppComponent } from './app.component';
import { ConfigurationScreenComponent } from './components/configuration-screen/configuration-screen.component';
import { FlashScreenComponent } from './components/flash-screen/flash-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    ConfigurationScreenComponent,
    FlashScreenComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ColorPickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
