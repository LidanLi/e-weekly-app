webpackJsonp([1],{

/***/ 10:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_file__ = __webpack_require__(45);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var GlobalsProvider = /** @class */ (function () {
    function GlobalsProvider(http, platform, file) {
        var _this = this;
        this.http = http;
        this.platform = platform;
        this.file = file;
        this.dataDirectory = '';
        this.api_key = 'ESfJjx7vJvAiJwAiSvirCIp3GUBZicAIdy7oNk3tVQGFLKECnVOPZ81iDg4c';
        this.trip_id = '1';
        this.api_url = 'https://ecourse.csps-efpc.net/api';
        this.list = null;
        platform.ready().then(function () {
            if (localStorage.getItem('trip_id')) {
                _this.trip_id = localStorage.getItem('trip_id');
            }
            // if we're on a device, use the app-writable data directory
            if (!_this.platform.is('core')) {
                _this.setDataDirectory(_this.file.dataDirectory ? _this.file.dataDirectory : '');
            }
            _this.getELDPCourseList();
        });
    }
    GlobalsProvider.prototype.setDataDirectory = function (value) {
        this.dataDirectory = value;
    };
    GlobalsProvider.prototype.getDataDirectory = function () {
        return this.dataDirectory;
    };
    GlobalsProvider.prototype.setTripId = function (value) {
        localStorage.setItem('trip_id', value);
        this.trip_id = value;
    };
    GlobalsProvider.prototype.getTripId = function () {
        return this.trip_id;
    };
    GlobalsProvider.prototype.getELDPCourseList = function () {
        var _this = this;
        if (this.list) {
            return Promise.resolve(this.list);
        }
        return new Promise(function (resolve) {
            _this.http.get(_this.api_url + '/publishlist')
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.list = data;
                resolve(_this.list);
            });
        });
    };
    GlobalsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_file__["a" /* File */]])
    ], GlobalsProvider);
    return GlobalsProvider;
}());

//# sourceMappingURL=globals.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__globals_globals__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ContactsProvider = /** @class */ (function () {
    function ContactsProvider(http, globals) {
        this.http = http;
        this.globals = globals;
        this.data = null;
    }
    ContactsProvider.prototype.all = function () {
        var _this = this;
        if (this.data) {
            return Promise.resolve(this.data);
        }
        return new Promise(function (resolve) {
            _this.http.get(_this.globals.dataDirectory + 'data/people.json')
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.data = data;
                resolve(_this.data);
            });
        });
    };
    ContactsProvider.prototype.get = function (id) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.globals.dataDirectory + 'data/people/' + id + '.json')
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.data = data;
                resolve(_this.data);
            });
        });
    };
    ContactsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_3__globals_globals__["a" /* GlobalsProvider */]])
    ], ContactsProvider);
    return ContactsProvider;
}());

//# sourceMappingURL=contacts.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_contacts_contacts__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_globals_globals__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ContactPage = /** @class */ (function () {
    function ContactPage(navCtrl, navParams, contactsProvider, globals) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.contactsProvider = contactsProvider;
        this.globals = globals;
        this.loadContact();
    }
    ContactPage.prototype.loadContact = function () {
        var _this = this;
        this.contactsProvider.get(this.navParams.get('contact'))
            .then(function (data) {
            _this.contact = data;
        });
    };
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"/Users/webdev/Desktop/Desktop/ecourse/src/pages/contact/contact.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title *ngIf="contact">{{ contact.name }}</ion-title>\n    </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n    <ion-card *ngIf="contact">\n        <div class="contact-header">\n            <div *ngIf="contact.image" class="contact-photo">\n                <img src="{{ globals.dataDirectory }}data/assets/{{ contact.image }}">\n            </div>\n            <div class="contact-info">\n                <h1>{{ contact.name }}</h1>\n                <p><strong>{{ contact.title }}</strong></p>\n            </div>\n        </div>\n        \n        <ion-card-content>\n            <ul>\n                <li *ngIf="contact.telephone"><ion-icon name="ios-call-outline"></ion-icon> {{ contact.telephone }}</li>\n                <li *ngIf="contact.email"><ion-icon name="ios-mail-outline"></ion-icon> {{ contact.email }}</li>\n            </ul>\n\n            <div class="body" [innerHTML]="contact.body_html"></div>\n        </ion-card-content>\n    </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/webdev/Desktop/Desktop/ecourse/src/pages/contact/contact.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_contacts_contacts__["a" /* ContactsProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_globals_globals__["a" /* GlobalsProvider */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DocumentsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__globals_globals__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DocumentsProvider = /** @class */ (function () {
    function DocumentsProvider(http, globals) {
        this.http = http;
        this.globals = globals;
        this.data = null;
    }
    DocumentsProvider.prototype.all = function () {
        var _this = this;
        if (this.data) {
            return Promise.resolve(this.data);
        }
        return new Promise(function (resolve) {
            _this.http.get(_this.globals.dataDirectory + 'data/documents.json')
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.data = data;
                resolve(_this.data);
            });
        });
    };
    DocumentsProvider.prototype.get = function (id) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.globals.dataDirectory + 'data/documents/' + id + '.json')
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.data = data;
                resolve(_this.data);
            });
        });
    };
    DocumentsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_3__globals_globals__["a" /* GlobalsProvider */]])
    ], DocumentsProvider);
    return DocumentsProvider;
}());

//# sourceMappingURL=documents.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DaysProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__globals_globals__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DaysProvider = /** @class */ (function () {
    function DaysProvider(http, globals) {
        this.http = http;
        this.globals = globals;
        this.data = null;
    }
    DaysProvider.prototype.all = function () {
        var _this = this;
        if (this.data) {
            return Promise.resolve(this.data);
        }
        return new Promise(function (resolve) {
            _this.http.get(_this.globals.dataDirectory + 'data/days.json')
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.data = data;
                resolve(_this.data);
            });
        });
    };
    DaysProvider.prototype.get = function (id) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.globals.dataDirectory + 'data/days/' + id + '.json')
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.data = data;
                resolve(_this.data);
            });
        });
    };
    DaysProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_3__globals_globals__["a" /* GlobalsProvider */]])
    ], DaysProvider);
    return DaysProvider;
}());

