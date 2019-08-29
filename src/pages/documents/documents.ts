import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {DocumentsProvider} from "@providers/documents/documents";
import { DocumentViewer } from '@ionic-native/document-viewer';
import {GlobalsProvider} from "@providers/globals/globals";
import {FileOpener} from "@ionic-native/file-opener";

@Component({
  selector: 'page-documents',
  templateUrl: 'documents.html'
})
export class DocumentsPage {

  public documents: any;
  public selected_document: any;
  public keys: String[];

  constructor(public navCtrl: NavController, private documentsProvider: DocumentsProvider, private document: DocumentViewer, private globals: GlobalsProvider, private fileOpener: FileOpener) {
    this.loadDocuments();
  }

  loadDocuments() {
    this.documentsProvider.all()
      .then(data => {
        this.documents = data;
        this.keys = Object.keys(this.documents);
      });
  }

  showDocument(id) {
    /*var options = {
        title: 'PDF'
    }*/

    this.documentsProvider.get(id)
      .then(data => {
        this.selected_document = data;
        let fileExtn = this.selected_document.file.split('.').reverse()[0];
        let fileMIMEType = this.getMIMEtype(fileExtn);
        //this.document.viewDocument(this.globals.dataDirectory + 'data/assets/' + this.selected_document.file, 'application/pdf', options);
        this.fileOpener.open(this.globals.dataDirectory + 'data/assets/' + this.selected_document.file, fileMIMEType)
          .then(()=> console.log('File is opened'))
          .catch(e => console.log('Error opening file', e));
      });
  }

  getMIMEtype(extn){
    let ext = extn.toLocaleLowerCase();
    let MIMETypes = {
      'pdf' : 'application/pdf',
      'docx':'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      'doc' : 'application/msword',
      'xls' : 'application/vnd.ms-excel',
      'xlsx': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      'ppt' : 'application/vnd.ms-powerpoint',
      'pptx': 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
    }
    return MIMETypes[ext];
  }
}
