const form = document.getElementById('feedback-form');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Отменяем стандартное поведение формы

    if (validateForm()) {
        // Если форма валидна, можно выполнить действия отправки данных
        sendFeedback();
    }
});

let firstNameValue = "";
let lastNameValue = "";
let phoneNumberValue = "";
let messageValue = "";

function validateForm() {
    let isValid = true;

    const firstName = document.getElementById('first-name');
    const lastName = document.getElementById('last-name');
    const phoneNumber = document.getElementById('phone-number');
    const message = document.getElementById('message');

    // Проверка поля Имя
    if (firstName.value.trim() === '') {
        isValid = false;
        showError(firstName, 'Пожалуйста, введите имя');
    } else {
        showSuccess(firstName);
        firstNameValue = firstName.value;
    }

    // Проверка поля Фамилия
    if (lastName.value.trim() === '') {
        isValid = false;
        showError(lastName, 'Пожалуйста, введите фамилию');
    } else {
        showSuccess(lastName);
        lastNameValue = lastName.value;
    }

    // Проверка поля Номер телефона
    if (phoneNumber.value.trim() === '') {
        isValid = false;
        showError(phoneNumber, 'Пожалуйста, введите номер телефона');
    } else {
        showSuccess(phoneNumber);
        phoneNumberValue = phoneNumber.value;
    }

    // Проверка поля Сообщение
    if (message.value.trim() === '') {
        isValid = false;
        showError(message, 'Пожалуйста, введите сообщение');
    } else {
        showSuccess(message);
        messageValue = message.value;
    }

    return isValid;
}

function showError(input, message) {
    const formGroup = input.parentElement;
    formGroup.classList.add('error');
    const errorElement = formGroup.querySelector('.error-message');

    if (errorElement) {
        errorElement.textContent = message;
    } else {
        const newErrorElement = document.createElement('div');
        newErrorElement.className = 'error-message';
        newErrorElement.textContent = message;
        formGroup.appendChild(newErrorElement);
    }
}

function showSuccess(input) {
    const formGroup = input.parentElement;
    formGroup.classList.remove('error');
    const errorElement = formGroup.querySelector('.error-message');

    if (errorElement) {
        formGroup.removeChild(errorElement);
    }
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

function sendFeedback() {
    
    showNotification('Да, это сработало')
    
    // Отправка результатов на сервер
    const resultData = {
        firstName: firstNameValue,
        lastName: lastNameValue,
        phoneNumber: phoneNumberValue,
        message: messageValue
    };

    fetch('https://kuznetsov.up.railway.app/feedback', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(resultData)
    })
    .then(response => {
        if (response.ok) {
            console.log('Результаты отправлены на сервер');
        } else {
            console.error('Ошибка при отправке результатов на сервер');
        }
    })
    .catch(error => {
        console.error('Ошибка при отправке результатов на сервер:', error);
    });
}
