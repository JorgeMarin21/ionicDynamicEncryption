
import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';

/*
  Generated class for the LocalDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LocalDataProvider {
  dataList = [];

  constructor(public storage: Storage) {
    this.loadData();
  }

  async saveData(data) {
    const dataJson = {key: data.key, value: data.value};
    this.dataList.unshift(dataJson);
    await this.storage.set('data', this.dataList);
  }

  async loadData() {
    const data = await this.storage.get('data');
    this.dataList = data || [];
    return this.dataList;
  }

  // public encrypt(text: string) {
  //   // return CryptoJS.AES.encrypt(text, this.key, { iv: this.iv }).toString();
  // }

  // public decrypt(text: string) {
  //   //  return CryptoJS.AES.decrypt(text, this.key, { iv: this.iv }).toString(CryptoJS.enc.Utf8);
  // }



}
