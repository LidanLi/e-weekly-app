import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LinksProvider } from '../../providers/links/links';

/**
 * Generated class for the VideosLinksPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-videos-links',
  templateUrl: 'videos-links.html'
})
export class VideosLinksPage {

  public links: any;
  public keys: String[];

  constructor(public navCtrl: NavController, private linksProvider: LinksProvider) {
    this.loadLinks();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VideosLinksPage');
  }

  loadLinks() {
    this.linksProvider.all()
      .then(data => {
        this.links = data;
        this.keys = Object.keys(this.links);
      });
  }


  }
