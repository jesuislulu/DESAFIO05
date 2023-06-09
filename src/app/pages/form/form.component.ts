import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ELEMENT_DATA } from 'src/app/constants/constant';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  nameControl = new FormControl('',[Validators.required, Validators.minLength(3),Validators.pattern(/^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]+$/)]);
  lastNameControl = new FormControl('',[Validators.required, Validators.minLength(3),Validators.pattern(/^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]+$/)]);

  registerForm: FormGroup;

  constructor(public formBuilder: FormBuilder, private router:Router) {

    this.registerForm = this.formBuilder.group({
      name: this.nameControl,
      lastName: this.lastNameControl
    });
  }


  onSubmit(): void {
    if (this.registerForm.valid) {
      const { name, lastName } = this.registerForm.value;
      const newFormat = {
        name,
        lastName,
        status: false
      }
      ELEMENT_DATA.push(newFormat);
      alert('Estudiante ha sido registrado exitosamente!');
      this.router.navigate(['/students']);
    } else {
      alert('El formulario no es inválido');
    }
  }
}

