const BASE_URL = 'https://animics.ru/api';

const getResponse = (res) => {
    return res.ok? res.json() : res.json().message;
}

const checkUniqueLogin = (login) => {
    return fetch(`${BASE_URL}/register/unique/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({login})
    }).then((res) => getResponse(res))
}

const checkUniqueEmail = (email) => {
    return fetch(`${BASE_URL}/register/unique/mail`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({email})
    }).then((res) => getResponse(res))
}
const register = ({
    agreement,
    consent,
    email,
    login,
    name,
    surname,
    password,
    password_confirmation,
    date
}) => {
    return fetch(`${BASE_URL}/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            agreement,
            consent,
            email,
            login,
            name,
            surname,
            password,
            password_confirmation,
            date
        })
    })
        .then((res) => getResponse(res))
}

export { register, checkUniqueLogin, checkUniqueEmail }
