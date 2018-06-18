import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BatteryStatus } from '@ionic-native/battery-status';
import { LoadingController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  statusBattery: number = 20;
  isPlugged: Boolean;
  subscription: any;

  constructor(
    public navCtrl: NavController,
    private batteryStatus: BatteryStatus,
    public loadingCtrl: LoadingController
  ) {
  }

  async ionViewDidLoad() {
    const loader = this.loadingCtrl.create({
      content: "Carregando dados do dispositivo..."
    });
    loader.present();

    this.subscription = await this.batteryStatus.onChange().subscribe(status => {
      this.statusBattery = status.level;
      this.isPlugged = status.isPlugged;
      console.log(status);
    });

    loader.dismiss();
  }

  ionViewDidLeave() {
    this.subscription.unsubscribe();
  }

}
