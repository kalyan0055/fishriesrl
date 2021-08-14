import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  menu: string = null;
  constructor() { }

  ngOnInit(): void {
  }
  changeMenu(event) {
    // alert(event + 'ram')
    this.menu = event;
  }
}
