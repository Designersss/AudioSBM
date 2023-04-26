import axios from "axios";
import {$authHost, $host} from "./index";
import jwtDecode from "jwt-decode";

export const registration = async (email, password) => {
    const {data} = await $host.post('api/user/register', {email, password})
    localStorage.setItem('token', data.token)
    return jwtDecode(data.token)
}

export const login = async (email, password, description, socialVk, socialTel, img) => {
    const {data} = await $host.post('api/user/login', {email, password, description, socialVk, socialTel, img})
    localStorage.setItem('token', data.token)
    return jwtDecode(data.token)
}

export const check = async () => {
    const {data} = await $authHost.get('api/user/auth')
    localStorage.setItem('token', data.token)
    return jwtDecode(data.token)
}

export const fetchAllUser = async () => {
    const {data} = await $host.get('api/user')
    return data
}