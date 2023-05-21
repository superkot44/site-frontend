var menuItems = document.getElementsByClassName('menu-item');
var sidebar = document.querySelector('.sidebar');
var content = document.querySelector('.content');
var usernameInput, emailInput, currentPasswordInput, newPasswordInput, confirmPasswordInput;
var changePasswordButton, saveButton;
var testsResult = [];


function getCookie(name) {
  const cookieValue = document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)');
  return cookieValue ? cookieValue.pop() : '';
}

function deleteCookie(name) {   
  document.cookie = name+'=; Max-Age=-99999999;';  
}

function updateCookie(cookieName, newValue) {
  document.cookie = cookieName + "=" + newValue + "; path=/pages;";
}


// Функция для проверки авторизации
function checkAuthorization() {
  // Получение JSON-cookie
  var isLoggedIn = getCookie('isLoggedIn');

  if (isLoggedIn == 'true') {
    // Отображаем содержимое страницы
    content.style.display = 'block';
  } else {
    console.error('Cookie не содержит JSON-данных пользователя');
    showLoginMessage();
  }
}

// Функция для отображения сообщения о необходимости авторизации
function showLoginMessage() {
  var message = document.createElement('p');
  message.textContent = 'Пожалуйста, авторизуйтесь, чтобы просмотреть содержимое страницы.';
  document.querySelector('.container').appendChild(message);

  // Скрываем боковую панель
  sidebar.style.display = 'none';

  // Скрываем содержимое страницы
  content.style.display = 'none';
}

// Вызов функции для проверки авторизации при загрузке страницы
checkAuthorization();

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


// По умолчанию выбираем пункт "Данные"
menuItems[0].classList.add('active');
showDataPage();

for (var i = 0; i < menuItems.length; i++) {
  menuItems[i].addEventListener('click', function(event) {
    event.preventDefault();

    // Удаляем класс "active" у всех пунктов меню
    for (var j = 0; j < menuItems.length; j++) {
      menuItems[j].classList.remove('active');
    }

    // Добавляем класс "active" к выбранному пункту меню
    this.classList.add('active');

    // Получаем текст выбранного пункта меню
    var selectedMenu = this.textContent;

    // В зависимости от выбранного пункта меню, добавляем соответствующее содержимое
    if (selectedMenu === 'Данные') {
      showDataPage();
    } else if (selectedMenu === 'Результаты тестов') {
      showTestResultsPage();
    }
  });
}

function showDataPage() {
  content.innerHTML = '';

  var form = document.createElement('form');
  form.classList.add('data-form');

  usernameInput = createInput('text', 'username', 'Имя пользователя');
  form.appendChild(usernameInput);

  emailInput = createInput('email', 'email', 'Почта');
  form.appendChild(emailInput);

  changePasswordButton = document.createElement('button');
  changePasswordButton.textContent = 'Изменить пароль';
  form.appendChild(changePasswordButton);

  currentPasswordInput = createInput('password', 'current-password', 'Текущий пароль');
  newPasswordInput = createInput('password', 'new-password', 'Новый пароль');
  confirmPasswordInput = createInput('password', 'confirm-password', 'Подтвердите пароль');

  currentPasswordInput.style.display = 'None';
  newPasswordInput.style.display = 'None';
  confirmPasswordInput.style.display = 'None';

  saveButton = document.createElement('button');
  saveButton.type = 'button';
  saveButton.textContent = 'Сохранить';

  exitButton = document.createElement('button');
  exitButton.type = 'button';
  exitButton.textContent = 'Выйти';

  changePasswordButton.addEventListener('click', function(event) {
    event.preventDefault();

    showPasswordFields(form);
  });

  saveButton.addEventListener('click', function(event) {
    saveData();
  });

  exitButton.addEventListener('click', function(event) {
    event.preventDefault();

    exit();
  });

  content.appendChild(form);
  form.appendChild(currentPasswordInput);
  form.appendChild(newPasswordInput);
  form.appendChild(confirmPasswordInput);
  form.appendChild(saveButton);
  form.appendChild(exitButton);
  document.getElementById('username').value = getCookie('username');
  document.getElementById('email').value = getCookie('email');
}

function formatDateTime(dateTimeString) {
  const dateTime = new Date(dateTimeString);

  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    timeZoneName: 'short'
  };

  return dateTime.toLocaleString('en-US', options);
}


