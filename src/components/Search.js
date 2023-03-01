export default function Search({ setSearchQuery }) {
	return (
		<div className='ui search'>
			<div className='ui icon input'>
				<input
					onChange={(e) => setSearchQuery(e.target.value.toLowerCase())}
					className='prompt'
				/>
				<i className='search icon' />
			</div>
		</div>
	)
}
