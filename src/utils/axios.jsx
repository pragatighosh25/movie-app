import axios from "axios";

const instance= axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMjRmZDNkMzViYjg5ZjdiNGI3MThjZGFmM2M1OTI3MyIsIm5iZiI6MTc0ODEwMDUxMy43NTUsInN1YiI6IjY4MzFlNWExMTg0ZWI3ZmU0NmE4NjU4ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-rOu2W_y7DqQ-RRDjcGgq_ypyuxgNz2ovib_vc_V0Rg'
  }
})

export default instance;