import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-boxes',
  templateUrl: './boxes.component.html',
  styleUrls: ['./boxes.component.scss']
})
export class BoxesComponent implements OnInit {
  currentId = null;
  boxes = [];
  offsetX;
  offsetY;

  constructor() { }

  ngOnInit() {
    const height = window.innerHeight - 30;
    const width = 0.85 * window.innerWidth;
    for (let i = 0; i < 1000; i++) {
      const id = i;
      let x = Math.floor(Math.random() * width);
      let y = Math.floor(Math.random() * height);
      this.boxes[i] = { id, x, y };
    }  
  }

  mouseDown(event) {
    const id = Number(event.target.getAttribute('dataId'));
    const box = this.boxes[id];
    this.offsetX = box.x - event.clientX;
    this.offsetY = box.y - event.clientY;
    this.currentId = id;
  }

  mouseMove(event) {
    event.preventDefault();
    if (this.currentId !== null) {
      this.updateBox(this.currentId, event.clientX + this.offsetX, event.clientY + this.offsetY);
    }
  }

  mouseUp() {
    this.currentId = null;
  }

  updateBox(id, x, y) {
    const box = this.boxes[id];
    box.x = x;
    box.y = y;
  }

}
