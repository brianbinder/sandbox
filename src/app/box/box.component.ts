import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: '[box]',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.scss']
})
export class BoxComponent {
  @Input() width;
  @Input() height;
  @Input() color;
  setHeight;
  setWidth;
  x;
  y;

  constructor() { }

  ngOnChanges() {
    
    // this.setWidth = Math.min(this.width, this.height);
    // this.setHeight = Math.min(this.width, this.height);
    // this.x = (this.width - this.setWidth) / 2;
    // this.y = (this.height - this.setHeight) / 2;
  }

}
