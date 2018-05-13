import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {FirebaseServiceProvider} from './../../providers/firebase-service/firebase-service';
import {FirebaseObservable} from 'angularfire2/database';
import { LoadingController } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  finList:FirebaseObservable<any[]>;
  taskItems:FirebaseObservable<any[]>;
  newTask = '';
  finTask='';
  // private of:FormGroup;
  constructor(public loadingCtrl: LoadingController,public navCtrl: NavController,public fbsp:FirebaseServiceProvider) {
    this.taskItems = this.fbsp.getTasks();
    this.finList = this.fbsp.getFin();
   //
   // this.orderForm = this.formBuilder.group({
   //   "newTask":["",Validators.required]
   //
   // });

  }




  addTask() {
    if(this.newTask==''){
      this.fbsp.showToastWithCloseButton();
}

    else{
    this.fbsp.addTask(this.newTask);
    this.newTask='';
  }

}

  removeTask(id) {
    this.fbsp.removeTask(id);
  }

  finished(finTask,id){
    this.fbsp.finished(finTask,id);
  }

  delfin(id){
    this.fbsp.delfin(id);
  }

  // submit(){
  //   this.orderForm.reset();
  // }



}
