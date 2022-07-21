import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { IonContent } from "@ionic/angular";
import { ClientMicroNodeService } from 'src/app/infraestructure/driven-adapter/clientMicroNode.service';

@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.page.html',
  styleUrls: ['./login-view.page.scss'],
})
export class LoginViewPage implements OnInit {

  @ViewChild('content', { static: false }) content;

  ionicForm: FormGroup;
  
  constructor(
    public formBuilder: FormBuilder,
    private clienMService : ClientMicroNodeService,
    private router:Router
  ) { 
    this.ionicForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.minLength(2)]],
      password: ['',[Validators.required]]
   })
  }
  get email(){
    return this.ionicForm.get('email')
  }


  get password(){
    return this.ionicForm.get('password')
  }

  setFocus(){
    this.content.scrollToBottom(300);
  }

  ionViewDidEnter(){
    this.setFocus();
  }

  submit() {

    let form:any = [{email:this.ionicForm.value.email, password:this.ionicForm.value.password}]

    this.clienMService.authClient(form).subscribe(
      result => {
        console.log(result)
        
      }
    )    
  }
  goToRoomList(){
    this.router.navigate(['/rooms-list'])
  }

  

  ngOnInit() {
    
  }

}
