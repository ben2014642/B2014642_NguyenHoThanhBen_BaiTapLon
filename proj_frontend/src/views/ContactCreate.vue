<template>
    <div v-if="contact" class="page">
        <h4>Tạo Liên hệ</h4>
        <ContactForm :typeSubmit="typeSubmit" :contact="contact" @create:contact="createContact" />
        <p>{{ message }}</p>
    </div>
</template>
<script>
import ContactForm from "@/components/ContactForm.vue";

import ContactService from "@/services/contact.service";
export default {
    components: {
        ContactForm,
    },
    data() {
        return {
            contact: {
                name: '',
                email: '',
                address: '',
                phone: ''
            },
            message: "",
            typeSubmit: "create"
        };
    },
    methods: {
        async createContact(data) {
            try {
                await ContactService.create(data);
                this.message = "Liên hệ được tạo thành công.";
            } catch (error) {
                console.log(error);
            }
        },

    },

};
</script>@/services/book.service