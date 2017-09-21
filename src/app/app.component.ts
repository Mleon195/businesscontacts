import { Component,OnInit } from '@angular/core';
import {FirebaseService} from './services/firebase.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [FirebaseService]
})
export class AppComponent {
  constructor(private _firebaseService: FirebaseService) {

 }

 ngOnInit(){
  this._firebaseService.getBusinesses().subscribe(businesses => {
    console.log(businesses);
  })
 }

}