//# sourceMappingURL=days.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SyncPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_sync_sync__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_globals_globals__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the SyncPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var SyncPage = /** @class */ (function () {
    function SyncPage(navCtrl, navParams, syncProvider, loadingCtrl, platform, alertCtrl, globals) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.syncProvider = syncProvider;
        this.loadingCtrl = loadingCtrl;
        this.platform = platform;
        this.alertCtrl = alertCtrl;
        this.globals = globals;
        this.lists = [];
        this.trip_id = globals.getTripId();
        this.loadELDPList();
    }
    SyncPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SyncPage');
    };
    SyncPage.prototype.syncData = function () {
        var loader = this.loadingCtrl.create({
            content: "Attempting to sync data... if the application does not refresh after this message disappears, there may have been a network issue",
            duration: 10000
        });
        loader.present();
        this.syncProvider.syncData()
            .then(function (data) {
            loader.dismiss();
        });
    };
    SyncPage.prototype.checkBrowser = function (loader) {
        if (!this.platform.is('ios')) {
            loader.dismiss();
            var alert_1 = this.alertCtrl.create({
                title: 'Unable to sync',
                subTitle: 'Cannot sync when in browser',
                buttons: ['Ok']
            });
            alert_1.present();
        }
    };
    SyncPage.prototype.setTrip = function () {
        this.globals.setTripId(this.CourseList);
        this.syncData();
    };
    SyncPage.prototype.loadELDPList = function () {
        var _this = this;
        this.globals.getELDPCourseList()
            .then(function (data) {
            _this.lists = data;
        });
    };
    SyncPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sync',template:/*ion-inline-start:"/Users/webdev/Desktop/Desktop/ecourse/src/pages/sync/sync.html"*/'<!--\n  Generated template for the SyncPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <ion-title>Sync</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-card content>\n        <ion-card-header>\n            Sync data\n        </ion-card-header>\n        <ion-card-content>\n            <p><strong>Heads up!</strong> You should make sure this device is connected to a network that has access to the\n            internet.</p>\n\n\n            <button ion-button full icon-left (click)="syncData()">\n                <ion-icon name="refresh"></ion-icon>\n                Sync Data\n            </button>\n        </ion-card-content>\n    </ion-card>\n    <ion-card>\n    <ion-card-header>\n      Switch Courses\n    </ion-card-header>\n    <ion-card-content>\n      <ion-list>\n        <ion-item>\n          <ion-label>Course Title</ion-label>\n          <ion-select [(ngModel)]="CourseList">\n            <ion-option *ngFor="let list of lists" [value]="list.trip_id" >\n              {{list.trip_name}}\n            </ion-option>\n          </ion-select>\n          <!--<ion-input type="text" [(ngModel)]="trip_id"></ion-input>-->\n        </ion-item>\n      </ion-list>\n      <button ion-button full (click)="setTrip()">\n        Select Course\n      </button>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/webdev/Desktop/Desktop/ecourse/src/pages/sync/sync.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_sync_sync__["a" /* SyncProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__providers_globals_globals__["a" /* GlobalsProvider */]])
    ], SyncPage);
    return SyncPage;
}());

//# sourceMappingURL=sync.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParticipantsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__globals_globals__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ParticipantsProvider = /** @class */ (function () {
    function ParticipantsProvider(http, globals) {
        this.http = http;
        this.globals = globals;
        this.data = null;
    }
    ParticipantsProvider.prototype.all = function () {
        var _this = this;
        if (this.data) {
            return Promise.resolve(this.data);
        }
        return new Promise(function (resolve) {
            _this.http.get(_this.globals.dataDirectory + 'data/people.json')
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.data = data;
                resolve(_this.data);
            });
        });
    };
    ParticipantsProvider.prototype.get = function (id) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.globals.dataDirectory + 'data/people/' + id + '.json')
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.data = data;
                resolve(_this.data);
            });
        });
    };
    ParticipantsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_3__globals_globals__["a" /* GlobalsProvider */]])
    ], ParticipantsProvider);
    return ParticipantsProvider;
}());

