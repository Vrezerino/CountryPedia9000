import React, { useState, useEffect } from 'react'
import countryService from './services/countryService'
import FilterForm from './components/FilterForm'
import Country from './components/Country'
import Notification from './components/Notification'
import './App.css'

const App = () => {
	const [countries, setCountries] = useState([])
	const [countryResults, setCountryResults] = useState([])
	const [errorMessage, setErrorMessage] = useState(null)

	useEffect(() => {
		const fetchCountries = async () => {
			const countries = await countryService.getCountries()
			setCountries(countries)
		}
		try {
			fetchCountries()
		} catch (e) {
			setErrorMessage('Error')
		} setTimeout(() => {
			setErrorMessage(null)
		}, 2000)
	}, [])

	return (
		<>
			<div className="container">
				<h1>
					<img className="globe"
						src="globe.png"
						alt="globe" /> CountryPedia 9000
				</h1>

				<Notification error={errorMessage} />

				<table className='controls'>
					<tbody>
						<tr>
							<td className='centered'>
								<FilterForm
									countries={countries}
									setResults={setCountryResults} />
							</td>
						</tr>
						<tr>
							<td>
								<Country
									results={countryResults}
									setResults={setCountryResults}
									setErrorMsg={setErrorMessage}/>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
			<hr />
			<div className='author'>
				© 2021
				<a target='_blank'
					rel='noreferrer'
					href='https://github.com/Vrezerino'>
					Patrick Park
				</a>
			</div>
		</>
	)
}

export default App