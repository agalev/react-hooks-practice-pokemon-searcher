import { useState } from 'react'
import { Card } from 'semantic-ui-react'

export default function PokemonCard({ name, hp, sprites }) {
	const [displayBack, toggleDisplayBack] = useState(false)
	return (
		<Card>
			<div onClick={() => toggleDisplayBack(!displayBack)}>
				<div className='image'>
					<img src={displayBack ? sprites.back : sprites.front} alt='oh no!' />
				</div>
				<div className='content'>
					<div className='header'>{name}</div>
				</div>
				<div className='extra content'>
					<span>
						<i className='icon heartbeat red' />
						{hp}
					</span>
				</div>
			</div>
		</Card>
	)
}
