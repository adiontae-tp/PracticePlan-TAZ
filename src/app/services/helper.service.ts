import { Injectable } from '@angular/core';
import {
  LoadingController,
  ModalController,
  AlertController,
  ToastController,
  LoadingOptions,
  AlertInput,
} from '@ionic/angular';
import { stat } from 'fs';
import * as moment from 'moment';
import { Activity } from '../classes/activity';
import { Plan } from '../classes/plan';

@Injectable({
  providedIn: 'root',
})
export class HelperService {
  constructor(
    private loadingCtrl: LoadingController,
    private modelCtrl: ModalController,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController
  ) {}

  showLoading(options: LoadingOptions = { duration: 10000 }) {
    this.loadingCtrl.create(options).then((l) => {
      l.present();
    });
  }
  hideLoading() {
    this.loadingCtrl.dismiss();
  }

  showToast(
    message = 'You changes have been saved.',
    duration = 1500,
    position: 'top' | 'bottom' | 'middle' = 'middle'
  ) {
    this.toastCtrl
      .create({
        message,
        duration,
        position,
      })
      .then((t) => t.present());
  }

  showModal(component: any, componentProps?: any) {
    return new Promise((resolve) => {
      this.modelCtrl.create({ component, componentProps }).then((m) => {
        m.present();
        m.onDidDismiss().then((result) => {
          return resolve(result.data);
        });
      });
    });
  }

  closeModal(props?: any) {
    this.modelCtrl.dismiss(props);
  }

  showAlert(header: string, message: string) {
    this.alertCtrl.create({ header, message, buttons: ['OK'] }).then((a) => {
      a.present();
    });
  }

  showAlertConfirmation(header: string, message: string, btnTxt: string) {
    return new Promise((resolve) => {
      this.alertCtrl
        .create({
          header,
          message,
          buttons: [
            {
              text: 'Cancel',
            },
            {
              text: btnTxt,
              handler: () => {
                return resolve(true);
              },
            },
          ],
        })
        .then((a) => a.present());
    });
  }

  showAlertInput(
    header: string,
    message: string,
    btnTxt: string,
    inputs: AlertInput[]
  ) {
    return new Promise((resolve) => {
      this.alertCtrl
        .create({
          header,
          message,
          inputs,
          buttons: [
            {
              text: 'Cancel',
            },
            {
              text: btnTxt,
              handler: (result) => {
                return resolve(result);
              },
            },
          ],
        })
        .then((a) => a.present());
    });
  }

  updateDuration(plan: { duration: number; activities: any[] }) {
    var duration = 0;
    plan.activities.forEach((activity) => {
      duration = duration + parseInt(activity.duration);
    });
    plan.duration = duration;
  }

  updateTimes(plan: {
    startTime: number;
    endTime: number;
    activities: Activity[];
  }) {
    var startTime = plan.startTime;
    plan.endTime = plan.startTime;
    plan.activities.forEach((activity) => {
      activity.startTime = startTime;
      activity.endTime = parseInt(
        moment(activity.startTime, 'x').add('m', activity.duration).format('x')
      );
      startTime = activity.endTime;
      plan.endTime = startTime;
    });
  }

  updateDurationTimes(plan: any) {
    this.updateDuration(plan);
    this.updateTimes(plan);
  }
  moment = moment;

  dayTime(obj: { startTime: number; endTime: number }) {
    var start = this.getTime(obj.startTime);
    var end = this.getTime(obj.endTime);
    return moment(obj.startTime, 'x').format('dddd MMM Do');
  }
  startEndTime(obj: { startTime: number; endTime: number }) {
    var start = this.getTime(obj.startTime);
    var end = this.getTime(obj.endTime);
    return start + ' - ' + end;
  }

  startEndDuration(obj: {
    startTime: number;
    endTime: number;
    duration: number;
  }) {
    var time =
      this.startEndTime(obj) + ' (' + this.getDuration(obj.duration) + ')';
    return time;
  }
  dateFormat(obj: { startTime: number }) {
    return moment(obj.startTime, 'x').format('ddd MMM Do');
  }

  getTime(time: number) {
    return moment(time, 'x').format('h:mm A');
  }

  getDuration(value: number) {
    let minsRaw = value % 60;
    let hoursRaw = Math.floor(value / 60);
    let hours = hoursRaw
      ? hoursRaw == 1
        ? hoursRaw + ' hour'
        : hoursRaw + ' hours'
      : '';
    let min = minsRaw == 1 ? minsRaw + ' min' : minsRaw + ' mins';

    return hoursRaw ? `${hours} ${min}` : `${min}`;
  }
}
