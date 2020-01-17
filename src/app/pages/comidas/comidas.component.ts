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
  categoryList: any;
  productblockList: any;

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
    this.categoryList = [
      { name: 'Subs & Salads', image: 'assets/images/food/mostaccioli.jpg' },
      { name: 'Pasta & Pizza', image: 'assets/images/food/salsa_panna.jpg' },
      { name: 'Favourites', image: 'assets/images/food/pesto.jpg' },
      { name: 'Simply > to go', image: 'assets/images/food/spaghetti.jpg' },
      { name: 'Food truck 1', image: 'assets/images/food/ravioli.jpg' },
    ]
    this.productblockList = [
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
  }

  ngOnInit() {
  }

}
