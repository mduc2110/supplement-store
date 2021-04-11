import jwt from 'jsonwebtoken';
export const getToken = () => {
    return localStorage.getItem("access-token");
}

export const removeToken = () => {
    localStorage.removeItem("access-token");
}

export const getRole = () => {
    const decoded = jwt.decode(localStorage.getItem("access-token"), {complete: true});
    // console.log(decoded.payload.roles);
    return decoded.payload.roles;
}