//# sourceMappingURL=participants.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideosLinksPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_links_links__ = __webpack_require__(168);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the VideosLinksPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var VideosLinksPage = /** @class */ (function () {
    function VideosLinksPage(navCtrl, linksProvider) {
        this.navCtrl = navCtrl;
        this.linksProvider = linksProvider;
        this.loadLinks();
    }
    VideosLinksPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad VideosLinksPage');
    };
    VideosLinksPage.prototype.loadLinks = function () {
        var _this = this;
        this.linksProvider.all()
            .then(function (data) {
            _this.links = data;
            _this.keys = Object.keys(_this.links);
        });
    };
    VideosLinksPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-videos-links',template:/*ion-inline-start:"/Users/webdev/Desktop/Desktop/ecourse/src/pages/videos-links/videos-links.html"*/'<!--\n  Generated template for the VideosLinksPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Videos/Links</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <ion-card *ngFor="let key of keys">\n    <h2 class="card-title">{{ key }}</h2>\n    <ion-card-content *ngFor="let link of links[key]">\n      <!--<ion-icon name="link"></ion-icon> {{ link.name }}-->\n      <div class="body" [innerHTML]="link.body_html"></div>\n    </ion-card-content>\n    <!--<ion-list>\n      <a ion-item text-wrap *ngFor="let link of links[key]">\n        <ion-icon name="link"></ion-icon> {{ link.name }}\n        <div class="body" [innerHTML]="link.body_html"></div>\n      </a>\n  </ion-list>\n  </ion-card>-->\n\n  <!--<ion-content padding>\n    <ion-card>\n      <ion-card-content>\n        <div class="body">\n          <strong>Video Link 1</strong>\n          <p>\n            <a href="https://www.francetvinfo.fr/economie/crise-financiere-en-chine/la-chine-une-economie-colossale-aux-pieds-d-argile_2430955.html" target="_blank">La Chine, une économie colossale aux pieds d\'argile (1:17)</a>\n          </p>\n        </div>\n      </ion-card-content>\n    </ion-card>\n    <ion-card>\n      <ion-card-content>\n        <div class="body">\n          <strong>Video Link 2</strong>\n          <p>\n            <a href="https://www.youtube.com/watch?v=D_WY63wm6Hw" target="_blank">How Xi Jinping Went From Feeding Pigs to Ruling China (4:29)\n              </a>\n          </p>\n        </div>\n      </ion-card-content>\n    </ion-card>\n\n    <ion-card>\n      <ion-card-content>\n        <div class="body">\n          Cultural Tourism DC is a grass-roots, nonprofit coalition of more than 230 arts, heritage, community, and cultural organizations collaborating to promote the less-known stories and attractions of Washington. The website lists tours, itineraries, calendars, and plenty of background information about historic and cultural sites that you won\'t find anywhere else.\n          <p>\n            <a href="http://www.culturaltourismdc.org" target="_blank">www.culturaltourismdc.org</a>\n          </p>\n        </div>\n      </ion-card-content>\n    </ion-card>\n    <ion-card>\n      <ion-card-content>\n        <div class="body">\n          This is the city of Washington\'s website, full of details about both federal and local D.C., including history and tourism. Every day, the site lists a calendar of what\'s going on around town.\n          <p>\n            <a href="http://www.dc.gov" target="_blank">www.dc.gov</a>\n          </p>\n        </div>\n      </ion-card-content>\n    </ion-card>\n    <ion-card>\n      <ion-card-content>\n        <div class="body">\n          This is the site for the U.S. House of Representatives. Find out about the legislative process, what\'s going on in Congress, and what\'s going on with your own representatives -- the site links you to the individual websites for each of the representatives.\n          <p>\n            <a href="http://www.house.gov" target="_blank">www.house.gov</a>\n          </p>\n        </div>\n      </ion-card-content>\n    </ion-card>\n    <ion-card>\n      <ion-card-content>\n        <div class="body">\n          This National Park Service site includes links to some dozen memorials and monuments. When you click "Find a Park" then click "DC" on the map, a map of the capital\'s National Park sites appears, including the National World War II Memorial, Washington Monument, Jefferson Memorial, National Mall, Ford\'s Theatre, FDR Memorial, Lincoln Memorial, and Vietnam Veterans Memorial.\n          <p>\n            <a href="http://www.nps.gov" target="_blank">www.nps.gov</a>\n          </p>\n        </div>\n      </ion-card-content>\n    </ion-card>\n    <ion-card>\n      <ion-card-content>\n        <div class="body">\n          In the U.S. Senate site, click on "Visitors" for an online virtual tour of the Capitol building and information about touring the actual Senate Gallery. Also, find out when the Senate is in session. The site connects you with the websites for each of the senators; you can use this site to e-mail your senator.\n          <p>\n            <a href="http://www.senate.gov" target="_blank">www.senate.gov</a>\n          </p>\n        </div>\n      </ion-card-content>\n    </ion-card>\n    <ion-card>\n      <ion-card-content>\n        <div class="body">\n          This is the Smithsonian Institution\'s home page, which provides information about visiting Washington and leads you to the individual websites for each Smithsonian museum.\n          <p>\n            <a href="http://www.si.edu" target="_blank">www.si.edu</a>\n          </p>\n        </div>\n      </ion-card-content>\n    </ion-card>\n    <ion-card>\n      <ion-card-content>\n        <div class="body">\n          The Capitol Visitor Center\'s website posts the history of the Capitol and the center, discusses the art and architecture of the buildings and the legislative work that takes place within, and is the portal to the online reservation system for booking tours of the Capitol.\n          <p>\n            <a href="http://www.visitthecapitol.com" target="_blank">www.visitthecapitol.com </a>\n          </p>\n        </div>\n      </ion-card-content>\n    </ion-card>\n    <ion-card>\n      <ion-card-content>\n        <div class="body">\n          The print magazine of the same name posts some of its articles here, including information on what\'s going on at museums, theaters, and other cultural showplaces around town, and a directory of reviews of Washington restaurants. The magazine really wants you to buy the print edition, though -- for sale at bookstores, drugstores, and grocery stores throughout the area.\n          <p>\n            <a href="http://www.washingtonian.com" target="_blank">www.washingtonian.com </a>\n          </p>\n        </div>\n      </ion-card-content>\n    </ion-card>\n  </ion-content>-->\n'/*ion-inline-end:"/Users/webdev/Desktop/Desktop/ecourse/src/pages/videos-links/videos-links.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_links_links__["a" /* LinksProvider */]])
    ], VideosLinksPage);
    return VideosLinksPage;
}());

//# sourceMappingURL=videos-links.js.map

/***/ }),

/***/ 126:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 126;

/***/ }),

/***/ 167:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/videos-links/videos-links.module": [
		306,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 167;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LinksProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__globals_globals__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LinksProvider = /** @class */ (function () {
    function LinksProvider(http, globals) {
        this.http = http;
        this.globals = globals;
        this.data = null;
    }
    LinksProvider.prototype.all = function () {
        var _this = this;
        if (this.data) {
            return Promise.resolve(this.data);
        }
        return new Promise(function (resolve) {
            _this.http.get(_this.globals.dataDirectory + 'data/links.json')
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.data = data;
                resolve(_this.data);
            });
        });
    };
    LinksProvider.prototype.get = function (id) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.globals.dataDirectory + 'data/links/' + id + '.json')
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.data = data;
                resolve(_this.data);
            });
        });
    };
    LinksProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_3__globals_globals__["a" /* GlobalsProvider */]])
    ], LinksProvider);
    return LinksProvider;
}());

