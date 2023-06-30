export default class Api {
    static get HOST() {
        return "http://localhost:5000"
    }

    static async get(url) {
        const response = await fetch(url);
        return await response.json();
    }

    static async getTranslations(lng) {
        return await Api.get(`${Api.HOST}/api/translations/${lng}`);
    }
}