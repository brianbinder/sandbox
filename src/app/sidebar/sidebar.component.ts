import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  width;
  height;

  constructor() { }

  ngOnInit() {
    const list = document.getElementsByClassName('sidebar list')[0];
    console.log(list);
    //this.width = list.getBoundingClientRect().width;
    this.width = 90 - 16;
    const fontSize = window.getComputedStyle(list, null).getPropertyValue('font-size');
    this.height = parseFloat(fontSize) * 2;
  }

}