//# sourceMappingURL=links.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__articles_articles__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contacts_contacts__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__documents_documents__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__days_days__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_articles_articles__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__videos_links_videos_links__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__course_participants_course_participants__ = __webpack_require__(224);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var TabsPage = /** @class */ (function () {
    function TabsPage(articlesProvider) {
        var _this = this;
        this.articlesProvider = articlesProvider;
        this.schedule = __WEBPACK_IMPORTED_MODULE_4__days_days__["a" /* DaysPage */];
        this.documents = __WEBPACK_IMPORTED_MODULE_3__documents_documents__["a" /* DocumentsPage */];
        this.articles = __WEBPACK_IMPORTED_MODULE_1__articles_articles__["a" /* ArticlesPage */];
        this.contacts = __WEBPACK_IMPORTED_MODULE_2__contacts_contacts__["a" /* ContactsPage */];
        this.videoslinks = __WEBPACK_IMPORTED_MODULE_6__videos_links_videos_links__["a" /* VideosLinksPage */];
        this.courseparticipants = __WEBPACK_IMPORTED_MODULE_7__course_participants_course_participants__["a" /* CourseParticipantsPage */];
        this.articlesProvider.all()
            .then(function (data) {
            _this.articlesCount = data.length;
        });
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/webdev/Desktop/Desktop/ecourse/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="schedule" tabTitle="Schedule" tabIcon="calendar"></ion-tab>\n  <ion-tab [root]="documents" tabTitle="Documents" tabIcon="copy"></ion-tab>\n  <ion-tab [root]="videoslinks" tabTitle="Videos/Links" tabIcon="link"></ion-tab>\n  <ion-tab [root]="articles" tabTitle="My Cohort" tabIcon="school" *ngIf="articlesCount"></ion-tab>\n  <ion-tab [root]="courseparticipants" tabTitle="Course Participants" tabIcon="contacts"></ion-tab>\n  <ion-tab [root]="contacts" tabTitle="Contacts" tabIcon="contacts"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/webdev/Desktop/Desktop/ecourse/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__providers_articles_articles__["a" /* ArticlesProvider */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticlesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_articles_articles__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__article_article__ = __webpack_require__(213);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ArticlesPage = /** @class */ (function () {
    function ArticlesPage(navCtrl, articlesProvider) {
        this.navCtrl = navCtrl;
        this.articlesProvider = articlesProvider;
        this.loadArticles();
    }
    ArticlesPage.prototype.loadArticles = function () {
        var _this = this;
        this.articlesProvider.all()
            .then(function (data) {
            _this.articles = data;
        });
    };
    ArticlesPage.prototype.showArticle = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__article_article__["a" /* ArticlePage */], {
            article: id
        });
    };
    ArticlesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-articles',template:/*ion-inline-start:"/Users/webdev/Desktop/Desktop/ecourse/src/pages/articles/articles.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>\n            MyCohort\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-card>\n        <ion-list *ngIf="articles">\n            <button ion-item *ngFor="let article of articles" (click)="showArticle(article.id)">\n                {{ article.title }}\n            </button>\n        </ion-list>\n    </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/webdev/Desktop/Desktop/ecourse/src/pages/articles/articles.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_articles_articles__["a" /* ArticlesProvider */]])
    ], ArticlesPage);
    return ArticlesPage;
}());

//# sourceMappingURL=articles.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticlePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_articles_articles__ = __webpack_require__(55);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ArticlePage = /** @class */ (function () {
    function ArticlePage(navCtrl, navParams, articlesProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.articlesProvider = articlesProvider;
        this.loadArticle();
    }
    ArticlePage.prototype.loadArticle = function () {
        var _this = this;
        this.articlesProvider.get(this.navParams.get('article'))
            .then(function (data) {
            _this.article = data;
        });
    };
    ArticlePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-article',template:/*ion-inline-start:"/Users/webdev/Desktop/Desktop/ecourse/src/pages/article/article.html"*/'<ion-header>\n\n    <ion-navbar>\n        <ion-title *ngIf="article">{{ article.title }}</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-card *ngIf="article">\n        <ion-card-content>\n            <div class="body" [innerHTML]="article.body_html"></div>\n        </ion-card-content>\n    </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/webdev/Desktop/Desktop/ecourse/src/pages/article/article.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_articles_articles__["a" /* ArticlesProvider */]])
    ], ArticlePage);
    return ArticlePage;
}());

//# sourceMappingURL=article.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_contacts_contacts__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contact_contact__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_globals_globals__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ContactsPage = /** @class */ (function () {
    function ContactsPage(navCtrl, contactsProvider, globals) {
        this.navCtrl = navCtrl;
        this.contactsProvider = contactsProvider;
        this.globals = globals;
        this.loadContacts();
    }
    ContactsPage.prototype.loadContacts = function () {
        var _this = this;
        this.contactsProvider.all()
            .then(function (data) {
            _this.contacts = data;
        });
    };
    ContactsPage.prototype.showContact = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__contact_contact__["a" /* ContactPage */], {
            contact: id
        });
    };
    ContactsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contacts',template:/*ion-inline-start:"/Users/webdev/Desktop/Desktop/ecourse/src/pages/contacts/contacts.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>\n            Contacts\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div *ngFor="let contact of contacts">\n    <ion-card tappable *ngIf="contact.is_participant != true" (click)="showContact(contact.id)">\n      <ion-item>\n        <ion-avatar item-start *ngIf="contact.image;else elseBlock">\n          <img src="{{ globals.dataDirectory }}data/assets/{{ contact.image }}">\n        </ion-avatar>\n        <ng-template #elseBlock>\n          <ion-icon name="contact" item-start></ion-icon>\n        </ng-template>\n        <span class="card-title">{{ contact.name }}</span>\n        <p class="contact-title">{{ contact.title }}</p>\n        <p class="contact-information" *ngIf="contact.telephone != null"><ion-icon name="ios-call-outline"></ion-icon> {{ contact.telephone }}</p>\n      </ion-item>\n    </ion-card>\n  </div>\n   <!-- <ion-card>\n        <ion-list>\n            <a ion-item *ngFor="let contact of contacts" (click)="showContact(contact.id)">\n\n                <ion-avatar item-start *ngIf="contact.image;else elseBlock">\n                    <img src="{{ globals.dataDirectory }}data/assets/{{ contact.image }}">\n                </ion-avatar>\n                <ng-template #elseBlock>\n                    <ion-icon name="contact" item-start></ion-icon>\n                </ng-template>\n\n                <h4>{{ contact.name }}</h4>\n                <p><strong>{{ contact.title }}</strong><br>\n                    {{ contact.telephone }}</p>\n            </a>\n        </ion-list>\n    </ion-card>-->\n</ion-content>\n'/*ion-inline-end:"/Users/webdev/Desktop/Desktop/ecourse/src/pages/contacts/contacts.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_contacts_contacts__["a" /* ContactsProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_globals_globals__["a" /* GlobalsProvider */]])
    ], ContactsPage);
    return ContactsPage;
}());

