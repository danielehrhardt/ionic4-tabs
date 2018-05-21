import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-page-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  
  constructor(public nav: NavController){

  }

  goToAbout(){
    this.nav.goForward('about');
  }
}
