import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import ShoppingCardPage from '../views/ShoppingCardPage.vue'
import RegistratiePage from '../views/RegistratiePage.vue'
import CategoriePage from '../views/CategoriePage.vue'
import SearchPage from '../views/SearchPage.vue'
import NotFoundPage from '../views/NotFoundPage.vue'
import ProductsPage from '../views/ProductsPage.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/search/:term',
    name: 'search',
    component: SearchPage
  },
  {
    path: '/shoppingcard',
    name: 'shoppingcard',
    component: ShoppingCardPage
  },
  {
    path: '/registratie',
    name: 'registratie',
    component: RegistratiePage
  },
  {
    path: '/categorie/:id', // De juiste path voor de categoriepagina
    name: 'categorie',
    component: CategoriePage
  },
  {
    path: '/search',
    redirect: { name: 'search' } // Redirect naar de zoekpagina
  },
  {
    path: '/products',
    name: 'products',
    component: ProductsPage
  },
  {
    path: '/:catchAll(.*)',
    name: 'notfound',
    component: NotFoundPage
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
