<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import PokemonCard from "./PokemonCard.vue";
import { computed, onMounted, ref } from "vue";
import _ from "lodash";
import { getPokemons } from "@/service/service";
import Spinner from "./Spinner.vue";
//import { useQuery } from 'vue-query'

const search = ref("");
const offset = ref(0);
const pokemonList = ref<Record<string, any>[]>([]);

const filteredPokemonList = computed(() => {
  return pokemonList.value.filter((pokemon) => {
    return _.includes(pokemon.name, _.lowerCase(search.value));
  });
});

const handleLoadMore = () => {
  offset.value += 100;
  getPokemons(_.toString(offset.value)).then((response) => {
    pokemonList.value = [...pokemonList.value, ...response.results];
  });
};

const computedPokemon = computed(() => pokemonList.value);

onMounted(() => {
  _.delay(() => {
    getPokemons().then((response) => {
      pokemonList.value = response.results;
    });
  }, 250);
});
</script>

<template lang="pug">


main(class="text-red-400 max-w-7xl mx-auto flex justify-center flex-col items-center min-h-[calc(100vh-130px)]")
  input(class="p-2  m-auto border border-gray-300 rounded-lg  mt-7 w-[80%] md:w-[50%]" type="text" placeholder="Search Pokemon" v-model="search")
  div(v-if="computedPokemon.length > 0" class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 p-10 w-full ")
    PokemonCard(v-for="pokemon in filteredPokemonList" :key="pokemon.name" :name="pokemon.name" :url="pokemon.url")
  div(v-else class="text-2xl text-white translate-y-[-30vh]")
    Spinner 
  button(class="bg-black bg-opacity-25 text-white px-6 py-3 rounded-lg my-5 " @click="handleLoadMore") Load More


</template>

<style lang="css">
i {
  color: white !important;
}
</style>
