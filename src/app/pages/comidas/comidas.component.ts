import { Component, OnInit } from '@angular/core';

import { IHeader } from 'src/app/interfaces/iheader';

@Component({
  selector: 'app-comidas',
  templateUrl: './comidas.component.html',
  styleUrls: ['./comidas.component.scss']
})
export class ComidasComponent implements OnInit {

  title: string;
  config: IHeader;
  tabs: any[];
  tab_selected: number;

  constructor() {
    this.title = 'Comidas'
    this.config = {
      title: this.title,
      button: false,
      button_detail: {
        icon: '',
        action: false,
        route: ''
      },
      back: false
    }
    this.tabs = [
      { id: 1, name:'Tab1', type:'tab1' },
      { id: 2, name:'Tab2', type:'tab2' }
    ]
    this.tab_selected = 1;
  }

  ngOnInit() {
  }

}
