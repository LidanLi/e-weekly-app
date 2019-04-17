import {Component} from '@angular/core';
import {NavController, NavParams, LoadingController, Platform, AlertController} from 'ionic-angular';
import {SyncProvider} from "../../providers/sync/sync";
import { GlobalsProvider } from "../../providers/globals/globals";

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  public trip_id: any;
  public lists: any = [];
  public CourseList: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private syncProvider: SyncProvider, public loadingCtrl: LoadingController, private platform: Platform, public alertCtrl: AlertController, public globals: GlobalsProvider) {
    platform.ready().then(() => {
      this.trip_id = globals.getTripId();
      this.loadELDPList();
    })

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  syncData() {

    let loader = this.loadingCtrl.create({
      content: "Attempting to sync data... if the application does not refresh after this message disappears, there may have been a network issue",
      duration: 10000
    });
    loader.present();

    this.syncProvider.syncData()
        .then(data => {
          loader.dismiss();
        });
  }

  checkBrowser(loader) {
    if (!this.platform.is('ios')) {
      loader.dismiss();
      let alert = this.alertCtrl.create({
        title: 'Unable to sync',
        subTitle: 'Cannot sync when in browser',
        buttons: ['Ok']
      });
      alert.present();
    }
  }

  setTrip() {
    this.globals.setTripId(this.CourseList);
    this.syncData();
  }
  loadELDPList() {
    this.globals.getELDPCourseList()
        .then(data => {
          this.lists = data;
        });

  }

  goToTabPage(trip_id){

    this.globals.setTripId(trip_id);
    this.syncData();

  }

}
