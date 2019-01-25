import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {ParticipantsProvider} from "../../providers/participants/participants";
import {GlobalsProvider} from "../../providers/globals/globals";

@Component({
    selector: 'page-participant',
    templateUrl: 'participant.html',
})
export class ParticipantPage {

    public participant: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private participantsProvider: ParticipantsProvider, public globals: GlobalsProvider) {
        this.loadContact();
    }

    loadContact() {
        this.participantsProvider.get(this.navParams.get('participant'))
          .then(data => {
            this.participant = data;
            });
    }

}
