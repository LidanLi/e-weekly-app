import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CourseParticipantsPage } from './course-participants';
import { ContactsProvider } from "../../providers/contacts/contacts";
import { ContactPage } from "../contact/contact";
import { GlobalsProvider } from "../../providers/globals/globals";

@NgModule({
  declarations: [
    CourseParticipantsPage,
    ContactPage
  ],
  imports: [
    IonicPageModule.forChild(CourseParticipantsPage),
  ],
})
export class CourseParticipantsPageModule {}
