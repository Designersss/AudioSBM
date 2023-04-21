import axios from "axios";
import {$authHost, $host} from "./index";

export const fetchAllUser = async () => {
    const {data} = await $host.get('api/user')
    return data
}