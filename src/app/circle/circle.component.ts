import { Component, OnChanges, Input } from '@angular/core';

@Component({
  selector: '[circle]',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.scss']
})
export class CircleComponent {
  @Input() height;
  @Input() width;
  @Input() color;
  cx;
  cy;
  r;

  constructor() { }

  ngOnChanges() {
    this.r = Math.min(this.height, this.width) / 2 - 1;
    this.cx = this.width / 2;
    this.cy = this.height / 2;
  }

}
