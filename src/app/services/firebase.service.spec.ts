import { TestBed } from '@angular/core/testing';
import { AngularFirestore } from '@angular/fire/firestore';
import { FirebaseService } from './firebase.service';

fdescribe('FirebaseService', () => {
  let fbservice: FirebaseService;
  let store: AngularFirestore;
  beforeEach(() => {
    fbservice = new FirebaseService(store);
  });

  it('should be created', () => {
    expect(fbservice).toBeTruthy();
  });
  it('should create user', () => {
    fbservice.createUser('a', 'b');
  });
});
