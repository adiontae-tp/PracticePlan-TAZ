import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { ComponentsModule } from './components/components/components.module';
import { QuillModule } from 'ngx-quill';

const firebaseConfig = {
  apiKey: 'AIzaSyD4FJLkPPUx__zIbAHeytWhZfjO2eXjs2g',
  authDomain: 'restimate-tp.firebaseapp.com',
  projectId: 'restimate-tp',
  storageBucket: 'restimate-tp.appspot.com',
  messagingSenderId: '554300735644',
  appId: '1:554300735644:web:499a66982f315c92db2d59',
  measurementId: 'G-9RM8T1278C',
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const fs = getFirestore();
const auth = getAuth();
var toolbarOptions = [
  ['bold'], // toggled buttons

  [{ list: 'ordered' }, { list: 'bullet' }],

  [{ header: [1, 2, 3, 4, 5, 6, false] }],

  ['image', 'link', 'clean'],
  // remove formatting button
];

export { fs, auth };

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    ComponentsModule,
    QuillModule.forRoot({ modules: { toolbar: toolbarOptions } }),
    IonicModule.forRoot({ mode: 'md' }),
    AppRoutingModule,
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
