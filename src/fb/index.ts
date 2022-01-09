import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const config = {
  apiKey: "AIzaSyAmNEwtWKbceMNUlb-iHYeQSPcUKTe3P7I",
  authDomain: "vmanga-419c0.firebaseapp.com",
  projectId: "vmanga-419c0",
  storageBucket: "vmanga-419c0.appspot.com",
  messagingSenderId: "1077693608323",
  appId: "1:1077693608323:web:35be36e08c999f40f8c6b6"
}

export const app = initializeApp(config, 'vmanga')
export const auth = getAuth(app)