const API_BASE = "https://api.themoviedb.org/3";

const basicFetch = async (endpoint) => {
  const req = await fetch(`${API_BASE}${endpoint}`);
  const json = await req.json();
  return json;
};

export default {
  getCategorias: async () => {
    return [
      {
        title: "Ação",
        id: "28",
      },
      {
        title: "Aventura",
        id: "12",
      },
      {
        title: "Animação",
        id: "16",
      },
      {
        title: "Comédia",
        id: "35",
      },
      {
        title: "Crime",
        id: "80",
      },
      {
        title: "Documentário",
        id: "99",
      },
      {
        title: "Drama",
        id: "18",
      },
      {
        title: "Família",
        id: "10751",
      },
      {
        title: "Fantasia",
        id: "14",
      },
      {
        title: "História",
        id: "36",
      },
      {
        title: "Terror",
        id: "27",
      },
      {
        title: "Música",
        id: "10402",
      },
      {
        title: "Mistério",
        id: "9648",
      },
      {
        title: "Romance",
        id: "10749",
      },
      {
        title: "Ficção Científica",
        id: "878",
      },
      {
        title: "Cinema TV",
        id: "10770",
      },
      {
        title: "Thriller",
        id: "53",
      },
      {
        title: "Guerra",
        id: "10752",
      },
      {
        title: "Faroeste",
        id: "37",
      },
    ];
  },
};
