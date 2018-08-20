import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ParticipantsProvider } from "../../providers/participants/participants";
import { ContactPage } from "../contact/contact";
import { GlobalsProvider } from "../../providers/globals/globals";

/**
 * Generated class for the CourseParticipantsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-course-participants',
  templateUrl: 'course-participants.html',
})
export class CourseParticipantsPage {

  public contacts: any;

  constructor(public navCtrl: NavController, private participantsProvider: ParticipantsProvider, public globals: GlobalsProvider) {
    this.loadContacts();
  }

  loadContacts() {
    this.participantsProvider.all()
      .then(data => {
        this.contacts = data;
      });
  }

  showContact(id) {
    this.navCtrl.push(ContactPage, {
      contact: id
    });
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad CourseParticipantsPage');
  }

}
