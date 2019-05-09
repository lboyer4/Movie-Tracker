export const fetchUsers = (url, options) => {
  return fetch(url, options)
  .then(response => {
    if(!response.ok) {
      throw Error ('Error fetching users')
    } else {
      return response.json()
    }
  })
}