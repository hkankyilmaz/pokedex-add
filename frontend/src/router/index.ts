import { createRouter, createWebHistory } from 'vue-router'
import PokemonDetail from '../views/PokemonDetail.vue'
import PokemonList from '../components/PokemonList.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'Home', component: PokemonList },
    { path: '/pokemon/:id', name: PokemonDetail, component: PokemonDetail }
  ]
})

export default router
