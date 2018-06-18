import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  statusBattery: number = 20;

  constructor(public navCtrl: NavController) {

  }

}
