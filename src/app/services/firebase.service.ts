import {Injectable} from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import 'rxjs/add/operator/map';
import {Business} from '../Business';
import {Category} from '../Category';


@Injectable()
export class FirebaseService{
  businesses: FirebaseListObservable<Business[]>;
  categories: FirebaseListObservable<Category[]>;

  constructor(private _db: AngularFireDatabase){

  }

  getBusinesses() {
    this.businesses = this._db.list('/businesses') as
    FirebaseListObservable<Business[]>
    return this.businesses;
  }

  getCategories() {
    this.businesses = this._db.list('/categories') as
    FirebaseListObservable<Category[]>
    return this.categories;
  }

}