function showTestResultsPage() {
  const testResultsCookie = getCookie('results');

  const listContainer = document.createElement('div');
  listContainer.classList.add('mdc-list');

  let testResults = JSON.parse(testResultsCookie);

  testResults.forEach((result) => {
    const listItem = document.createElement('li');
    listItem.classList.add('mdc-list-item');

    let topic;
    if (result.topic == 'litra') {
      topic = "Литература";
    }
    else if (result.topic == 'rus') {
      topic = "Русский язык";
    }

    const topicElement = document.createElement('span');
    topicElement.classList.add('mdc-list-item__text');
    topicElement.textContent = `Предмет: ${topic}`;

    const dateElement = document.createElement('span');
    dateElement.classList.add('mdc-list-item__text');
    dateElement.textContent = `Дата: ${result.date}`;

    const scoreElement = document.createElement('span');
    scoreElement.classList.add('mdc-list-item__text');
    scoreElement.textContent = `Оценка: ${result.score}`;

    listItem.appendChild(topicElement);
    listItem.appendChild(dateElement);
    listItem.appendChild(scoreElement);

    listContainer.appendChild(listItem);
  });

  content.innerHTML = '';
  content.appendChild(listContainer);
}

function createInput(type, id, label) {
  var container = document.createElement('div');
  container.classList.add('input-container');

  var input = document.createElement('input');
  input.type = type;
  input.id = id;
  input.placeholder = label;
  input.autocomplete = "new-password";

  var inputLabel = document.createElement('label');
  inputLabel.textContent = label;

  container.appendChild(inputLabel);
  container.appendChild(input);

  return container;
}

function showPasswordFields(form) {
  currentPasswordInput.style.display = 'block';
  newPasswordInput.style.display = 'block';
  confirmPasswordInput.style.display = 'block';

  changePasswordButton.style.display = 'none';
}

function saveData() {
	let username = document.getElementById('username').value;
	let email = document.getElementById('email').value;
	let currentPassword = document.getElementById('current-password').value;
	let newPassword = document.getElementById('new-password').value;
	let confirmPassword = document.getElementById('confirm-password').value;

  	console.log(email);

	let result = {
    		_id: getCookie('_id'),
		username: username,
		email: email,
		password: newPassword,
		results: getCookie('results')
	}

	if (username == getCookie('username')) {
		result.username = getCookie('username');
	}
	else {
		if (username == '') {
			showNotification('Введите имя пользователя!');
			return;
		}
	}

	if (email == getCookie('email')) {
		result.email = getCookie('email');
	}
	else {
		if (email == '') {
			showNotification('Введите почту!');
			return;
		}
	}

	if (currentPassword == getCookie('password')) {
		if (newPassword != confirmPassword) {
			showNotification('Пароли не совпадают!');
			return;
		}
	}
	else {
		if (currentPassword == '') {
			result.password = getCookie('password');
		}
		else {
			showNotification('Неверный пароль!');
			return;
		}
	}

  console.log(result);

	updateCookie('username', result.username);
	updateCookie('email', result.email);
	updateCookie('password', result.password);

  console.log(result);
  
	fetch('https://kuznetsov.up.railway.app/update', {
	  method: 'POST',
	  headers: {
		'Content-Type': 'application/json',
	  },
	  body: JSON.stringify(result),
	})
	  .then((response) => {
		if (response.ok) {
		  console.log('Регистрационные данные успешно обновлены!');
		} else {
		  console.error('Ошибка при отправке данных на сервер');
		}
	  })
	  .catch((error) => {
		console.error('Ошибка при отправке данных на сервер:', error);
	  });
  
	showNotification('Данные успешно обновлены!');
	clearPasswordFields();
}
  
  

function clearPasswordFields() {
  currentPasswordInput.value = '';
  newPasswordInput.value = '';
  confirmPasswordInput.value = '';

  currentPasswordInput.style.display = 'none';
  newPasswordInput.style.display = 'none';
  confirmPasswordInput.style.display = 'none';

  changePasswordButton.style.display = '';
}


function exit() {
  deleteCookie('_id');
  deleteCookie('username');
  deleteCookie('email');
  deleteCookie('password');
  deleteCookie('results');

  updateCookie('isLoggedIn', 'false');
  
  window.location.href = "index.html";
}