//# sourceMappingURL=contacts.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DocumentsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_documents_documents__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_document_viewer__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_globals_globals__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__ = __webpack_require__(45);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DocumentsPage = /** @class */ (function () {
    function DocumentsPage(navCtrl, documentsProvider, document, globals, file) {
        this.navCtrl = navCtrl;
        this.documentsProvider = documentsProvider;
        this.document = document;
        this.globals = globals;
        this.file = file;
        this.loadDocuments();
    }
    DocumentsPage.prototype.loadDocuments = function () {
        var _this = this;
        this.documentsProvider.all()
            .then(function (data) {
            _this.documents = data;
            _this.keys = Object.keys(_this.documents);
        });
    };
    DocumentsPage.prototype.showDocument = function (id) {
        var _this = this;
        var options = {
            title: 'PDF'
        };
        var path = null;
        this.documentsProvider.get(id)
            .then(function (data) {
            _this.selected_document = data;
            _this.document.viewDocument(_this.globals.dataDirectory + 'data/assets/' + _this.selected_document.file, 'application/pdf', options);
            //  window.open('data/assets/' + this.selected_document.file, '_blank');
            //   console.log('File:///C:/data/assets/' + this.selected_document.file);
        });
    };
    DocumentsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-documents',template:/*ion-inline-start:"/Users/webdev/Desktop/Desktop/ecourse/src/pages/documents/documents.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>\n            Documents\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-card *ngFor="let key of keys">\n        <h2 class="card-title">{{ key }}</h2>\n        <ion-list>\n            <a ion-item text-wrap *ngFor="let document of documents[key]" (click)="showDocument(document.id)">\n                <ion-icon name="document"></ion-icon> {{ document.name }}\n            </a>\n        </ion-list>\n    </ion-card>\n\n    <!--<ion-card>\n        <div *ngFor="let key of keys">\n            <ion-card-header>\n                <h2>{{ key }}</h2>\n            </ion-card-header>\n            <ion-list>\n                <a ion-item text-wrap *ngFor="let document of documents[key]" (click)="showDocument(document.id)">\n                    <ion-icon name="document"></ion-icon> {{ document.name }}\n                </a>\n            </ion-list> \n        </div>\n    </ion-card>-->\n    \n</ion-content>\n'/*ion-inline-end:"/Users/webdev/Desktop/Desktop/ecourse/src/pages/documents/documents.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_documents_documents__["a" /* DocumentsProvider */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_document_viewer__["a" /* DocumentViewer */], __WEBPACK_IMPORTED_MODULE_4__providers_globals_globals__["a" /* GlobalsProvider */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__["a" /* File */]])
    ], DocumentsPage);
    return DocumentsPage;
}());

//# sourceMappingURL=documents.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DaysPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_days_days__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_trip_trip__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__day_day__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sync_sync__ = __webpack_require__(111);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DaysPage = /** @class */ (function () {
    function DaysPage(platform, navCtrl, daysProvider, tripProvider) {
        var _this = this;
        this.platform = platform;
        this.navCtrl = navCtrl;
        this.daysProvider = daysProvider;
        this.tripProvider = tripProvider;
        // load first page data only after platform available otherwise
        // we won't be able to access file.dataDirectory in globals
        this.platform.ready().then(function () {
            _this.loadDays();
            _this.loadTrip();
        });
    }
    DaysPage.prototype.loadDays = function () {
        var _this = this;
        this.daysProvider.all()
            .then(function (data) {
            _this.days = data;
        });
    };
    DaysPage.prototype.loadTrip = function () {
        var _this = this;
        this.tripProvider.get()
            .then(function (data) {
            _this.trip = data;
        });
    };
    DaysPage.prototype.goToDayPage = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__day_day__["a" /* DayPage */], {
            day: id
        });
    };
    DaysPage.prototype.goToSyncPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__sync_sync__["a" /* SyncPage */]);
    };
    DaysPage.prototype.reload = function () {
        window.location.reload();
    };
    DaysPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-days',template:/*ion-inline-start:"/Users/webdev/Desktop/Desktop/ecourse/src/pages/days/days.html"*/'<ion-header>\n    <ion-toolbar>\n        <ion-title>Schedule</ion-title>\n        <ion-buttons end>\n            <button ion-button icon-left (click)="goToSyncPage()">\n                <ion-icon name="refresh"></ion-icon>\n            </button>\n            \n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <div class="header-image" *ngIf="trip">\n        <div class="header-text">{{ trip.name }}</div>\n    </div>\n    <ion-grid>\n        <ion-row>\n            <ion-col col-12>\n                <ion-card class="days-cards" *ngFor="let day of days" tappable (click)="goToDayPage(day.id)">\n                    <span class="card-title"><h1>{{ day.name }}</h1></span>\n                    <span class="card-footer"><ion-icon name="ios-calendar-outline"></ion-icon> {{ day.date }}</span>\n                </ion-card>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n\n</ion-content>\n\n\n'/*ion-inline-end:"/Users/webdev/Desktop/Desktop/ecourse/src/pages/days/days.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_days_days__["a" /* DaysProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_trip_trip__["a" /* TripProvider */]])
    ], DaysPage);
    return DaysPage;
}());

//# sourceMappingURL=days.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TripProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__globals_globals__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TripProvider = /** @class */ (function () {
    function TripProvider(http, globals) {
        this.http = http;
        this.globals = globals;
        this.data = null;
    }
    TripProvider.prototype.get = function () {
        var _this = this;
        if (this.data) {
            return Promise.resolve(this.data);
        }
        return new Promise(function (resolve) {
            _this.http.get(_this.globals.dataDirectory + 'data/trip.json')
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.data = data;
                resolve(_this.data);
            });
        });
    };
    TripProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_3__globals_globals__["a" /* GlobalsProvider */]])
    ], TripProvider);
    return TripProvider;
}());

//# sourceMappingURL=trip.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DayPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_event_event__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_days_days__ = __webpack_require__(110);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DayPage = /** @class */ (function () {
    function DayPage(navCtrl, navParams, daysProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.daysProvider = daysProvider;
        this.loadDay();
    }
    DayPage.prototype.loadDay = function () {
        var _this = this;
        this.daysProvider.get(this.navParams.get('day'))
            .then(function (data) {
            _this.day = data;
        });
    };
    DayPage.prototype.setEvent = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pages_event_event__["a" /* EventPage */], {
            event: id
        });
    };
    DayPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-day',template:/*ion-inline-start:"/Users/webdev/Desktop/Desktop/ecourse/src/pages/day/day.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title *ngIf="day">{{ day.name }}</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n    <div *ngIf="day">\n        <ion-card *ngIf="!day.events.length">\n            No itinerary specified\n        </ion-card>\n\n        <ion-card tappable class="event-cards" *ngFor="let event of day.events" (click)="setEvent(event.id)">\n            <ion-grid no-padding>\n                <ion-row>\n                <ion-col col-6 text-left><ion-icon name="ios-time-outline"></ion-icon> {{ event.time_from }}<span *ngIf="event.time_to"> - {{ event.time_to }}</span></ion-col>\n                <ion-col col-6 text-right><ion-icon name="ios-pin-outline"></ion-icon> {{ event.location_name }}</ion-col>\n                </ion-row>\n            </ion-grid>\n            <h1 class = "event-title">{{ event.title }}</h1>\n            <div class="body" [innerHTML]="event.description_html"></div>\n        </ion-card>\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/webdev/Desktop/Desktop/ecourse/src/pages/day/day.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_days_days__["a" /* DaysProvider */]])
    ], DayPage);
    return DayPage;
}());

