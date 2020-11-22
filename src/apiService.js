
const KEY = "19175032-3cc6a7c5a21d8db9de954fc56"

const apiService = {
  getUrl: (query, page) => {
  const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${query}&page=${page}&per_page=12&key=${KEY}`

  return url}
}

export default apiService