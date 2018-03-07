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
    //let height = window.innerHeight;
    // let width = 0.85 * window.innerWidth;
    // const canvas = document.getElementsByClassName('canvas')[0] as HTMLElement;
    //canvas.style.height = `${height - 30}px`;
    // canvas.style.width = `${width}px`;
  }

  handleDrop(event) {
    event.preventDefault();
    const data = JSON.parse(event.dataTransfer.getData("text"));
    const type = data.id.split(':')[0];
    const id = data.id.split(':')[1];
    const moveX = event.clientX - data.xStart;
    const moveY = event.clientY - data.yStart;
    const element = this.elements.filter(element => element.id.split(':')[1] === id)[0];
    if (type !== 'canvasElement' && !type.includes('handle')) {
      //add an element to the canvas when it is dropped in from sidebar
      console.log('event: ', event);
      this.addElement(type, event.layerX, event.layerY);
    } else if (!type.includes('handle')) {
      //move and element when it's dragged
      element.x = `${Number(element.x.slice(0, -2)) + moveX}px`;
      element.y = `${Number(element.y.slice(0, -2)) + moveY}px`;     
    } else {
      //resize an element when a handlebar is dragged
      console.log('element: ', element);
      this.resize(element, data, moveX, moveY)
    }
  }

  resize(element, data, moveX, moveY) {
    let transformIndex;
    const xStart = Number(element.x.slice(0, -2));
    const yStart = Number(element.y.slice(0, -2));
    const xTransform = [ //[x, width]
      [1, -1], //topLeft
      [0, 1], //topRight
      [1, -1], //bottomLeft
      [0, 1] //bottomRight
    ];
    const yTransform = [ //[y, height]
      [1, -1], //topLeft
      [1, -1], //topRight
      [0, 1], //bottomLeft
      [0, 1] //bottomRight
    ];
    if (data.id.includes('topLeft')) transformIndex = 0;
    if (data.id.includes('topRight')) transformIndex = 1;
    if (data.id.includes('bottomLeft')) transformIndex = 2;
    if (data.id.includes('bottomRight')) transformIndex = 3;
    element.x = xStart + xTransform[transformIndex][0] * moveX + 'px';
    element.y = yStart + yTransform[transformIndex][0] * moveY + 'px';
    element.width = element.width + xTransform[transformIndex][1] * moveX;
    element.height = element.height + yTransform[transformIndex][1] * moveY;

  }

  addElement(type, x, y) {
    this.elements.push({
      type,
      id: `canvasElement:${Math.floor(Math.random() * 1000000)}`,
      color: randomColor(),
      width: 40,
      height: 40,
      x: x + 'px',
      y: y + 'px'
    });
  }

}

function randomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`
}

