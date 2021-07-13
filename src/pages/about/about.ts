import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LocalDataProvider } from '../../providers/local-data/local-data';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  logs = [];
  constructor(public navCtrl: NavController, private localDataService: LocalDataProvider) {
  }

  async ionViewWillEnter() {
    this.logs = await this.localDataService.loadData();
    console.log(this.logs);
  }

}
