export const LOGIN_FROM_JWT_SUCCESS = 'LOGIN_FROM_JWT_SUCCESS';
export function loginFromJWT (token) {
    return {
        type: LOGIN_FROM_JWT_SUCCESS,
        token: token
    };
}
