import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { initializeApp } from "firebase/app";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Montagut Labo IV';
}

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzRQ5qgheuQxVnWv322kCHKUIH_2QWWQ8",
  authDomain: "ejerciciolaboiv.firebaseapp.com",
  projectId: "ejerciciolaboiv",
  storageBucket: "ejerciciolaboiv.appspot.com",
  messagingSenderId: "357199791222",
  appId: "1:357199791222:web:83d5938c0b1c5e3ce78b57"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);