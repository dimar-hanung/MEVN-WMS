# Client
## Main Task
- [x] Login
- [x] Register
- [x] Product List

## How to run
1. `npm install`
1. `npm run serve`


## Technique
- [x] Tailwindcss
- [x] Datatables menggunakan https://vuetifyjs.com/en/components/data-tables/
- [x] Mengecualikan komponen pada routes tertentu \
Menggunakan !meta , referensi : https://github.com/vuejs/vue-router/issues/254
    ```js
    // src/router/index.js
    const router = new VueRouter({
    routes: [
        {
        path: '/foo',
        component: Foo,
        meta: { hideNavigation: true }
        }
    ]
    })
    ```
    ```html
    <!-- app.vue -->
    <navigation v-if="!$route.meta.hideNavigation" />
    ```
- [x] Insert Button pada Datatable vuetifyjs , https://stackoverflow.com/questions/59081299/vuetify-insert-action-button-in-data-table-and-get-row-data

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
