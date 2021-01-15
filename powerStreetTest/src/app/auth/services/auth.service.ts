import { Injectable } from '@angular/core';
import { first } from 'rxjs/operators';
import {User} from '@firebase/auth-types';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable()
export class AuthService {
  public user:User;

  constructor(public aFAuth: AngularFireAuth) { }

  async login(email:string, password:string){
    try{
      const result = await this.aFAuth.signInWithEmailAndPassword(email,password);
      return result;
    }
    catch (error){console.log(error)}
  }
  

  async logout(){
    try{
    await this.aFAuth.signOut();
    }catch(error){console.log(error)}
  }

  getCurrentUser(){
    try{
    return this.aFAuth.authState.pipe(first()).toPromise();
    }catch(error){
      console.log(error);
    }
  }
}
