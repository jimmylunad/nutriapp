import { Component, OnInit } from '@angular/core';

import { IHeader } from 'src/app/interfaces/iheader';

@Component({
  selector: 'app-detail-diner',
  templateUrl: './detail-diner.component.html',
  styleUrls: ['./detail-diner.component.scss']
})
export class DetailDinerComponent implements OnInit {

  title: string;
  config: IHeader;

  constructor() {
    this.title = 'Historial de consumo'
    this.config = {
      title: this.title,
      button: false,
      button_detail: {
        icon: 'check',
        action: true,
        route: '/perfil'
      },
      back: true
    }
  }

  ngOnInit() {
  }

}
