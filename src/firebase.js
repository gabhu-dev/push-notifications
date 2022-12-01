/* eslint-disable prettier/prettier */
import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyCv8fh2momdYSie4zsY8nrgqMnRP_t746k",
  authDomain: "push-notifications-cb82b.firebaseapp.com",
  projectId: "push-notifications-cb82b",
  storageBucket: "push-notifications-cb82b.appspot.com",
  messagingSenderId: "825748182548",
  appId: "1:825748182548:web:65bb8259f5ef9c1d827901",
  measurementId: "G-4EXWFXFJWE",
};

const app = initializeApp(firebaseConfig);

console.log('in firebase')
// const analytics = getAnalytics(app);
export const messaging = getMessaging(app);
