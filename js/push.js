import firebase from 'firebase';

export const initializeFirebase = () => {
  firebase.initializeApp({
    messagingSenderId: 'your messagingSenderId' // troque pelo seu sender id 
  });

  // use other service worker
  // navigator.serviceWorker
  //   .register('/my-sw.js')
  //   .then((registration) => {
  //     firebase.messaging().useServiceWorker(registration);
  //   });
}

export const askForPermissioToReceiveNotifications = async () => {
  try {

    const messaging = firebase.messaging();

    await messaging.requestPermission();
    const token = await messaging.getToken();
    if(token){
    let alertToken = document.getElementById('receive-token')
    alertToken.addEventListener('submit',function (){
        alert(JSON.stringify(token,null,4));
    });
    }
    return token;
  } catch (error) {
    console.error(error);
  }
}
