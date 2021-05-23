import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portifolio';
  showFiller = false;

  itenSkill = "HTML5";
  progressStatus = "MASTER!";
  iconName = 'fab fa-html5 fa-1x';
  
  
}