import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-view',
  templateUrl: './register-view.page.html',
  styleUrls: ['./register-view.page.scss'],
})
export class RegisterViewPage implements OnInit {

  public registerForm = new FormGroup({
    register_data: new FormGroup({
      dni: new FormControl(''),
      name: new FormControl(''),
      lastname: new FormControl(''),
      email: new FormControl(''),
      phone: new FormControl(''),
      country: new FormControl(''),
      password: new FormControl(''),
      conf_password: new FormControl('')
    })
  })

  constructor() { }

  ngOnInit() {
  }

  onSubmit(): void{
    console.log('Form ->')
  }
  submit(){
    this.registerForm.setValue;
    console.log();
  }
}
