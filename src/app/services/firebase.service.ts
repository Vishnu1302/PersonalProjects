import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})

export class FirebaseService {
  users;
  constructor(private firestore: AngularFirestore) { }
  createUser(email:string,password:string) {
    const usersCollection = this.firestore.collection<any>('users');
    usersCollection.add({ email: email, password: password,id:Math.random() });
}
 getUsers(u) {
   return this.firestore.collection('users', ref => ref.where('email', '==', u.email)).valueChanges();
 }
}
