import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {Platform} from "ionic-angular";
import {File} from "@ionic-native/file";


@Injectable()
export class GlobalsProvider {

  dataDirectory: string = '';
  api_key: string = 'ESfJjx7vJvAiJwAiSvirCIp3GUBZicAIdy7oNk3tVQGFLKECnVOPZ81iDg4c';
  //api_key: string = 'PumVWoQPPBqUsJ5Yd30Nix9Htjv7WV980LloAUtLocP9uA6bYtj2IK9tDERQ';
  trip_id: string = '15';
  api_url: string = 'http://10.48.23.172/api';
  // api_url: string = 'http://10.0.2.158/api';
  list: any;

  constructor(public http: Http, private platform: Platform, private file: File) {
    this.list = null;
    platform.ready().then(() => {
      if (localStorage.getItem('trip_id')) {
        this.trip_id = localStorage.getItem('trip_id');
      }
      // if we're on a device, use the app-writable data directory
      if (!this.platform.is('core')) {
        this.setDataDirectory(this.file.dataDirectory ? this.file.dataDirectory : '');
      }

      this.getELDPCourseList();
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

  getELDPCourseList() {
    if (this.list) {
      return Promise.resolve(this.list);
    }

    return new Promise(resolve => {
      this.http.get('http://10.48.23.172/api/publishlist')
        .map(res => res.json())
        .subscribe(data => {
          this.list = data;
          resolve(this.list);
        });
    })
  }
}
