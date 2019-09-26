console.log('[Application] start push listening');

const messaging = firebase.messaging();

messaging.requestPermission().then(function () {
    console.log('Permission granted');

    return messaging.getToken().then(function (currentToken) {
        if (currentToken) {
            let pushToken = document.getElementById('receive-token')
            pushToken.addEventListener('submit',function (e){
                alert(JSON.stringify(currentToken,null, 4));
            })
            return currentToken;
        } else {
            console.warn('Nenhum id disponível, Solicite permissão apra gerar um');
        }
    });
});

messaging.getToken()
    .then(function(currentToken) {
        if (currentToken) {
            console.log(currentToken);
            return currentToken;
        } else {
            console.warn('Nenhum id disponível, Solicite permissão apra gerar um');
        }
    })
    .catch(function(err) {
        console.warn('get token err', err);
    });