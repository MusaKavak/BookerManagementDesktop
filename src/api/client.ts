import axios from "axios"

export class API {

    private static BASE_URL = "https://bookerapi.up.railway.app/"

    static async get<T>(path: string): Promise<T | undefined> {
        try {
            const { data } = await axios.get(this.BASE_URL + path)
            return data as T
        } catch (error) {
            console.error(error)
            return undefined
        }
    }

}