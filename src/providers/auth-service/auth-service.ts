import { Injectable } from '@angular/core';
//import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


export class User {
  name: string;
  email: string;

  constructor (name:string, email: string) {
    this.name = name;
    this.email = email;
  }
}
/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class AuthServiceProvider {
  currentUser: User;

  public login(credentials) {
    if(credentials.email === null || credentials.password === null) {
      return Observable.throw("Please insert credentials");
    }
    else {
      return Observable.create(observer => {
        //make a check with backend!!!!
        let access = (credentials.password === 'pass' && credentials.email === "quella@gmail.com");
        this.currentUser = new User('Quella', 'quella@gmail.com');
        observer.next(access);
        observer.complete();
      });
    }
  }

  public register(credentials) {
    if(credentials.email === null || credentials.email === null) {
      return Observable.throw("Please insert credentials");
    }
    else {
      //STORE THE credentials TO THE BACKEND!!!
      //MAKE A POST REQUEST TO SERVER AND CREATE THE NEW USER
      return Observable.create(observer => {
        observer.next(true);
        observer.complete();
      });
    }
  }

  public getUserInfo() {
    return this.currentUser;
  }

  public logout() {
    return Observable.create(observer => {
      this.currentUser = null;
      observer.next(true);
      observer.complete();
    });
  }

  /*constructor(public http: Http) {
    console.log('Hello AuthServiceProvider Provider');
  }*/

}
