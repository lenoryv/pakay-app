import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { IonContent } from "@ionic/angular";
import { ClientMicroNodeService } from 'src/app/infraestructure/driven-adapter/clientMicroNode.service';
import { ToastController } from '@ionic/angular';

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
    private router:Router,
    public toast: ToastController
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
    console.log(typeof this.ionicForm.value)
    this.clienMService.authClient(this.ionicForm.value).subscribe(
      result => {
        localStorage.setItem('user',result.user.id)
        console.log(result)
      }
    )    
  }

  goToRoomList(){
    // this.router.navigate(['/rooms-list'])
  }

  goToRegisterView(){
    this.router.navigate(['/register-view'])
  }
  

  ngOnInit() {
    
  }

}