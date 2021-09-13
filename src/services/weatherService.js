/* eslint-disable no-undef */
import axios from 'axios'
const API_KEY = process.env.REACT_APP_API_KEY

const getWeatherData = async (capital) => {
	const response = await axios.get(`https://api.allorigins.win/get?url=${encodeURIComponent(`http://api.weatherstack.com/current?access_key=${API_KEY}&query=${capital}&units=m`)}`)
	return JSON.parse(response.data.contents).current
}

const exports = { getWeatherData }
export default exports