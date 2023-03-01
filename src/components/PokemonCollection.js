import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

export default function PokemonCollection({ pokemons }) {
	return (
		<Card.Group itemsPerRow={6}>
			{pokemons.map((pokemon) => (
				<PokemonCard
					key={pokemon.id}
					name={pokemon.name}
					hp={pokemon.hp}
					sprites={pokemon.sprites}
				/>
			))}
		</Card.Group>
	)
}