//# sourceMappingURL=day.js.map

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_events_events__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contact_contact__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_documents_documents__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_document_viewer__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_globals_globals__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var EventPage = /** @class */ (function () {
    function EventPage(navCtrl, navParams, eventsProvider, documentsProvider, document, globals) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.eventsProvider = eventsProvider;
        this.documentsProvider = documentsProvider;
        this.document = document;
        this.globals = globals;
        this.loadEvent();
    }
    EventPage.prototype.loadEvent = function () {
        var _this = this;
        this.eventsProvider.get(this.navParams.get('event'))
            .then(function (data) {
            _this.event = data;
        });
    };
    EventPage.prototype.showDocument = function (id) {
        var _this = this;
        var options = {
            title: 'PDF'
        };
        this.documentsProvider.get(id)
            .then(function (data) {
            _this.selected_document = data;
            _this.document.viewDocument(_this.globals.dataDirectory + 'data/assets/' + _this.selected_document.file, 'application/pdf', options);
            //window.open('data/assets/' + this.selected_document.file, '_blank');
        });
    };
    EventPage.prototype.showPerson = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__contact_contact__["a" /* ContactPage */], {
            contact: id
        });
    };
    EventPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-event',template:/*ion-inline-start:"/Users/webdev/Desktop/Desktop/ecourse/src/pages/event/event.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title *ngIf="event">{{ event.title }}</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div *ngIf="event">\n    <ion-card class="event-details">\n      <ion-card-header>\n        <h2><ion-icon name="ios-time-outline"></ion-icon> {{ event.time_from }}<span *ngIf="event.time_to"> - {{ event.time_to }}</span></h2>\n      </ion-card-header>\n      <ion-card-content>\n        <h1>{{ event.title }}</h1>\n        <p margin-top margin-bottom>\n          <ion-icon name="ios-pin-outline"></ion-icon> {{ event.location_name }}\n          <span *ngIf="event.location_address">, {{ event.location_address }}</span>\n          <span *ngIf="event.location_postal">, {{ event.location_postal }}</span>\n        </p>\n\n        <div class="body" *ngIf="event.description_html" [innerHTML]="event.description_html"></div>\n\n        <div *ngIf="event.participants">\n          <ul class="participants">\n            <li *ngFor="let person of event.participants">\n              {{ person.name }}\n            </li>\n          </ul>\n        </div>\n\n        <div class="body" [innerHTML]="event.body_html"></div>\n\n      </ion-card-content>\n    </ion-card>\n\n    \n    <ion-card *ngIf="event.documents.length" class="body">\n      <ion-card-header>\n        <h2 class="card-title">Documents</h2>\n      </ion-card-header>\n      <ion-card-content>\n        <ion-list>\n          <a ion-item text-wrap *ngFor="let document of event.documents" (click)="showDocument(document.id)">\n            <ion-icon name="document"></ion-icon> {{ document.name }}\n          </a>\n        </ion-list>\n      </ion-card-content>\n    </ion-card>\n\n    <ion-card *ngIf="event.links.length" class="body">\n      <ion-card-header>\n        <h2 class="card-title">Links</h2>\n      </ion-card-header>\n      <ion-card-content *ngFor="let link of event.links" >\n        <div class="body" [innerHTML]="link.body_html"></div>\n        <!--<ion-list>\n    <a ion-item text-wrap *ngFor="let link of event.links" (click)="showLink(link.">\n      <div class="contact-title" [innerHTML]="link.body_html"></div>\n    </a>\n  </ion-list>-->\n      </ion-card-content>\n    </ion-card>\n\n    <ion-card *ngIf="event.participants.length">\n      <ion-card-header>\n        <!--<h2 class="card-title">Participants</h2>-->\n        <h2 class="card-title"> </h2>\n      </ion-card-header>\n      <ion-card-content>\n        <a ion-item text-wrap *ngFor="let person of event.participants" (click)="showPerson(person.id)">\n          <ion-avatar item-start *ngIf="person.image;else elseBlock">\n            <img src="{{ globals.dataDirectory }}data/assets/{{ person.image }}">\n          </ion-avatar>\n          <ng-template #elseBlock>\n            <ion-icon name="contact" item-start></ion-icon>\n          </ng-template>\n\n          <h4 class="contact-name">{{ person.name }}</h4>\n          <p margin-bottom><strong>{{ person.title }}</strong></p>\n          <p class="contact-information" *ngIf="person.telephone != null"><ion-icon name="ios-call-outline"></ion-icon> {{ person.telephone }}</p>\n        </a>\n      </ion-card-content>\n    </ion-card>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/webdev/Desktop/Desktop/ecourse/src/pages/event/event.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_events_events__["a" /* EventsProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_documents_documents__["a" /* DocumentsProvider */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_document_viewer__["a" /* DocumentViewer */], __WEBPACK_IMPORTED_MODULE_6__providers_globals_globals__["a" /* GlobalsProvider */]])
    ], EventPage);
    return EventPage;
}());

//# sourceMappingURL=event.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__globals_globals__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EventsProvider = /** @class */ (function () {
    function EventsProvider(http, globals) {
        this.http = http;
        this.globals = globals;
        this.data = null;
    }
    EventsProvider.prototype.getEventsForDay = function (day) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.globals.dataDirectory + 'data/days/' + day + '.json')
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.data = data.events;
                resolve(_this.data);
            });
        });
    };
    EventsProvider.prototype.get = function (id) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.globals.dataDirectory + 'data/events/' + id + '.json')
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.data = data;
                resolve(_this.data);
            });
        });
    };
    EventsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_3__globals_globals__["a" /* GlobalsProvider */]])
    ], EventsProvider);
    return EventsProvider;
}());

