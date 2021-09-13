import axios from 'axios'

const getCountries = async () => {
	const response = await axios.get('https://restcountries.eu/rest/v2/all')
	return response.data
}
const exports = { getCountries }
export default exports