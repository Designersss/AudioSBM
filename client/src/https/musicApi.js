import axios from "axios";
import {$authHost, $host} from "./index";

export const createMusic = async (music) => {
    const {data} = await $authHost.post('api/track', music)
    return data
}

export const fetchMusic = async (page, limit = 5) => {
    const {data} = await $host.get('api/track', {params: {
            page, limit
        }})
    return data
}

export const fetchOneMusic = async (id) => {
    const {data} = await $host.get('api/track/' + id)
    return data
}