import useGoogleBookApi from "../gapibook.js";

Vue.component("detail", {
  props: ["bookId"],
  template: `
    <table class="striped">
       <tbody>
            <tr> <td> Titre </td> <td> {{detail.volumeInfo.title}} </td></tr>
            <tr> <td> Année </td> <td> {{detail.volumeInfo.publishedDate}} </td></tr>
            <tr> <td> Nombre de pages </td> <td> {{detail.volumeInfo.pageCount}} </td></tr>
            <tr> <td> Genre </td> <td> {{detail.Genre}} </td></tr>
            <tr> <td> Auteur </td> <td> {{detail.volumeInfo.authors}} </td></tr>
            <tr> <td> Description </td> <td> {{detail.volumeInfo.description}} </td></tr>
      </tbody>
  </table>`,
  data: function () {
    return {
      detail: {
        title: null,
        Year: null,
        Released: null,
        pageCount: null,
        Genre: null,
        Author: null,
        Writer: null,
        Actors: null,
        Descritpion: null,
        Language: null,
        Country: null,
        Awards: null,
        Poster: null,
        Ratings: [],
      },
    };
  },
  mounted() {
    if (this.bookId != undefined) {
      useGoogleBookApi.byId(this.bookId).then((data) => {
        this.detail = data;
        console.log(data);
      });
    }
  },
});
