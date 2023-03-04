import { Injectable } from '@angular/core';
import { addDoc, collection, deleteDoc, doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import { fs } from '../app.module';
import { User } from '../classes/user';
import { StoreService } from './store.service';


@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(
private store: StoreService
  ) { }


  async addUser(user: User) {
    var docRef = doc(fs, 'users/' + user.uid)
    setDoc(docRef, { ...user })
  }

  async addDoc(obj: { col: string }) {
    return new Promise((resolve) => {
      var colRef = collection(fs, obj.col)
      addDoc(colRef, { ...obj }).then(async (result) => {
        var uid = this.store.user.getValue().uid;
        var { id, path } = result
        var created = new Date().getTime()
        var modified = new Date().getTime()
        var updateRef = doc(fs, path)
        updateDoc(updateRef, { id, path, created, modified, uid })
        var item = (await getDoc(updateRef)).data();
        return resolve(item)
      })
    })
  }


  async setDoc(obj: { path: string }) {
    return new Promise(async (resolve) => {
      var docRef = doc(fs, obj.path);
      setDoc(docRef, { ...obj }).then(async () => {
        var data = await this.getDoc(obj.path);
        return resolve(data)
      })
    })
  }

  async deleteDoc(obj: { path: string }) {
    return new Promise(async (resolve) => {
      var docRef = doc(fs, obj.path)
      deleteDoc(docRef).then(() => {
        return resolve(true)
      })
    })
  }


  addDocTeam(obj: { col: string, team: string, uid: string }) {
    return new Promise(async (resolve) => {
      var team = this.store.team.getValue();
      var user = this.store.user.getValue();
      obj.team = team.id;
      obj.uid = user.uid;
      var colRef = collection(fs, obj.col)
      addDoc(colRef, { ...obj }).then(async (result) => {
        var { id, path } = result;
        var created = new Date().getTime()
        var modified = new Date().getTime()
        var updateRef = doc(fs, path)
        updateDoc(updateRef, { id, path, created, modified, uid: obj.uid })
        var item = (await getDoc(updateRef)).data();
        return resolve(item)
      })
    })
  }


  async getDoc(path: string) {
    return new Promise(async (resolve) => {
      var docRef = doc(fs, path);
      var data = (await getDoc(docRef)).data();
      return resolve(data)
    })
  }
}