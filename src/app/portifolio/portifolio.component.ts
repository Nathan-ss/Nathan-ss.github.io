import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

@Component({
  selector: 'app-portifolio',
  templateUrl: './portifolio.component.html',
  styleUrls: ['./portifolio.component.scss']
})
export class PortifolioComponent implements OnInit {
  title = 'portifolio';
  showFiller = false;
  itenSkill = "HTML5";
  progressStatus = "MASTER!";
  iconName = 'fab fa-html5';

  
  constructor() { }

  ngOnInit(): void {
  }

  ichange (name:string,level:string,icon:string){
    this.iconName = icon;
    this.progressStatus = level+"!";
    this.itenSkill = name.toUpperCase();
  }
}
