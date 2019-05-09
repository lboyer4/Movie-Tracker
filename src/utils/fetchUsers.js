export const fetchUsers = () => {
  return fetch('http://localhost:3000/api/users')
  .then(response => {
    if(!response.ok) {
      throw Error ('Error fetching users')
    } else {
      return response.json()
    }
  })
}