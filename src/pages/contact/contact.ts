import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UniqueDeviceID } from '@ionic-native/unique-device-id';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage implements OnInit {
  uid = '';

  constructor(public navCtrl: NavController, private uniqueDeviceID: UniqueDeviceID) {

  }

  async ngOnInit() {
    this.uniqueDeviceID.get().then((uuid: any) => {
      this.uid = uuid;
    })
    .catch((error: any) => console.log(error));
  }

}
