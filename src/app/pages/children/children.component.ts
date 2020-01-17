import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router, ActivatedRoute, Params } from '@angular/router';

// validate
import { ValidationService } from 'src/app/validations/validation.service'

import { IHeader } from 'src/app/interfaces/iheader';

@Component({
  selector: 'app-children',
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.scss']
})
export class ChildrenComponent implements OnInit {
  form: FormGroup;
  title: string;
  config: IHeader;
  inputs: any;

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.title = 'Agregar hijo'
    this.config = {
      title: this.title,
      button: true,
      button_detail: {
        icon: 'check',
        action: true,
        route: '/perfil'
      },
      back: true
    }
    this.inputs = [
      { id:'name', label: 'Nombre', type: 'text', icon: '' },
      { id:'lastname', label: 'Apellido', type: 'text', icon: '' },
      { id:'email', label: 'Correo', type: 'email', icon: '' },
      { id:'date', label: 'Fecha de nacimiento', type: 'date', icon: '' },
      { id:'sex', label: 'Sexo', type: 'select', icon: '', options: [{name: 'Hombre', value: 'man'},{name: 'Mujer', value: 'woman'}] },
      { id:'allergy', label: 'Alergias', type: 'text', icon: '' },
    ];
    this.form = this.formBuilder.group({
      name: ["", Validators.required],
      lastname: ["", Validators.required],
      email: ["", [Validators.required, ValidationService.emailValidator]],
      date: ["", Validators.required],
      sex: ["", Validators.required],
      allergy: ["", Validators.required]
    });
  }

  ngOnInit() {
  }

  goAction($event) {
    if($event) {
      console.log('children')
    }
  }

  onSubmit() {
    console.log('hola')
  }

}
