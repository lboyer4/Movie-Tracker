export const fetchUsers = (url, options) => {
  return fetch(url, options)
  .then(response => {
    if(!response.ok) {
      return 'error'
    } else {
      return response.json()
    }
  })
}

//comment again