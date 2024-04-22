<template>
    <main>
        <section>
            <div class="content">
                <div class="borrowed-books">
                    <a href="javascript:history.back(1);" class="btn btnDanger">Quay lại</a>

                    <h2>Borrow Books</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Book Name</th>
                                <th>Borrower Name</th>
                                <th>Borrow Date</th>
                                <th>Return Date</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="borrow in borrows">
                                <td>8</td>
                                <td>{{ borrow.masach.tensach }}</td>
                                <td>{{ fullname }}</td>
                                <td>{{ moment(borrow.ngaymuon).format("L") }}</td>
                                <td>{{ moment(borrow.ngaytra).format("L") }}</td>
                                <td>
                                    <button class="btn btnSuccess">
                                        {{ borrow.trangthai }}
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>
        </section>
    </main>
</template>

<script setup>
import {ref, onMounted, computed} from 'vue';
import BorrowService from '@/services/borrow.service.js';
import { useUserStore } from '@/stores/userStore';
import moment from 'moment';

// Ref
const borrows = ref([]);
const userStore = useUserStore();

// Hooks

const fullname = computed(() => {
    return userStore.getUser().holot + " " + userStore.getUser().ten;
})
onMounted(async () => {
    borrows.value = await BorrowService.getAllByUser(userStore.getUser()._id);
    console.log(borrows.value);
})

</script>