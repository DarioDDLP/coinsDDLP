import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

// Animaciones de primeng
import { provideAnimationsAsync } from "@angular/platform-browser/animations/async";

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),

  // Firebase
  importProvidersFrom(provideFirebaseApp(() => initializeApp({ "projectId": "coinsddlp-back", "appId": "1:684451770045:web:5bb64e0ead08b97f2c91d4", "storageBucket": "coinsddlp-back.appspot.com", "apiKey": "AIzaSyB-1dCHmVmJSb4IiR3GPN5ys5l4YT4RlWU", "authDomain": "coinsddlp-back.firebaseapp.com", "messagingSenderId": "684451770045" }))), importProvidersFrom(provideAuth(() => getAuth())), importProvidersFrom(provideFirestore(() => getFirestore())),

  // Animaciones de primeng
  provideAnimationsAsync(),
  ]
};
