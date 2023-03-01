import { useState, useEffect } from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

export default function PokemonPage() {
	const [pokemons, setPokemons] = useState([])
	const [searchQuery, setSearchQuery] = useState('')

	const handleSubmit = (pokemonToAdd) => {
		fetch('http://localhost:3001/pokemon', {
			method: 'POST',
			headers: {
				'Content-type': 'application/json'
			},
			body: JSON.stringify(pokemonToAdd)
		})
			.then((r) => r.json())
			.then((response) => setPokemons((pokemons) => [...pokemons, response]))
	}

	useEffect(() => {
		fetch('http://localhost:3001/pokemon')
			.then((r) => r.json())
			.then((pokemonsArray) => setPokemons(pokemonsArray))
	}, [])

	// When performing a Search ~ filtered array is passed to collection
	const filteredArray = pokemons.filter((pokemon) =>
		pokemon.name.includes(searchQuery)
	)

	console.log('render')

	return (
		<Container>
			<h1>Pokemon Searcher</h1>
			<br />
			<PokemonForm handleSubmit={handleSubmit} />
			<br />
			<Search setSearchQuery={setSearchQuery} />
			<br />
			<PokemonCollection pokemons={filteredArray} />
		</Container>
	)
}
