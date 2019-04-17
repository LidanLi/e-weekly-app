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

    private contactsUnSorted: any;
    private contactsSorted: any;

    constructor(public navCtrl: NavController, private contactsProvider: ContactsProvider, public globals: GlobalsProvider) {
        this.loadContacts();
    }

    loadContacts() {
        this.contactsProvider.all()
            .then(data => {
                this.contactsUnSorted = data;
                this.contactsSorted = this.contactsUnSorted.slice(0);
                this.contactsSorted.sort((leftSide, rightSide): number => {
                    if (leftSide.last_name < rightSide.last_name) return -1;
                    if (leftSide.last_name > rightSide.last_name) return 1;
                    return 0;
                });
                this.contacts = this.transform(this.contactsSorted, 'category');
                this.contacts.reverse();

            });
    }

    showContact(id) {
        this.navCtrl.push(ContactPage, {
            contact: id
        });
    }

    transform(collection: Array<any>, property: string): Array<any>{
        //prevent the application from breaking if teh array of objects doesn't exists yet
        if (!collection){
            return null;
        }

        const groupedCollection = collection.reduce((previous, current) => {
            if (!previous[current[property]]){
                previous[current[property]] = [current];
            } else {
                previous[current[property]].push(current);
            }

            return previous;
        }, {});

        //this will return an array of objects, each object containing a group of objects
        return Object.keys(groupedCollection).map(key => ({ key, value: groupedCollection[key]}));
    }

    convertCategory(category: string){
        let result: string;
        switch (category) {
            case "Speaker": {
                result = "Speakers";
                break;
            }
            case "Facilitator": {
                result = "Facilitators";
                break;
            }
            case "CSPS Staff": {
                result = "CSPS Staff";
                break;
            }
            default:
                result = "";
        }

        return result;
    }

}
