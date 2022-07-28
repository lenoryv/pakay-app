import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-confirm-payment',
  templateUrl: './confirm-payment.page.html',
  styleUrls: ['./confirm-payment.page.scss'],
})
export class ConfirmPaymentPage implements OnInit {
  
  thisBooking: any;
  constructor(
    private router:Router, 
    private activatedRoute:ActivatedRoute,

  ) {
    this.thisBooking = this.router.getCurrentNavigation().extras.state;
    console.log(this.thisBooking)
  }

  ngOnInit() {
    
  }

}
