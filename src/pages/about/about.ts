import { CompanyPage } from './../company/company';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController) {

  }

  company() {
    this.navCtrl.push(CompanyPage);
  }

}
