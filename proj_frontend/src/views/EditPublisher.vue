<template>
    <div class="edit-borrow-form">
        <h2>Chỉnh sửa thông tin nhà xuất bản</h2>
        <form id="formUpdatePublisher" @submit.prevent="onSubmitEditPublisher" v-if="publisher">
            <div class="form-group">
                <label for="publisher_id">Publisher ID:</label>
                <input type="text" v-model="publisher.manxb" id="publisher_id"
                    name="title" required>
            </div>
            <div class="form-group">
                <label for="publisher_name">Publisher Name:</label>
                <input type="text" v-model="publisher.tennxb" id="publisher_name"
                    name="title" required>
            </div>
            <div class="form-group">
                <label for="publisher_address">Publisher Address:</label>
                <input type="text" v-model="publisher.diachi" id="publisher_address"
                    name="title" required>
            </div>
            <div class="wrap-btn">
                <button name="updatePublisher" type="submit">Lưu</button>
                <button class="btnBack" @click="$router.push({name: 'admin.index.publisher'})" name="back" type="button">Quay lại</button>
            </div>
        </form>
    </div>
</template>

<script setup>
import PublisherService from '@/services/publisher.service';
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

// Ref
const publisher = ref(null);
const route = useRoute();
const router = useRouter();

// Methods
async function onSubmitEditPublisher() {
    const publisherEdited = await PublisherService.edit(publisher.value);
    alert('Cập nhật thành công !');
    router.go(-1);
}

// Hooks
onMounted(async () => {
    const id = route.params.id;
    publisher.value = await PublisherService.getOne(id);
})

</script>

<style scoped>
.wrap-btn {
    display: flex;
}
.btnBack {
    width: max-content;
    padding: 10px;
    height: max-content;
    border-radius: 5px;
    background-color: #007bff;
    color: white;
    border: none;
    margin-left: 10px;
}
</style>