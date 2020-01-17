import { Component, Input, OnInit, Output, EventEmitter  } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'headerMain',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input('config') root: any;

  @Output() messageEvent = new EventEmitter<string>();

  constructor(
    private _location: Location
  ) { }

  ngOnInit() {
  }

  goBack() {
    this._location.back();
  }

  sendEmitter($event) {
    this.messageEvent.emit($event)
  }

}
