import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Salin konfigurasi dari gambar image_cb139b.jpg Anda ke sini
const firebaseConfig = {
  apiKey: "AIzaSyBL3klo8w9goxwGa_-V225qbkUsQKquEkY",
  authDomain: "smampir-coffee.firebaseapp.com",
  projectId: "smampir-coffee",
  storageBucket: "smampir-coffee.appspot.com",
  messagingSenderId: "1082039227334",
  appId: "1:1082039227334:web:3434e5319e0c44562a58c7",
  measurementId: "G-W2M8QMG5GZ",
};

// Inisialisasi Firebase
const app = initializeApp(firebaseConfig);

// Ekspor database untuk dipakai di komponen Testimonials.jsx
export const db = getFirestore(app);
