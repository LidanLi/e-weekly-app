import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {ContactsProvider} from "../../providers/contacts/contacts";
import {ContactPage} from "../contact/contact";
import {GlobalsProvider} from "../../providers/globals/globals";

@Component({
    selector: 'page-contacts',
    templateUrl: 'contacts.html'
})
export class ContactsPage {

  public contacts: any;
  public contactsUnSorted: any;

    constructor(public navCtrl: NavController, private contactsProvider: ContactsProvider, public globals: GlobalsProvider) {
        this.loadContacts();
    }

    loadContacts() {
        this.contactsProvider.all()
          .then(data => {
            this.contacts = data;
              //this.contactsUnSorted = data;
              //this.contacts = this.contactsUnSorted.slice(0);
              //this.contacts.sort((leftSide, rightSide): number => {
              //  if (leftSide.last_name < rightSide.last_name) return -1;
              //  if (leftSide.last_name > rightSide.last_name) return 1;
              //  return 0;
              //});
            });
    }

    showContact(id) {
        this.navCtrl.push(ContactPage, {
            contact: id
        });
    }

}
