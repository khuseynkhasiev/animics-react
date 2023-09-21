const BASE_URL = 'https://animics.ru/api';

const getResponse = (res) => {
    return res.ok? res.json() : res.json().message;
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

export { register }
