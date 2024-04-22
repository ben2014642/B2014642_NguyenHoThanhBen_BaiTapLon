import createApiClient from "./api.service";
class AuthenService {
    constructor(baseUrl = "/api/auth") {
        this.api = createApiClient(baseUrl);
    }
    async login(data) {
        return (await this.api.post("/login", data)).data;
    }
    async adminLogin(data) {
        return (await this.api.post("/admin-login", data)).data;
    }
    async register(data) {
        return (await this.api.post("/register", data)).data;
    }
    async deleteAll() {
        return (await this.api.delete("/")).data;
    }
    async get(id) {
        return (await this.api.get(`/${id}`)).data;
    }
    async update(id, data) {
        return (await this.api.put(`/${id}`, data)).data;

    }
    async delete(id) {
        return (await this.api.delete(`/${id}`)).data;
    }
}
export default new AuthenService();