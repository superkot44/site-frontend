function getCookie(name) {
    const cookieValue = document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)');
    return cookieValue ? cookieValue.pop() : '';
}

var isLoggedIn = getCookie('isLoggedIn');

document.addEventListener('DOMContentLoaded', function() {
    var accountLink = document.querySelectorAll('[href="auth.html"]');

    accountLink.forEach(function(link) {
        if (isLoggedIn == 'true') {
            link.innerHTML = "Кабинет";
            if (window.location.href == "https://superkot44.github.io/site-frontend/index.html" || window.location.href == 'index.html') {
                link.href = "pages/account.html";
            }
            else {
                link.href = "account.html";
            }
        } else {
            link.innerHTML = "Войти";
            if (window.location.href == "https://superkot44.github.io/site-frontend/index.html" || window.location.href == 'index.html') {
                link.href = "pages/auth.html";
            }
            else {
                link.href = "auth.html";
            }
        }
    });
});

async function load() {
    if (isLoggedIn == 'true') {
        let _id = getCookie('_id');

        try {
            const response = await fetch('https://kuznetsov.up.railway.app/getresults', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ _id: _id })
            });
    
            if (response.ok) {
                const userData = await response.json();
                console.log(userData);
                document.cookie = `_id=${userData._id}`;
                document.cookie = `username=${userData.username}`;
                document.cookie = `email=${userData.email}`;
                document.cookie = `password=${userData.password}`;
                document.cookie = `results=${JSON.stringify(userData.results)}`;
            } else if (response.status === 409) {
                throw new Error('Пользователь с таким именем уже существует');
            } else {
                throw new Error('Ошибка при регистрации');
            }
        } catch (error) {
            console.error(error);
            showNotification(error);
        }
    }
}

window.addEventListener('load', load);
