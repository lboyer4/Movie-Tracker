export const fetchUsers = (url, options) => {
	console.log('url', url)
	console.log('options', options)
  return fetch(url, options)
  .then(response => {
  	console.log('response', response)
    if(!response.ok) {
      return 'error'
    } else {
      return response.json()
    }
  })
}

