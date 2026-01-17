// Import the functions you need from the SDKs you need
import {
    initializeApp
} from "firebase/app";
import {
    getAnalytics
} from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDO144_O1f2H2ho6M4P0GoViyucdfSi2yA",
    authDomain: "three-dos-b9828.firebaseapp.com",
    projectId: "three-dos-b9828",
    storageBucket: "three-dos-b9828.firebasestorage.app",
    messagingSenderId: "586493231205",
    appId: "1:586493231205:web:783becff06f8eb9ba6c68c",
    measurementId: "G-V0XMSMEDZD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);