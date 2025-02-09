import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAziLS3RwDFvcf9UZq1fNHmO42UDrt7zak",
    authDomain: "test-fe-e538a.firebaseapp.com",
    projectId: "test-fe-e538a",
    storageBucket: "test-fe-e538a.firebasestorage.app",
    messagingSenderId: "166424982297",
    appId: "1:166424982297:web:5e018bd405893105e88b88",
    measurementId: "G-LN4V3GN55J"
  };
  

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);