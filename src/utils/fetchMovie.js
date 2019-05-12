export const fetchMovie = (url) => {
  return fetch(url)
  .then(response => {
    console.log('response', response)
    if(!response.ok) {
      throw Error('Error fetching movie')
    } else {
      return response.json();

    }
  })
}