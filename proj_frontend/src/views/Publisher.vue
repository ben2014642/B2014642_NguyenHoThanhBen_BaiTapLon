<template>
    <div class="borrowed-books">
        <div class="">
            <router-link :to="{ name: 'admin.create.publisher' }" class="btn btnSuccess">Thêm</router-link>

        </div>

        <div class="search-filter">
            <div>
                <label for="search">Tìm kiếm sách:</label>
                <input type="text" v-model="searchVal" id="search" name="search">
            </div>
            
        </div>

        <h2>List Books</h2>
        <table style="width: 100%;">
            <thead>
                <tr>
                    <th>Publisher ID</th>
                    <th>Publisher Name</th>
                    <th>Address</th>

                    <!-- <th>Status</th> -->
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="publisher in publisherTableData">
                    <td>{{ publisher.manxb }}</td>
                    <td>{{ publisher.tennxb }}</td>
                    <td>{{ publisher.diachi }}</td>

                    <td>
                        <router-link class="btn btnEdit"
                            :to="{ name: 'admin.edit.publisher', params: { id: publisher._id } }">EDIT</router-link>
                        <a @click.prevent="deletePublisher(publisher._id)" type="submit" class="btn btnDelete">DELETE</a>
                    </td>

                </tr>

            </tbody>
        </table>
    </div>
</template>

<script setup>
import { onMounted, ref, computed } from 'vue';
import PublisherService from '@/services/publisher.service';
import { useRouter } from 'vue-router';

// Refs
const publishers = ref([]);
const router = useRouter();
const searchVal = ref('');


// Methods
async function deletePublisher(id) {
    const confirmDel = confirm("Bạn có chắc chắn muốn xóa ?");
    if (!confirmDel) {
        return;
    }
    await PublisherService.delete(id);
    router.push({ name: 'admin.index.publisher' })

}


// Hooks
const publisherTableData = computed(() =>
publishers.value.filter(
        (data) =>
            !searchVal.value ||
            data.tennxb.toLowerCase().includes(searchVal.value.toLowerCase())

    )
)


onMounted(async () => {
    publishers.value = await PublisherService.getAll();
    console.log(publishers.value);
})

</script>
