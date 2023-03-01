import { useState } from 'react'
import { Form } from 'semantic-ui-react'

export default function PokemonForm({ handleSubmit }) {
	const [pokemonToAdd, setPokemonToAdd] = useState({
		name: '',
		hp: 0,
		sprites: {
			front: '',
			back: ''
		}
	})
	return (
		<div>
			<h3>Add a Pokemon!</h3>
			<Form
				onSubmit={(e) => {
					e.preventDefault()
					handleSubmit(pokemonToAdd)
				}}
			>
				<Form.Group widths='equal'>
					<Form.Input
						fluid
						label='Name'
						placeholder='Name'
						name='name'
						value={pokemonToAdd.name}
						onChange={(e) =>
							setPokemonToAdd({
								...pokemonToAdd,
								[e.target.name]: e.target.value
							})
						}
					/>
					<Form.Input
						fluid
						label='hp'
						placeholder='hp'
						name='hp'
						value={pokemonToAdd.hp}
						onChange={(e) =>
							setPokemonToAdd({
								...pokemonToAdd,
								[e.target.name]: e.target.value
							})
						}
					/>
					<Form.Input
						fluid
						label='Front Image URL'
						placeholder='url'
						name='front'
						value={pokemonToAdd.sprites.front}
						onChange={(e) => {
							setPokemonToAdd({
								...pokemonToAdd,
								sprites: {
									...pokemonToAdd.sprites,
									[e.target.name]: e.target.value
								}
							})
						}}
					/>
					<Form.Input
						fluid
						label='Back Image URL'
						placeholder='url'
						name='back'
						value={pokemonToAdd.sprites.back}
						onChange={(e) =>
							setPokemonToAdd({
								...pokemonToAdd,
								sprites: {
									...pokemonToAdd.sprites,
									[e.target.name]: e.target.value
								}
							})
						}
					/>
				</Form.Group>
				<Form.Button>Submit</Form.Button>
			</Form>
		</div>
	)
}
