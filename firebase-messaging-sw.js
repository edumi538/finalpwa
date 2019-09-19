importScripts('https://www.gstatic.com/firebasejs/6.6.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/5.9.1/firebase-messaging.js');

firebase.initializeApp({
    'messagingSenderId': "824658242094"  
});

const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function(payload){
    console.log('Received background message', payload);
    return self.registration.showNotification({},{});
})

