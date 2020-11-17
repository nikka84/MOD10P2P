'use strict';

let deferredInstallPrompt = null;
const installButton = document.getElementById('butInstall');
installButton.addEventListener('click', installPWA);

window.addEventListener('beforeinstallprompt', saveBeforeInstallPromptEvent);

function saveBeforeInstallPromptEvent (evt) {
    deferredInstallPrompt = evt;
    installButton.removeAttribute('hidden');
}

function installPWA (evt) {
    deferredInstallPrompt.promt();
    evt.srcElement.setAttribute('hidden', true);
    deferredInstallPrompt.userChoice.then((choice) => {
        if(choice.outcome==='acepted'){
            console.log('aceptado')
        } else {
            console.log('no aceptado')
        }
        deferredInstallPrompt = null;
    })
}

window.addEventListener('appinstalled', logAppInstalled);

function logAppInstalled (evt) {
    console.log('App pelis instalada');
}