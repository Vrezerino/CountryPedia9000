import React from 'react'

const FilterForm = ({ countries, setResults }) => {
	const filterCountries = (event) => {
		const input = event.target.value.toLowerCase().trim()

		if (input.length > 0) {
			setResults(
				countries.filter((country) =>
					country.name.toLowerCase().includes(input) ||
								country.name.toLowerCase() === input,
				),
			)
		} else {
			setResults([])
		}
	}

	return(
		<input type='text'
			id='search'
			name='search'
			className='searchCountry'
			autoFocus
			onChange={filterCountries} />
	)
}

export default FilterForm