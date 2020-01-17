import { Component, OnInit } from '@angular/core';

import { IHeader } from 'src/app/interfaces/iheader';

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.scss']
})
export class ReportesComponent implements OnInit {

  title: string;
  config: IHeader;
  productList: any;
  localList: any;

  constructor() {
    this.title = 'Reportes'
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
    this.productList = [
      {
        name: 'Mostaccioli',
        img: 'assets/images/food/mostaccioli.jpg'
      },
      {
        name: 'Salsa panna & prosciutto',
        img: 'assets/images/food/salsa_panna.jpg'
      },
      {
        name: 'Pesto',
        img: 'assets/images/food/pesto.jpg'
      },
      {
        name: 'Spaghetti',
        img: 'assets/images/food/spaghetti.jpg'
      },
      {
        name: 'Ravioli',
        img: 'assets/images/food/ravioli.jpg'
      },
    ];
    this.localList = [
      {
        name: 'Restaurante',
        img: 'assets/images/restaurant.jpg'
      }
    ];
  }

  ngOnInit() {
  }

}
