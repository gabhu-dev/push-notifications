/* eslint-disable prettier/prettier */
import { initializeApp } from "firebase/app";
import {
  getMessaging,
  getToken,
  onMessage
} from "firebase/messaging";
import {getAuth, signInAnonymously} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCv8fh2momdYSie4zsY8nrgqMnRP_t746k",
  authDomain: "push-notifications-cb82b.firebaseapp.com",
  projectId: "push-notifications-cb82b",
  storageBucket: "push-notifications-cb82b.appspot.com",
  messagingSenderId: "825748182548",
  appId: "1:825748182548:web:65bb8259f5ef9c1d827901",
  measurementId: "G-4EXWFXFJWE"
};

function requestPermission() {
  console.log("requesting permission...");
  Notification.requestPermission().then((permission) => {
    if (permission === "granted") {
      console.log("Notification permission granted");
      const app = initializeApp(firebaseConfig);

      const messaging = getMessaging(app);
      console.log(messaging);
      const auth = getAuth(app);
      console.log("auth", auth);
      signInAnonymously(auth)
        .then((user) => console.log(user))
        .catch((error) => console.error(error));
        
      getToken(messaging, {
        vapidKey: "BIkEkD9SoE0RmxzBsfCSSEI-fgai5ebU54f3dx5ExaBhvEoduKL44V0w4MmFtIFEF-eiTC7C-VNkhTesF1HYYps",
      }).then((currentToken) => {
        if (currentToken) {
          console.log("currentToken", currentToken);
        } else {
          console.log("can not get token");
        }
      });
      onMessage(messaging, (payload) => {
        console.log(payload)
      })
    } else {
      console.log("do not have permission");
    }
  });
}

requestPermission();

console.log('service worker')
// const app = initializeApp(firebaseConfig);
// const messagingRes = getMessaging(app);

// console.log(messagingRes)
// messagingRes.onBackgroundMessageHandler
// (payload => {
//   console.log('recibiste un mensaje mientras estabas ausente')
//   const notificationTitle= payload.notification.title;
//   const notificationOptions = {
//     body: payload.notification.body,
//   };

// return self.registration.showNotification(notificationTitle, notificationOptions)
// })
