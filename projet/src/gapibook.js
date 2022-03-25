//const API_KEY = 'f45f7a43';

const useGoogleBookApi = {
  bySearch: (search) =>
    new Promise((resolve, reject) => {
      const BOOK_API_URL = `https://www.googleapis.com/books/v1/volumes?q=${search}`;

      fetch(BOOK_API_URL)
        .then((response) => response.json())
        .then((jsonResponse) => resolve(jsonResponse))
        .catch((err) => reject(err));
    }),

  byId: (search) =>
    new Promise((resolve, reject) => {
      const BOOK_API_URL = `https://www.googleapis.com/books/v1/volumes/${search}`;

      fetch(BOOK_API_URL)
        .then((response) => response.json())
        .then((jsonResponse) => resolve(jsonResponse))
        .catch((err) => reject(err));
    }),
};

export default useGoogleBookApi;
