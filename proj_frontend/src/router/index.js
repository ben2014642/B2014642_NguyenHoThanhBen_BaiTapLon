import { createWebHistory, createRouter } from "vue-router";
import DashBoard from "@/views/DashBoard.vue";
import AdminDashBoard from "@/views/AdminDashBoard.vue";
import EditBook from "@/views/EditBook.vue";
import CreateBook from "@/views/CreateBook.vue";
import Publisher from "@/views/Publisher.vue";
import CreatePublisher from "@/views/CreatePublisher.vue";
import EditPublisher from "@/views/EditPublisher.vue";
import AdminBorrow from "@/views/AdminBorrow.vue";
import EditAdminBorrow from "@/views/EditAdminBorrow.vue";
import Login from "@/views/Login.vue";
import AdminLogin from "@/views/AdminLogin.vue";
import Register from "@/views/Register.vue";
import Borrow from "@/views/Borrow.vue";
import FormBorrow from "@/views/FormBorrow.vue";
import ClientLayout from "@/layouts/ClientLayout.vue";
import AdminLayout from "@/layouts/AdminLayout.vue";
const routes = [
    {
        path: "/",
        component: ClientLayout,
        children: [
            {
                path: "/",
                name: "home",
                component: DashBoard,
            },
            {
                path: "/borrow",
                name: "borrow",
                component: Borrow,
            },
            {
                path: "/form-borrow/:masach",
                name: "form-borrow",
                component: FormBorrow,
            },
            {
                path: "/:pathMatch(.*)*",
                name: "notfound",
                component: () => import("@/views/NotFound.vue"),
            },
            {
                path: "/contacts/:id",
                name: "contact.edit",
                component: () => import("@/views/ContactEdit.vue"),
                props: true // Truyền các biến trong $route.params vào làm props
            },
            {
                path: "/contacts/create",
                name: "contact.create",
                component: () => import("@/views/ContactCreate.vue"),
                props: true // Truyền các biến trong $route.params vào làm props
            },
        ]
    },
    {
        path: "/auth/",
        children: [
            {
                path: "login",
                component: Login,
                name: "login"
            },
            {
                path: "register",
                component: Register
            }
        ]
    },
    {
        path: "/admin",
        component: AdminLayout,
        children: [
            {
                path: "",
                name: "admin.home",
                component: AdminDashBoard,

            },
            {
                path: "login",
                name: "admin.login",
                component: AdminLogin,

            },
            {
                path: "edit/:masach",
                name: "admin.edit.book",
                component: EditBook,
            },
            {
                path: "create",
                name: "admin.create.book",
                component: CreateBook,
            },
            {
                path: "publisher",
                name: "admin.index.publisher",
                component: Publisher,
            },
            {
                path: "publisher/create",
                name: "admin.create.publisher",
                component: CreatePublisher,
            },
            {
                path: "publisher/edit/:id",
                name: "admin.edit.publisher",
                component: EditPublisher,
            }
            ,
            {
                path: "borrow",
                name: "admin.index.borrow",
                component: AdminBorrow,
            },
            {
                path: "borrow/:id_borrow",
                name: "admin.edit.borrow",
                component: EditAdminBorrow,
            }
        ]
    },
];
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});


export default router;