import createApiClient from "./api.service";
class BookService {
    constructor(baseUrl = "/api/books") {
        this.api = createApiClient(baseUrl);
    }
    async getAll() {
        return (await this.api.get("/")).data;
    }
    async getOne(masach) {
        return (await this.api.get("/" + masach)).data;
    }
    async edit(data) {
        return (await this.api.put("/edit", data)).data;
    }
    async delete(masach) {
        return (await this.api.delete("/delete/" + masach)).data;
    }
    async sort(data) {
        return (await this.api.post("/sort", data)).data;
    }
    async borrow() {
        return (await this.api.get("/borrow")).data;
    }
    async create(data) {
        return (await this.api.post("/create", data)).data;
    }

}
export default new BookService();