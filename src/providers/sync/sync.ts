import {Injectable} from '@angular/core';
import {Http,Response, RequestOptions, Headers, ResponseContentType} from '@angular/http';
import 'rxjs/add/operator/map';
import {FileTransfer, FileTransferObject} from "@ionic-native/file-transfer";
import {Zip} from "@ionic-native/zip";
import { GlobalsProvider } from "../globals/globals";
import { File } from '@ionic-native/file';
import { Observable } from 'rxjs/Observable';
import { saveAs } from 'file-saver/FileSaver';


@Injectable()
export class SyncProvider {
  

    constructor(public http: Http, private transfer: FileTransfer, private zip: Zip, private globals: GlobalsProvider, private file: File) {
     
    }

    syncData() {
      return new Promise(resolve => {
        //const fileTransfer: FileTransferObject = this.transfer.create();
        let update_url = this.globals.api_url + '/trips/' + this.globals.trip_id + '/download';
        //let update_url = this.globals.api_url + '/user';
        let headers = new Headers();
        //headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers.append('Authorization', 'Bearer ' + this.globals.api_key);

        let options = new RequestOptions({
          headers: headers,
          responseType: ResponseContentType.ArrayBuffer
        });

        //// let options:
        //fileTransfer.download(update_url, this.globals.dataDirectory + 'package.zip', false, { headers: { "Authorization": 'Bearer ' + this.globals.api_key }})
        //    .then((entry) => {

        //        this.zip.unzip(this.globals.dataDirectory + 'package.zip', this.globals.dataDirectory + 'data')
        //            .then((result) => {

        //                if (result === 0) console.log('SUCCESS extracted files to: ' + this.globals.dataDirectory);
        //                if (result === -1) console.log('FAILED');

        //                window.location.reload();
        //            });
        //    })
        
        this.http.get(update_url, options)
           .subscribe((res) => {
            console.log('start download:', res);
             const blob = new Blob([res._body], { type: "application/zip" });
            // saveAs(blob, "package.zip");
           const url = window.URL.createObjectURL(blob);
           window.open(url, '_blank');
            //console.log(res)
          }, () => {
            console.log("download completed.")
        });
      });
           
    }

  
  

}
