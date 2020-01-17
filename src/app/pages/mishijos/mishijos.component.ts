import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { IHeader } from 'src/app/interfaces/iheader';

@Component({
  selector: 'mishijos',
  templateUrl: './mishijos.component.html',
  styleUrls: ['./mishijos.component.scss']
})
export class MishijosComponent implements OnInit {
  title: string;
  config: IHeader;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.title = 'Mis Hijos'
    this.config = {
      title: this.title,
      button: true,
      button_detail: {
        icon: 'settings_applications',
        action: false,
        route: '/perfil',
      },
      back: false
    }
  }

  ngOnInit() {
  }

  goAction($event) {
    if(!$event) this.router.navigate(['nuevo-hijo']);
    console.log($event)
  }

}
