import createApiClient from "./api.service";
class BorrowService {
    constructor(baseUrl = "/api/borrow") {
        this.api = createApiClient(baseUrl);
    }
    async getAll() {
        return (await this.api.get("/admin")).data;
    }
    async getAllByUser(user_id) {
        return (await this.api.get("/" + user_id)).data;
    }
    async getOneByIdBorrow(id_borrow) {
        return (await this.api.get("/admin/" + id_borrow)).data;
    }
    async updateStatusBorrow(data) {
        return (await this.api.put("/admin/", data)).data;
    }
    async sort(data) {
        return (await this.api.post("/sort", data)).data;
    }
    async borrow(data) {
        return (await this.api.get("/borrow")).data;
    }
    async create(data) {
        return (await this.api.post("/", data)).data;
    }
}
export default new BorrowService();