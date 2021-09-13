import React, { useState, useEffect } from 'react'
import weatherService from '../services/weatherService'

const Weather = ({ capital, setErrorMsg }) => {
	const [weatherData, setWeatherData] = useState([])

	useEffect(() => {
		const fetchWeatherData = async () => {
			const response = await weatherService.getWeatherData(capital)
			setWeatherData(response)
		}
		try {
			fetchWeatherData()
		} catch (e) {
			setErrorMsg('Couldn\'t fetch weather data!')
		} setTimeout(() => {
			setErrorMsg(null)
		}, 2000)
	}, [capital, setErrorMsg])

	return (
		<div>
			{capital ?
				<>
					<h1>Weather in {capital}</h1>
					<b>Temperature</b>: {weatherData?.temperature} C<br />
					<img src={weatherData?.weather_icons} alt={weatherData?.weather_descriptions} width='100' /><br />
					<b>Wind</b>: {weatherData?.wind_speed} km/h, {weatherData?.wind_dir}
				</> :
				<h3>No weather info <img className='ladybug' src='ladybug.png' alt='ladybug'/></h3>}
		</div>
	)
}

export default Weather