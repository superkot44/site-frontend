function getCookie(name) {
    const cookieValue = document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)');
    return cookieValue ? cookieValue.pop() : '';
}

var isLoggedIn = getCookie('isLoggedIn');

console.log('Login:', isLoggedIn);

document.addEventListener('DOMContentLoaded', function() {
    const url = new URL(window.location.href);
    const path = url.pathname;

    if (path.endsWith('/index.html')) {
        var accountLink = document.querySelectorAll('[href="pages/auth.html"]');
    } else {
        var accountLink = document.querySelectorAll('[href="auth.html"]');
    }

    accountLink.forEach(function(link) {
        if (isLoggedIn == 'true') {
            link.innerHTML = "Кабинет";
            if (path == '/index.html') {
                link.href = "pages/account.html";
            }
            else {
                link.href = "account.html";
            }
        } else {
            link.innerHTML = "Войти";
            if (path == '/index.html') {
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
                document.cookie = `isLoggedIn=true; path=/;`;
                document.cookie = `_id=${userData._id}; path=/;`;
                document.cookie = `username=${userData.username}; path=/;`;
                document.cookie = `email=${userData.email}; path=/;`;
                document.cookie = `password=${userData.password}; path=/;`;
                document.cookie = `results=${JSON.stringify(userData.results)}; path=/;`;
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
