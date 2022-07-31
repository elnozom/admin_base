import i18n from '@/i18n';
import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Base from "@/components/base/base.vue";
import Home from "@/views/Home.vue";
import Login from "@/views/Login.vue";
Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    component: Base,
    children: [
      {
        path: "/",
        name: "Home",
        component: Home,
      },
      {
        path: "/items",
        name: "items-list",
        component: () => import('@/views/items/index.vue'),
      },
      {
        path: "/items/create",
        name: "items-create",
        component: () => import('@/views/items/create.vue'),
      },
      {
        path: "/items/edit/:id",
        name: "items-edit",
        component: () => import('@/views/items/edit.vue'),
      },
      {
        path: "/items/view/:id",
        name: "items-view",
        component: () => import('@/views/items/view.vue'),
      },
      {
        path: "/items/groups",
        name: "items-groups",
        component: () => import('@/views/items/group.vue'),
      },
      {
        path: "/items/groups/:id",
        name: "items-groups-edit",
        component: () => import('@/views/items/group.vue'),
      },
      // {
      //   path: "/items/",
      //   name: "items",
      //   children: [
      //     {
      //       path: "/",
      //       name: "items-list",
      //       component: () => import('@/views/items/index.vue'),
      //     },
      //     {
      //       path: "create",
      //       name: "items-create",
      //       component: () => import('@/views/items/create.vue'),
      //     },
      //     {
      //       path: "edit/:id",
      //       name: "items-edit",
      //       component: () => import('@/views/items/edit.vue'),
      //     },
      //     {
      //       path: "view/:id",
      //       name: "items-view",
      //       component: () => import('@/views/items/view.vue'),
      //     },
      //     {
      //       path: "groups",
      //       name: "items-groups",
      //       component: () => import('@/views/items/group.vue'),
      //     },
      //   ]
      // },

    ]
  },
  {
    path: '/server-error',
    component: () => import('@/views/errors/server.vue'),
  },
  {
    path: '/login',
    component: Login
  }

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
