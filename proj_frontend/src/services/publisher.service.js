import createApiClient from "./api.service";
class PublisherSerivce {
    constructor(baseUrl = "/api/publishers") {
        this.api = createApiClient(baseUrl);
    }
    async getAll() {
        return (await this.api.get("/")).data;
    }
    async getOne(id) {
        return (await this.api.get("/" + id)).data;
    }
    async edit(data) {
        return (await this.api.put("/" + data._id, data)).data;
    }
    async delete(id) {
        return (await this.api.delete("/" + id)).data;
    }
    async create(data) {
        return (await this.api.post("/", data)).data;
    }

}
export default new PublisherSerivce();