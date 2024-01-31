import axios, { type AxiosRequestConfig } from "axios";
class Client {
    baseURLTest = 'http://127.0.0.1:9001/'
    baseURL = 'https://alemonjs.com/'
    /**
     * 服务器
     * @param config
     * @returns 
     */
    async server(config: AxiosRequestConfig) {
        const req = await axios.create({
            baseURL: this.baseURL,
            timeout: 6000
        })
        return req(config)
    }
    /**
     * 得到赞助列表
     * @param typing 
     * @returns 
     */
    async searchSponsors(typing: number) {
        return await this.server({
            method: "GET",
            url: '/v1/api/sponsors/search',
            params: {
                Typing: typing
            }
        })
    }
}
export const API = new Client()