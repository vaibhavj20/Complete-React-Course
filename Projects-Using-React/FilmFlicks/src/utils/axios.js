import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NjI3NzM4OGY5NzRhZTVlOTYwYzkwNDliNDAwNmE1NiIsIm5iZiI6MTcyMDE1NTg0MC4wNDc3NSwic3ViIjoiNjY4Nzc3NmI1YjZjNzI5YmE3Nzk2ZGE0Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.KBbL-MhDVNAUT1EOIkf7DXuE0AwnRV-jFBeO3TgPb4g",
  },
});

export default instance;
