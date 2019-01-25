import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ParticipantsProvider } from "../../providers/participants/participants";
import { ParticipantPage } from "../participant/participant";
import { GlobalsProvider } from "../../providers/globals/globals";

/**
 * Generated class for the CourseParticipantsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

//@IonicPage()
@Component({
  selector: 'page-course-participants',
  templateUrl: 'course-participants.html',
})
export class CourseParticipantsPage {

  public participants: any;
  public contactsUnSorted: any;

  constructor(public navCtrl: NavController, private participantsProvider: ParticipantsProvider, public globals: GlobalsProvider) {
    this.loadContacts();
  }

  loadContacts() {
    this.participantsProvider.all()
      .then(data => {
        this.participants = data;
        //this.participants = this.contactsUnSorted.slice(0);
        //this.participants.sort((leftside, rightside): number => {
        //  if (leftside.last_name < rightside.last_name) return -1;
        //  if (leftside.last_name > rightside.last_name) return 1;
        //  return 0;
       // });
      });
  }

  showContact(id) {
    this.navCtrl.push(ParticipantPage, {
      participant: id
    });
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad CourseParticipantsPage');
  }

}
