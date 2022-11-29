/* eslint-disable prettier/prettier */
import { initializeApp } from "firebase/app";
import {
  getMessaging,
  getToken,
} from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyCv8fh2momdYSie4zsY8nrgqMnRP_t746k",
  authDomain: "push-notifications-cb82b.firebaseapp.com",
  projectId: "push-notifications-cb82b",
  storageBucket: "push-notifications-cb82b.appspot.com",
  messagingSenderId: "825748182548",
  appId: "1:825748182548:web:65bb8259f5ef9c1d827901"
};

function requestPermission() {
  console.log("requesting permission...");
  Notification.requestPermission().then((permission) => {
    if (permission === "granted") {
      console.log("Notification permission granted");
      const app = initializeApp(firebaseConfig);

      const messaging = getMessaging(app);
      getToken(messaging, {
        vapidKey: "BIkEkD9SoE0RmxzBsfCSSEI-fgai5ebU54f3dx5ExaBhvEoduKL44V0w4MmFtIFEF-eiTC7C-VNkhTesF1HYYps",
      }).then((currentToken) => {
        if (currentToken) {
          console.log("currentToken", currentToken);
        } else {
          console.log("can not get token");
        }
      });
    } else {
      console.log("do not have permission");
    }
  });
}

requestPermission();
