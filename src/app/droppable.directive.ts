import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appDroppable]'
})
export class DroppableDirective {
  private draggingElement: any;

  constructor() { }

  @HostListener('drop', ['$event'])
  onDrop(event) {
    const dropzone = event.target;
    const droppedElementId = event.dataTransfer.getData('text');
    const droppedElement = document.getElementById(droppedElementId) as any;

    droppedElement.style.top = event.clientY;
    droppedElement.style.left = event.clientX;
  }

}
