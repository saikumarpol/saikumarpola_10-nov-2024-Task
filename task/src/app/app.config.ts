import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import {getAuth,provideAuth} from '@angular/fire/auth';
import { provideFirebaseApp,initializeApp } from '@angular/fire/app';

const firebaseConfig = {
  apiKey: "AIzaSyAF4PBT9fRGj0xkIfV41IH8abYqMe9F78U",
  authDomain: "angular-firebase-app-e3887.firebaseapp.com",
  projectId: "angular-firebase-app-e3887",
  storageBucket: "angular-firebase-app-e3887.appspot.com",
  messagingSenderId: "482037432380",
  appId: "1:482037432380:web:f276093c99af4c07710339"
};

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideHttpClient(),
    importProvidersFrom([
      provideFirebaseApp(()=> initializeApp(firebaseConfig)),
      provideAuth(()=> getAuth())
    ])
  ],


};
