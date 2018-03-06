import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.scss']
})
export class CanvasComponent implements OnInit {

  constructor() {
    window.addEventListener('resize', this.size);
  }

  ngOnInit() {
    this.size();
  }

  size() {
    let height = window.innerHeight;
    let width = 0.85 * window.innerWidth;
    const canvas = document.getElementsByClassName('canvas')[0] as HTMLElement;
    canvas.style.height = `${height - 30}px`;
    canvas.style.width = `${width}px`;
  }

}
