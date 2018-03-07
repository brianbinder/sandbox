import { Component, OnInit } from '@angular/core';
import { allowDrop, drag, dropCopy } from '../utilities/dragDrop';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.scss']
})
export class CanvasComponent implements OnInit {
  allowDrop = allowDrop;
  elements: any[] = [];

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

  handleDrop(event) {
    event.preventDefault();
    let element;
    const data = JSON.parse(event.dataTransfer.getData("text"));
    const type = data.id.split(':')[0];
    const id = data.id.split(':')[1];
    if (type !== 'canvasElement') {
      element = {
        type,
        id: `canvasElement:${Math.floor(Math.random() * 1000000)}`,
        color: randomColor(),
        width: 20,
        height: 20,
        x: '40px',
        y: '40px'
      };
      this.elements.push(element);
    } else {
      element = this.elements.filter(element => element.id.split(':')[1] === id)[0];
      element.x = `${Number(element.x.slice(0, -2)) + event.clientX - data.xStart}px`;
      element.y = `${Number(element.y.slice(0, -2)) + event.clientY - data.yStart}px`;
    }
  }

}

function randomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`
}

