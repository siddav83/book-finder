import axios from 'axios';

const KEY = "AIzaSyA2KTQR3HPiYGkg1MoTceN5bfUwp4Y8J1g"

export default axios.create({
  baseURL: "https://www.googleapis.com/books/v1/volumes?",
  params: {
    maxResults: 16,
    orderBy: 'relevance',
    Key: KEY
  },
});
