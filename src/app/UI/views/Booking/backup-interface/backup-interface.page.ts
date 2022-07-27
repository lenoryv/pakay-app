import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-backup-interface',
  templateUrl: './backup-interface.page.html',
  styleUrls: ['./backup-interface.page.scss'],
})
export class BackupInterfacePage implements OnInit {

  constructor(
    private router: Router
  ) { }

  goPayment(){
    this.router.navigate(['/confirm-payment'])
    console.log("********")
  }
  goBack(){
    this.router.navigate(['/login-view']);
  }

  ngOnInit() {
  }

}
