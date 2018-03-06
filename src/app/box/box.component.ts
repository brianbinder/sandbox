import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: '[box]',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.scss']
})
export class BoxComponent implements OnInit{
  @Input() width;
  @Input() height;
  setHeight;
  setWidth;
  x;
  y;

  constructor() { }

  ngOnInit() {
    this.setWidth = Math.min(this.width, this.height);
    this.setHeight = Math.min(this.width, this.height);
    this.x = (this.width - this.setWidth) / 2;
    this.y = (this.height - this.setHeight) / 2;
  }



}
