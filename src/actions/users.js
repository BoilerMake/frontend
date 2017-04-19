export const LOGIN_FROM_JWT_SUCCESS = 'LOGIN_FROM_JWT_SUCCESS';
import cookie from 'react-cookie';
export function loginFromJWT (token) {
	cookie.save('token',token, {path: '/'});
    return {
        type: LOGIN_FROM_JWT_SUCCESS,
        token: token
    };
}
