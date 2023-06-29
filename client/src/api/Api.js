export default class Api {
    static get HOST() {
        return "http://localhost:5000"
    }

    static get URL_LOCALIZATION() {
        return "localization"
    }

    static async get(url) {
        const response = await fetch(`${Api.HOST}/api/${url}`);
        return await response.json();
    }
}