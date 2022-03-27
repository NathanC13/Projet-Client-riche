const API_KEY = "AIzaSyDnUpxohULaEXA1P5hArRI_1mg4NvdzDis" // Clé de l'API pour notre projet



// Les méthodes si dessous utilisent les recherches par API https://www.googleapis.com/books/v1/volumes
const useGoogleBookApi = {

  bySearch: (search) => // méthode pour chercher simplement avec une simple recherche
    new Promise((resolve, reject) => {
      const BOOK_API_URL = `https://www.googleapis.com/books/v1/volumes?q=${search}&key=${API_KEY}`;

      fetch(BOOK_API_URL)
        .then((response) => response.json())
        .then((jsonResponse) => resolve(jsonResponse))
        .catch((err) => reject(err));
    }),

  byId: (search) => // méthode pour rechercher avec l'id du livre
    new Promise((resolve, reject) => {
      const BOOK_API_URL = `https://www.googleapis.com/books/v1/volumes/${search}`;

      fetch(BOOK_API_URL)
        .then((response) => response.json())
        .then((jsonResponse) => resolve(jsonResponse))
        .catch((err) => reject(err));
    }),

  byEbook: (search) => // méthode pour rechercher avec un filtre qui sert a savoir si les livres sont des eBooks
    new Promise((resolve, reject) => {
      const BOOK_API_URL = `https://www.googleapis.com/books/v1/volumes?q=${search}&filter=ebooks&key=${API_KEY}`;

      fetch(BOOK_API_URL)
        .then((response) => response.json())
        .then((jsonResponse) => resolve(jsonResponse))
        .catch((err) => reject(err));
    }),

  byEbookFree: (search) => // Méthode pour savoir si renvoie les livres Ebooks et gratuits
    new Promise((resolve, reject) => {
      const BOOK_API_URL = `https://www.googleapis.com/books/v1/volumes?q=${search}&filter=free-ebooks&key=${API_KEY}`;

      fetch(BOOK_API_URL)
        .then((response) => response.json())
        .then((jsonResponse) => resolve(jsonResponse))
        .catch((err) => reject(err));
    }),
    byNewest: (search) => // méthode qui renvoie les livres ordonnés dans l'odre décroissant
    new Promise((resolve, reject) => {
      const BOOK_API_URL = `https://www.googleapis.com/books/v1/volumes?q=${search}&orderBy=newest&key=${API_KEY}`;

      fetch(BOOK_API_URL)
        .then((response) => response.json())
        .then((jsonResponse) => resolve(jsonResponse))
        .catch((err) => reject(err));
    }),
    byAuthor: (search,theAuthor) => // méthode qui renvoie les requetes de livre selon un auteur spécifié
    new Promise((resolve, reject) => {
      const BOOK_API_URL = `https://www.googleapis.com/books/v1/volumes?q=${search}+inauthor:${theAuthor}&key=${API_KEY}`;

      fetch(BOOK_API_URL)
        .then((response) => response.json())
        .then((jsonResponse) => resolve(jsonResponse))
        .catch((err) => reject(err));
    }),
    byAuthorNewest: (search,theAuthor) => // méthode qui renvoie les livres récents selon un auteur donné
    new Promise((resolve, reject) => {
      const BOOK_API_URL = `https://www.googleapis.com/books/v1/volumes?q=${search}+inauthor:${theAuthor}&orderBy=newest&key=${API_KEY}`;

      fetch(BOOK_API_URL)
        .then((response) => response.json())
        .then((jsonResponse) => resolve(jsonResponse))
        .catch((err) => reject(err));
    }),

    byAuthorEbook: (search,theAuthor) => // méthode qui renvoie les livres ebook selon un auteur donné
    new Promise((resolve, reject) => {
      const BOOK_API_URL = `https://www.googleapis.com/books/v1/volumes?q=${search}+inauthor:${theAuthor}&filter=ebooks&key=${API_KEY}`;

      fetch(BOOK_API_URL)
        .then((response) => response.json())
        .then((jsonResponse) => resolve(jsonResponse))
        .catch((err) => reject(err));
    }),
    byAuthorEbookNewest: (search,theAuthor) => // méthode qui renvoie les livres recents selon un auteur donné
    new Promise((resolve, reject) => {
      const BOOK_API_URL = `https://www.googleapis.com/books/v1/volumes?q=${search}+inauthor:${theAuthor}&filter=ebooks&orderBy=newest&key=${API_KEY}`;

      fetch(BOOK_API_URL)
        .then((response) => response.json())
        .then((jsonResponse) => resolve(jsonResponse))
        .catch((err) => reject(err));
    }),

    
    
};

export default useGoogleBookApi;
