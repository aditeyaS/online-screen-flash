import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { interval, Observable } from 'rxjs'
import { MixedColorList } from 'src/app/data/mixed-color-list.data';

@Component({
  selector: 'app-flash-screen',
  templateUrl: './flash-screen.component.html',
  styleUrls: ['./flash-screen.component.scss']
})
export class FlashScreenComponent implements OnInit {

  @Input() isSolid: boolean = true;
  @Input() color: string = "";
  @Input() frequency: string = "500";
  @Output() close: EventEmitter<boolean> = new EventEmitter();

  currentColor = ""

  mixedColorList = MixedColorList


  index = 0;
  switchColor = true;
  

  ngOnInit(): void {
    document.getElementById("flash-screen")?.requestFullscreen
    if (this.isSolid) {
      if (this.frequency === '0') {
        this.currentColor = this.color;
      } else {
        interval(+this.frequency).subscribe(() => {
          this.currentColor = this.switchColor ? this.color : "#000000"
          this.switchColor = !this.switchColor
        });
      }
    } else {
      if (this.frequency === '0') {
        this.currentColor = this.mixedColorList[this.index];
      } else {
        interval(+this.frequency).subscribe(() => {
          this.currentColor = this.mixedColorList[this.index];
          this.index++;
          if (this.index === this.mixedColorList.length) this.index = 0;
        });
      }
    }
  }

  closeFlash() {
    this.close.emit(false);
  }

}
