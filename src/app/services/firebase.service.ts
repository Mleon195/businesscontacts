import {Injectable} from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import 'rxjs/add/operator/map';
import {Business} from '../Business';
import {Category} from '../Category';

@Injectable()
export class FirebaseService{
  businesses: FirebaseListObservable<Business[]>;
  categories: FirebaseListObservable<Category[]>;

  constructor(private db: AngularFire){

  }

  getBusinesses() {
  this.businesses = this._db.database.list('/business') as
  FirebaseListObservable<Business[]>
  return this.businesses;
  }

  getCategories() {
  this.businesses = this._db.database.list('/categories') as
  FirebaseListObservable<Category[]>
  return this.categories;
  }
  
}
