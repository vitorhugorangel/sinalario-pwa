export const notificarUsuario = (mensagem: string): void => {
  if (!('Notification' in window)) {
    // eslint-disable-next-line no-alert
    alert('This browser does not support desktop notification');
  } else if (Notification.permission === 'granted') {
    const notification = new Notification(mensagem);
    notification.onshow = () => {
      if (window.navigator.vibrate) {
        window.navigator.vibrate(500);
      }
    };
  } else if (Notification.permission !== 'denied') {
    Notification.requestPermission().then((permission) => {
      if (permission === 'granted') {
        const notification = new Notification(mensagem);
        notification.onshow = () => {
          if (window.navigator.vibrate) {
            window.navigator.vibrate(500);
          }
        };
      }
    });
  }
};
