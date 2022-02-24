import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MixedColorList } from 'src/app/data/mixed-color-list.data';

@Component({
  selector: 'app-configuration-screen',
  templateUrl: './configuration-screen.component.html',
  styleUrls: ['./configuration-screen.component.scss']
})
export class ConfigurationScreenComponent {

  showFlasher = false;
  frequency = "0";
  isSolid = true;
  selectedColor = "#ffffff"
  
  startFlash() {
    this.showFlasher = true;
  }
  closeFlash(showFlasher: boolean) {
    this.showFlasher = showFlasher;
  }

  solidColors () {
    this.isSolid = true;
  }
  mixedColors () {
    this.isSolid = false;
  }

}
