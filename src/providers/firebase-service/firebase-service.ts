import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { ToastController } from 'ionic-angular';

@Injectable()
export class FirebaseServiceProvider {

  constructor(public toastCtrl: ToastController,public afd:AngularFireDatabase) {}

  getTasks(){
    return this.afd.list('/taskItems/');
  }

  addTask(name){
    this.afd.list('/taskItems/').push(name);
  }

  removeTask(id){
    this.afd.list('/taskItems/').remove(id);
  }

  finished(nn,id){
    this.afd.list('/finList/').push(nn);
    this.afd.list('/taskItems/').remove(id);
  }

  getFin(){
    return this.afd.list('/finList/');
  }

  delfin(id){
    this.afd.list('/finList/').remove(id);
  }

  showToastWithCloseButton() {
    const toast = this.toastCtrl.create({
      message: 'Oops! you missed a field ;)',
      showCloseButton: true,
      closeButtonText: 'Ok'
    });
    toast.present();
}

}
