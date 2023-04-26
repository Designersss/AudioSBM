import {$host} from "./index";

export const fetchServicesAll = async () => {
    const {data} = await $host.get('api/services')
    return data
}