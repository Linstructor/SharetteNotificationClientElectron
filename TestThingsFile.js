const {app,Notification} = require('electron');

let notification = new ToastNotification({
    appId: '23',
    template: `<toast><visual><binding template="ToastText01"><text id="1">%s</text></binding></visual></toast>`,
    strings: ['Hi!']
});

notification.on('activated', () => console.log('Activated!'));
notification.show();
