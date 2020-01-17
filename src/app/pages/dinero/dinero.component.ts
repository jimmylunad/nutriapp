import { Component, OnInit } from '@angular/core';

import { IHeader } from 'src/app/interfaces/iheader';

@Component({
  selector: 'app-dinero',
  templateUrl: './dinero.component.html',
  styleUrls: ['./dinero.component.scss']
})
export class DineroComponent implements OnInit {

  title: string;
  config: IHeader;

  constructor() {
    this.title = 'Dinero'
    this.config = {
      title: this.title,
      button: false,
      button_detail: {
        icon: 'check',
        action: true,
        route: '/perfil'
      },
      back: false
    }
  }

  ngOnInit() {
  }

}
