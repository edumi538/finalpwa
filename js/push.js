if('serviceWorker' in navigator){
    navigator.serviceWorker.register('./firebase-messaging-sw.js')
    .then(registration =>{

        const messaging = firebase.messaging();
        let userToken = null;

messaging.requestPermission().then(function () {
    
    return messaging.getToken()
})
.then(function(currentToken){

    console.log(currentToken);
    userToken = currentToken;

});

messaging.onTokenRefresh(function (){
    messaging.getToken().then(function (refreshedToken){
        console.log(currentToken);
        userToken = currentToken;
    });
});
    })
}

