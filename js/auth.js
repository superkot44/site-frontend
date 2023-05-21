// =======================ПЕРЕМЕННЫЕ=======================
const authForms = document.querySelector('.auth');
const loginForm = document.querySelector('.login-form');
const registrationForm = document.querySelector('.registration-form');
const registrationFormLink = document.querySelector('.registration-form__link');
const loginFormLink = document.querySelector('.login-form__link');

let current_user;

const interval = 5000; // 5 секунд
const clientKeys = {}; // Объект ключей клиента
// =======================ПЕРЕМЕННЫЕ=======================



// =======================ФУНКЦИИ=======================

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

// =======================ФУНКЦИИ=======================



// =======================СОБЫТИЯ=======================
registrationFormLink.addEventListener('click', (event) => {
    event.preventDefault();
    loginForm.classList.remove('show');
    registrationForm.classList.add('show');
});

loginFormLink.addEventListener('click', (event) => {
    event.preventDefault();
    registrationForm.classList.remove('show');
    loginForm.classList.add('show');
});

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const resultData = {
        email: loginForm.querySelector('#email').value,
        password: loginForm.querySelector('#password').value
    };

    fetch('https://kuznetsov.up.railway.app/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(resultData)
    })
      .then(response => {
        if (response.ok) {
          // Авторизация прошла успешно
          // Получение данных пользователя из ответа
          
          response.json().then(userData => {
            // Добавление данных пользователя в cookie
            document.cookie = `isLoggedIn=true;`;
            document.cookie = `_id=${userData._id};`;
            document.cookie = `username=${userData.username};`;
            document.cookie = `email=${userData.email};`;
            document.cookie = `password=${userData.password};`;
            document.cookie = `results=${JSON.stringify(userData.results)};`;
      
            // Перенаправление на другую страницу
            window.location.href = 'account.html';
          });
        } else {
          throw new Error('Неверное имя пользователя или пароль');
        }
      })
      .catch(error => {
        console.error(error);
        showNotification(error);
      });
});
  

registrationForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const resultData = {
        username: registrationForm.querySelector('#r-username').value,
        email: registrationForm.querySelector('#r-email').value,
        password: registrationForm.querySelector('#r-password').value
    };

    fetch('https://kuznetsov.up.railway.app/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(resultData)
    })
    .then(response => {
        if (response.ok) {
            // Регистрация прошла успешно
            // Получение данных пользователя из ответа

            response.json().then(userData => {
				// Добавление данных пользователя в cookie
				document.cookie = `isLoggedIn=true;`;
        document.cookie = `_id=${userData._id};`;
				document.cookie = `username=${userData.username};`;
				document.cookie = `email=${userData.email};`;
				document.cookie = `password=${userData.password};`;
				document.cookie = `results=${JSON.stringify(userData.results)};`;
			
				// Перенаправление на другую страницу
				window.location.href = 'account.html';
            });            

        } else if (response.status === 409) {
        	throw new Error('Пользователь с таким именем уже существует');
        } else {
            throw new Error('Ошибка при регистрации');
        }
    })
    .catch(error => {
        console.error(error);
        showNotification(error);
    });
});
  
// =======================СОБЫТИЯ=======================