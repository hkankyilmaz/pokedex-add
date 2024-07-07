//service

import type { GetPokemons } from '@/types/service'

const API_URL = 'https://pokeapi.co/api/v2/pokemon?limit=100&offset=0'

export const getPokemons: GetPokemons = async (url = API_URL, options) => {
  const response = await fetch(url, options)
  const data = await response.json()

  if (!response.ok) {
    throw new Error(data.message)
  }

  return data
}
