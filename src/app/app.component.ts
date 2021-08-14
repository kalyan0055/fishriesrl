import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {RouterOutlet} from '@angular/router'

@Component({
  selector: 'app-root',
  template  : '<router-outlet></router-outlet>',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'recall-angular';
}
