import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClientGateway } from './domain/models/gateway/client-gateway';
import { ClientMicroNodeService } from './infraestructure/driven-adapter/clientMicroNode.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RoomsService } from './infraestructure/driven-adapter/rooms.service';
import { RoomsGateway } from './domain/models/gateway/rooms-gateway';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule, 
    IonicModule.forRoot({}), 
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: ClientGateway, useClass: ClientMicroNodeService},
    {provide: RoomsGateway, useClass: RoomsService}
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}