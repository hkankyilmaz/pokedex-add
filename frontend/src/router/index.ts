import { createRouter, createWebHistory } from 'vue-router'
import PokemonDetail from '../views/PokemonDetail.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [{ path: '/pokemon/:id', name: PokemonDetail, component: PokemonDetail }]
})

export default router
