import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.css']
})
export class TopMenuComponent implements OnInit {
  @Output() leftMenu = new EventEmitter<string>() 
  constructor() { }

  ngOnInit(): void {
  }

  onMenuSelect(value:string){
    this.leftMenu.emit(value);
  }
}
