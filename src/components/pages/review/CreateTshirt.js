export default function CreateTshirt(data) {
	// Simple POST request with a JSON body using fetch
	const requestOptions = {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(data)
	};
	fetch('https://jsonplaceholder.typicode.com/posts', requestOptions)
		.then(response => response.json())
		.then(json => console.log(json))
		.then(alert('Sucess, check console for the posted data response'))
}
