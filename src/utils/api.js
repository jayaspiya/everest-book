import axios from "axios"
export default axios.create({
  // Hosted URL
  baseURL: `https://everest-book.herokuapp.com/`,
  // baseURL: `http://localhost:5500`,
})