//# sourceMappingURL=events.js.map

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SyncProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_file_transfer__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_zip__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__globals_globals__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_file__ = __webpack_require__(45);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SyncProvider = /** @class */ (function () {
    function SyncProvider(http, transfer, zip, globals, file) {
        this.http = http;
        this.transfer = transfer;
        this.zip = zip;
        this.globals = globals;
        this.file = file;
    }
    SyncProvider.prototype.syncData = function () {
        var _this = this;
        return new Promise(function (resolve) {
            var fileTransfer = _this.transfer.create();
            var update_url = _this.globals.api_url + '/trips/' + _this.globals.trip_id + '/download';
            //let update_url = this.globals.api_url + '/user';
            //let headers = new Headers();
            //headers.append('Content-Type', 'application/x-www-form-urlencoded');
            //headers.append('Authorization', 'Bearer ' + this.globals.api_key);
            //let options = new RequestOptions({
            // headers: headers,
            // responseType: ResponseContentType.ArrayBuffer
            //});
            //// let options:
            fileTransfer.download(update_url, _this.globals.dataDirectory + 'package.zip', false, { headers: { "Authorization": 'Bearer ' + _this.globals.api_key } })
                .then(function (entry) {
                _this.zip.unzip(_this.globals.dataDirectory + 'package.zip', _this.globals.dataDirectory + 'data')
                    .then(function (result) {
                    if (result === 0)
                        console.log('SUCCESS extracted files to: ' + _this.globals.dataDirectory);
                    if (result === -1)
                        console.log('FAILED');
                    //window.location.reload(true);
                    document.location.reload(true);
                });
            });
        });
        //this.http.get(update_url, options)
        //   .subscribe((res) => {
        //    console.log('start download:', res);
        //    const blob = new Blob([res._body], { type: "application/zip" });
        //    const url = window.URL.createObjectURL(blob);
        //    window.open(url, '_blank');
        //console.log(res)
        //  }, () => {
        //    console.log("download completed.")
        //});
        //});
    };
    SyncProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_file_transfer__["a" /* FileTransfer */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_zip__["a" /* Zip */], __WEBPACK_IMPORTED_MODULE_5__globals_globals__["a" /* GlobalsProvider */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_file__["a" /* File */]])
    ], SyncProvider);
    return SyncProvider;
}());

//# sourceMappingURL=sync.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CourseParticipantsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_participants_participants__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__participant_participant__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_globals_globals__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the CourseParticipantsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
//@IonicPage()
var CourseParticipantsPage = /** @class */ (function () {
    function CourseParticipantsPage(navCtrl, participantsProvider, globals) {
        this.navCtrl = navCtrl;
        this.participantsProvider = participantsProvider;
        this.globals = globals;
        this.loadContacts();
    }
    CourseParticipantsPage.prototype.loadContacts = function () {
        var _this = this;
        this.participantsProvider.all()
            .then(function (data) {
            _this.participants = data;
            //this.participants = this.contactsUnSorted.slice(0);
            //this.participants.sort((leftside, rightside): number => {
            //  if (leftside.last_name < rightside.last_name) return -1;
            //  if (leftside.last_name > rightside.last_name) return 1;
            //  return 0;
            // });
        });
    };
    CourseParticipantsPage.prototype.showContact = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__participant_participant__["a" /* ParticipantPage */], {
            participant: id
        });
    };
    CourseParticipantsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CourseParticipantsPage');
    };
    CourseParticipantsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-course-participants',template:/*ion-inline-start:"/Users/webdev/Desktop/Desktop/ecourse/src/pages/course-participants/course-participants.html"*/'<!--\n  Generated template for the CourseParticipantsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Course Participants</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div *ngFor="let participant of participants">\n    <ion-card tappable *ngIf="participant.is_participant" (click)="showContact(participant.id)">\n      <ion-item>\n        <ion-avatar item-start *ngIf="participant.image;else elseBlock">\n          <img src="{{ globals.dataDirectory }}data/assets/{{ participant.image }}">\n        </ion-avatar>\n        <ng-template #elseBlock>\n          <ion-icon name="contact" item-start></ion-icon>\n        </ng-template>\n        <span class="card-title">{{ participant.name }}</span>\n        <p class="contact-title">{{ participant.title }}</p>\n        <p class="contact-information" *ngIf="participant.telephone != null"><ion-icon name="ios-call-outline"></ion-icon> {{ participant.telephone }}</p>\n      </ion-item>\n    </ion-card>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/webdev/Desktop/Desktop/ecourse/src/pages/course-participants/course-participants.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_participants_participants__["a" /* ParticipantsProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_globals_globals__["a" /* GlobalsProvider */]])
    ], CourseParticipantsPage);
    return CourseParticipantsPage;
}());

//# sourceMappingURL=course-participants.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParticipantPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_participants_participants__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_globals_globals__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ParticipantPage = /** @class */ (function () {
    function ParticipantPage(navCtrl, navParams, participantsProvider, globals) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.participantsProvider = participantsProvider;
        this.globals = globals;
        this.loadContact();
    }
    ParticipantPage.prototype.loadContact = function () {
        var _this = this;
        this.participantsProvider.get(this.navParams.get('participant'))
            .then(function (data) {
            _this.participant = data;
        });
    };
    ParticipantPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-participant',template:/*ion-inline-start:"/Users/webdev/Desktop/Desktop/ecourse/src/pages/participant/participant.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title *ngIf="participant">{{ participant.name }}</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <ion-card *ngIf="participant">\n\n        <div class="contact-header">\n\n            <div *ngIf="participant.image" class="contact-photo">\n\n                <img src="{{ globals.dataDirectory }}data/assets/{{ participant.image }}">\n\n            </div>\n\n            <div class="contact-info">\n\n              <h1>{{ participant.name }}</h1>\n\n                <p><strong>{{ participant.title }}</strong></p>\n\n            </div>\n\n        </div>\n\n        \n\n        <ion-card-content>\n\n            <ul>\n\n              <li *ngIf="participant.telephone"><ion-icon name="ios-call-outline"></ion-icon> {{ participant.telephone }}</li>\n\n              <li *ngIf="participant.email"><ion-icon name="ios-mail-outline"></ion-icon> {{ participant.email }}</li>\n\n            </ul>\n\n\n\n            <div class="body" [innerHTML]="participant.body_html"></div>\n\n        </ion-card-content>\n\n    </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/webdev/Desktop/Desktop/ecourse/src/pages/participant/participant.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_participants_participants__["a" /* ParticipantsProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_globals_globals__["a" /* GlobalsProvider */]])
    ], ParticipantPage);
    return ParticipantPage;
}());

