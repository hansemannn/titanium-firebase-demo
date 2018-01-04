var FirebaseCore = require('firebase.core');
var FirebaseAnalytics = require('firebase.analytics');

var win = Ti.UI.createWindow({
  backgroundColor: '#fff'
});

win.addEventListener('open', configureFirebase);

var btn = Ti.UI.createButton({
  title: 'Log Event "test_event"'
});

btn.addEventListener('click', sendEvent);

win.add(btn);
win.open();

function configureFirebase() {
  FirebaseCore.configure();
}

function sendEvent() {
  FirebaseAnalytics.log('test_event', {});
}
