import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAfy1AVLiUNmmMVjzsCmD9OUEb5tTLAKFA",
    authDomain: "crm-project-f0316.firebaseapp.com",
    projectId: "crm-project-f0316",
    storageBucket: "crm-project-f0316.firebasestorage.app",
    messagingSenderId: "831503756601",
    appId: "1:831503756601:web:1d6d3288e470c84b7f0ce8",
    measurementId: "G-23548X4RTE"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);