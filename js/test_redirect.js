function getCookie(name) {
    const cookieValue = document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)');
    return cookieValue ? cookieValue.pop() : '';
}

function showNotification(message) {
    var notification = document.createElement('div');
    notification.classList.add('custom-notification');
    notification.textContent = message;
    document.body.appendChild(notification);
  
    // Переменная для хранения высоты предыдущих уведомлений
    var previousNotificationsHeight = 0;
  
    // Получение высоты предыдущих уведомлений
    var previousNotifications = document.getElementsByClassName('custom-notification');
    for (var i = 0; i < previousNotifications.length; i++) {
      	previousNotificationsHeight += previousNotifications[i].offsetHeight + 7;
    }
  
    // Позиционирование нового уведомления
    notification.style.bottom = previousNotificationsHeight + 'px';
  
    setTimeout(function() {
      	notification.style.opacity = '0';
      	setTimeout(function() {
        	document.body.removeChild(notification);
      	}, 1000);
    }, 5000);
}

var accountLink = document.querySelectorAll('[href="auth.html"]');
var testButton = document.getElementById('test-button');

var isLoggedIn = getCookie('isLoggedIn');

testButton.addEventListener('click', () => {
    if (isLoggedIn == 'true') {
        const currentPageName = window.location.pathname.split('/').pop().split('.').shift();

		console.log(currentPageName);

        window.location.href = `test.html?data=${currentPageName}`;
    }
    else {
        showNotification('Сначала нужно авторизоваться!');
    }
});