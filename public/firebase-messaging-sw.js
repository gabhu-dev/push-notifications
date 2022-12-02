/* eslint-disable prettier/prettier */

importScripts('https://www.gstatic.com/firebasejs/9.1.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.1.0/firebase-messaging-compat.js');


const firebaseConfig = {
  apiKey: "AIzaSyCv8fh2momdYSie4zsY8nrgqMnRP_t746k",
  authDomain: "push-notifications-cb82b.firebaseapp.com",
  projectId: "push-notifications-cb82b",
  storageBucket: "push-notifications-cb82b.appspot.com",
  messagingSenderId: "825748182548",
  appId: "1:825748182548:web:65bb8259f5ef9c1d827901",
  measurementId: "G-4EXWFXFJWE"
};



firebase.initializeApp(firebaseConfig)

// app.messaging().getToken({ vapidKey: "BIkEkD9SoE0RmxzBsfCSSEI-fgai5ebU54f3dx5ExaBhvEoduKL44V0w4MmFtIFEF-eiTC7C-VNkhTesF1HYYps" })
// .then((currentToken) => {
//   if (currentToken) {
//     console.log('client token', currentToken)
//   } else {
//     console.log('No registration token available. Request permission to generate one.');
//   }
// }).catch((err) => {
//   console.log('An error occurred while retrieving token. ', err);
// })

// console.log(app)

// // Retrieve firebase messaging
const messaging = firebase.messaging();
console.log(messaging)

// messaging.getToken({ vapidKey: "BIkEkD9SoE0RmxzBsfCSSEI-fgai5ebU54f3dx5ExaBhvEoduKL44V0w4MmFtIFEF-eiTC7C-VNkhTesF1HYYps" })
// .then((currentToken) => {
//   if (currentToken) {
//     console.log('client token', currentToken)
//     // document.innerHTML = currentToken;
//   } else {
//     console.log('No registration token available. Request permission to generate one.');
//   }
// }).catch((err) => {
//   console.log('An error occurred while retrieving token. ', err);
// })



messaging.onBackgroundMessage((payload) => {
console.log('Received background message ', payload);

const notificationTitle = payload.notification.title;
const notificationOptions = {
body: payload.notification.body,
};

return self.registration.showNotification(notificationTitle,
notificationOptions)

});
// messaging.setBackgroundMessageHandler(function(payload) {
//   console.log('[firebase-messaging-sw.js] Received background message ', payload);
//   // Customize notification here
//   var notificationTitle = 'Background Message Title';
//   var notificationOptions = {
//     body: 'Background Message body.',
//     icon: '/firebase-logo.png'
//   };

//   return self.registration.showNotification(notificationTitle,
//     notificationOptions);
// });

// console.log(Notification, 'notification')
// function requestPermission() {
//   console.log("requesting permission...", firebase);
//   Notification.requestPermission().then((permission) => {
//     if (permission === "granted") {
//       console.log("Notification permission granted");
//       const app = firebase.initializeApp(firebaseConfig);

//       const messaging = firebase.messaging(app);
//       console.log(messaging);
//       // const auth = getAuth(app);
//       // console.log("auth", auth);
//       // signInAnonymously(auth)
//       //   .then((user) => console.log(user))
//       //   .catch((error) => console.error(error));
        
//       firebase.getToken(messaging, {
//         vapidKey: "BIkEkD9SoE0RmxzBsfCSSEI-fgai5ebU54f3dx5ExaBhvEoduKL44V0w4MmFtIFEF-eiTC7C-VNkhTesF1HYYps",
//       }).then((currentToken) => {
//         if (currentToken) {
//           console.log("currentToken", currentToken);
//         } else {
//           console.log("can not get token");
//         }
//       });
//       firebase.onMessage(messaging, (payload) => {
//         console.log(payload)
//       })
//     } else {
//       console.log("do not have permission");
//     }
//   });
// }

// requestPermission();

// console.log('service worker')
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
