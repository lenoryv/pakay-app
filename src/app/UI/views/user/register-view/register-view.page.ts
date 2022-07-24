import { ClientMicroNodeService } from './../../../../infraestructure/driven-adapter/clientMicroNode.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-view',
  templateUrl: './register-view.page.html',
  styleUrls: ['./register-view.page.scss'],
})
export class RegisterViewPage implements OnInit {
  registerForm: FormGroup;
  countries: any[]=[];
  constructor(
    public formBuilder: FormBuilder,
    private clienMService : ClientMicroNodeService
  ) {
    this.registerForm = this.formBuilder.group({
      dni: ['',[Validators.required]],
      name: ['',[Validators.required]],
      lastname: ['',[Validators.required]],
      email: ['', [Validators.required, Validators.minLength(2)]],
      phone: ['',[Validators.required]],
      country:['',[Validators.required]],
      password: ['',[Validators.required]],
      conf_password:['',[Validators.required]],
   })
   }
   get dni(){
    return this.registerForm.get('dni');
   }
   get name(){
    return this.registerForm.get('name');
   }
   get lastname(){
    return this.registerForm.get('lastname');
   }
   get email(){
    return this.registerForm.get('email');
   }
   get phone(){
    return this.registerForm.get('phone');
   }
   get country(){
    return this.registerForm.get('country');
   }
   get password(){
    return this.registerForm.get('password');
   }
   get conf_password(){
    return this.registerForm.get('conf_password');
   }
   
   submit() {
    let form:any = { DNI:this.registerForm.value.dni, name:this.registerForm.value.name, 
      lastname:this.registerForm.value.lastname, email:this.registerForm.value.email,
      phone:this.registerForm.value.phone, country:this.registerForm.value.country, 
      password:this.registerForm.value.password, conf_password:this.registerForm.value.conf_password}
      
      this.clienMService.createClient(form).subscribe(
        result => {
          console.log(result)
        }
      )   
  }

  ngOnInit() {
    this.clienMService.getCountry().subscribe(
      result => {
        this.countries = result.data;
      }
    )
  }
}