//# sourceMappingURL=participant.js.map

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(246);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 246:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_articles_articles__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_contacts_contacts__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_documents_documents__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_days_days__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_day_day__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_event_event__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_tabs_tabs__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_days_days__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_events_events__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_documents_documents__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_articles_articles__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_article_article__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_contacts_contacts__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_contact_contact__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_document_viewer__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_file_transfer__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_file__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_zip__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__providers_trip_trip__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__providers_sync_sync__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__providers_globals_globals__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_sync_sync__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__ionic_native_network__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_videos_links_videos_links__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_course_participants_course_participants__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__providers_links_links__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__providers_participants_participants__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__angular_common_http__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_notes_notes__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_participant_participant__ = __webpack_require__(225);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_18__pages_article_article__["a" /* ArticlePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_articles_articles__["a" /* ArticlesPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_contacts_contacts__["a" /* ContactsPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_documents_documents__["a" /* DocumentsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_days_days__["a" /* DaysPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_day_day__["a" /* DayPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_event_event__["a" /* EventPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_sync_sync__["a" /* SyncPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_videos_links_videos_links__["a" /* VideosLinksPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_course_participants_course_participants__["a" /* CourseParticipantsPage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_notes_notes__["a" /* NotesPage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_participant_participant__["a" /* ParticipantPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_34__angular_common_http__["a" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/videos-links/videos-links.module#VideosLinksPageModule', name: 'VideosLinksPage', segment: 'videos-links', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_articles_articles__["a" /* ArticlesPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_contacts_contacts__["a" /* ContactsPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_documents_documents__["a" /* DocumentsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_days_days__["a" /* DaysPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_day_day__["a" /* DayPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_event_event__["a" /* EventPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_article_article__["a" /* ArticlePage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_sync_sync__["a" /* SyncPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_videos_links_videos_links__["a" /* VideosLinksPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_course_participants_course_participants__["a" /* CourseParticipantsPage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_participant_participant__["a" /* ParticipantPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_14__providers_days_days__["a" /* DaysProvider */],
                __WEBPACK_IMPORTED_MODULE_15__providers_events_events__["a" /* EventsProvider */],
                __WEBPACK_IMPORTED_MODULE_16__providers_documents_documents__["a" /* DocumentsProvider */],
                __WEBPACK_IMPORTED_MODULE_17__providers_articles_articles__["a" /* ArticlesProvider */],
                __WEBPACK_IMPORTED_MODULE_19__providers_contacts_contacts__["a" /* ContactsProvider */],
                __WEBPACK_IMPORTED_MODULE_21__ionic_native_document_viewer__["a" /* DocumentViewer */],
                __WEBPACK_IMPORTED_MODULE_22__ionic_native_file_transfer__["a" /* FileTransfer */],
                __WEBPACK_IMPORTED_MODULE_23__ionic_native_file__["a" /* File */],
                __WEBPACK_IMPORTED_MODULE_25__providers_trip_trip__["a" /* TripProvider */],
                __WEBPACK_IMPORTED_MODULE_26__providers_sync_sync__["a" /* SyncProvider */],
                __WEBPACK_IMPORTED_MODULE_24__ionic_native_zip__["a" /* Zip */],
                __WEBPACK_IMPORTED_MODULE_27__providers_globals_globals__["a" /* GlobalsProvider */],
                __WEBPACK_IMPORTED_MODULE_29__ionic_native_network__["a" /* Network */],
                __WEBPACK_IMPORTED_MODULE_32__providers_links_links__["a" /* LinksProvider */],
                __WEBPACK_IMPORTED_MODULE_33__providers_participants_participants__["a" /* ParticipantsProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_globals_globals__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_file__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_sync_sync__ = __webpack_require__(111);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, globals, file) {
        var _this = this;
        this.platform = platform;
        this.globals = globals;
        this.file = file;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            _this.checkDataExists();
        });
    }
    MyApp.prototype.checkDataExists = function () {
        var _this = this;
        if (!this.platform.is('core')) {
            this.file.checkFile(this.globals.dataDirectory, 'data/trip.json').then(function (dir) {
                return _this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
            }).catch(function (err) {
                return _this.rootPage = __WEBPACK_IMPORTED_MODULE_7__pages_sync_sync__["a" /* SyncPage */];
            });
        }
    };
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/webdev/Desktop/Desktop/ecourse/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/webdev/Desktop/Desktop/ecourse/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_5__providers_globals_globals__["a" /* GlobalsProvider */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_file__["a" /* File */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the NotesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var NotesPage = /** @class */ (function () {
    function NotesPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    NotesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NotesPage');
    };
    NotesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-notes',template:/*ion-inline-start:"/Users/webdev/Desktop/Desktop/ecourse/src/pages/notes/notes.html"*/'<!--\n  Generated template for the NotesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Notes</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/webdev/Desktop/Desktop/ecourse/src/pages/notes/notes.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], NotesPage);
    return NotesPage;
}());

//# sourceMappingURL=notes.js.map

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticlesProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__globals_globals__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ArticlesProvider = /** @class */ (function () {
    function ArticlesProvider(http, globals) {
        this.http = http;
        this.globals = globals;
        this.data = null;
    }
    ArticlesProvider.prototype.all = function () {
        var _this = this;
        if (this.data) {
            return Promise.resolve(this.data);
        }
        return new Promise(function (resolve) {
            _this.http.get(_this.globals.dataDirectory + 'data/articles.json')
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.data = data;
                resolve(_this.data);
            });
        });
    };
    ArticlesProvider.prototype.get = function (id) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.globals.dataDirectory + 'data/articles/' + id + '.json')
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.data = data;
                resolve(_this.data);
            });
        });
    };
    ArticlesProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_3__globals_globals__["a" /* GlobalsProvider */]])
    ], ArticlesProvider);
    return ArticlesProvider;
}());

//# sourceMappingURL=articles.js.map

/***/ })

},[226]);
//# sourceMappingURL=main.js.map