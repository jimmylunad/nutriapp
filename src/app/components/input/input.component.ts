import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  @Input('config') root: any;
  @Input() parentGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ){}

  f(control) {
    return this.parentGroup.get(control);
  }

  ngOnInit() {}
}
