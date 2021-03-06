import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {Platform} from "ionic-angular";
import {File} from "@ionic-native/file";

@Injectable()
export class GlobalsProvider {

  dataDirectory: string = '';
  api_key: string = '';
  trip_id: string = '';
  api_url: string = 'https://ebrief.csps-efpc.net/api';
  list: any;
  trip_owner: string = '';

  constructor(public http: Http, private platform: Platform, private file: File) {
    this.list = null;
    platform.ready().then(() => {
      if (localStorage.getItem('trip_id')) {
        this.trip_id = localStorage.getItem('trip_id');
      }
      if (
        localStorage.getItem('trip_owner')) {
        this.trip_owner = localStorage.getItem('trip_owner');
      }
      // if we're on a device, use the app-writable data directory
      if (!this.platform.is('core')) {
        this.setDataDirectory(this.file.dataDirectory ? this.file.dataDirectory : '');
      }
    });
  }

  setDataDirectory(value) {
    this.dataDirectory = value;
  }

  getDataDirectory() {
    return this.dataDirectory;
  }

  setTripId(value) {
    localStorage.setItem('trip_id', value);
    this.trip_id = value;
  }

  getTripId() {
    return this.trip_id;
  }
  setTripOwner(value) {
    localStorage.setItem('trip_owner', value);
    this.trip_owner = value;
  }

  getTripOwner() {
    return this.trip_owner;
  }
  getCourseList() {
    if (this.list) {
      return Promise.resolve(this.list);
    }
    console.log("api url = " + this.api_url + '/trips/' + this.trip_owner);
    return new Promise(resolve => {
      this.http.get(this.api_url + '/trips/'+ this.trip_owner)
        .map(res => res.json())
        .subscribe(data => {
          this.list = data;
          resolve(this.list);

        });
    })
  }
}
